import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Item } from "../../types/Item";

type Props = {
  list: Item[];
};

type DayData = {
  date: string;
  concluídas: number;
  tarefas: string[];
};

// Tooltip personalizado
const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: any[];
}) => {
  if (active && payload && payload.length > 0) {
    const data = payload[0].payload as DayData;

    return (
      <div
        style={{
          background: "#fff",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          color: "#222",
        }}
      >
        <strong>{data.date}</strong>
        <p>Total: {data.concluídas}</p>
        <ul style={{ paddingLeft: "18px", margin: 0 }}>
          {data.tarefas.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};

export const Dashboard = ({ list }: Props) => {
  const dataMap: Record<string, { count: number; tarefas: string[] }> = {};

  list.forEach((item) => {
    if (item.done) {
      const date = new Date(item.createdAt).toLocaleDateString("pt-BR");
      if (!dataMap[date]) {
        dataMap[date] = { count: 0, tarefas: [] };
      }
      dataMap[date].count++;
      dataMap[date].tarefas.push(item.name);
    }
  });

  const chartData: DayData[] = Object.entries(dataMap).map(([date, obj]) => ({
    date,
    concluídas: obj.count,
    tarefas: obj.tarefas,
  }));

  return (
    <div style={{ width: "100%", height: 300, marginTop: 40 }}>
      <h2 style={{ textAlign: "center" }}>📈 Tarefas Concluídas por Dia</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="concluídas" fill="#2ecc71" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
