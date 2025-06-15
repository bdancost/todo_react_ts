<h1 align="center">
  📝 Todo List React App
</h1>

<p align="center">
  Uma aplicação moderna de lista de tarefas com temas claro/escuro, desenvolvida com 💙 React + TypeScript.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Styled--Components-visual-DB7093?style=for-the-badge&logo=styled-components" />
  <img src="https://img.shields.io/badge/Tests-Jest%20+%20Testing%20Library-%23C21325?style=for-the-badge&logo=testing-library" />
  <img src="https://img.shields.io/badge/LocalStorage-✔️-yellow?style=for-the-badge" />
</p>

---

## ✨ Funcionalidades

✅ Adicionar, concluir e remover tarefas  
🗑️ Modal de confirmação antes de excluir tarefas  
🌙 Alternância entre temas claro e escuro  
💾 Salvamento automático no navegador (`localStorage`)  
📱 Interface totalmente responsiva  
🔍 UX moderno com foco em usabilidade

---

## 🛠️ Tecnologias Utilizadas

| Ferramenta                    | Descrição                             |
| ----------------------------- | ------------------------------------- |
| ⚛️ **React 19**               | Biblioteca principal da interface     |
| 🟦 **TypeScript**             | Tipagem estática para maior segurança |
| 💅 **Styled Components**      | Estilização com suporte a temas       |
| 🔧 **Lucide React**           | Ícones SVG leves e personalizáveis    |
| 🧪 **Jest + Testing Library** | Testes unitários e de integração      |
| 🧠 **LocalStorage API**       | Persistência de dados local           |
| ⚙️ **Create React App**       | Estrutura base do projeto             |

---

## 🚀 Instalação

```bash
# Clone o repositório
git clone https://github.com/bdancost/todo_react_ts.git
cd todo_react_ts

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

🧭 Como Usar
📌 Adicionar Tarefa: Digite e pressione Enter
✅ Concluir Tarefa: Clique na checkbox
🗑️ Remover Tarefa: Clique no ícone de lixeira e confirme
🌗 Alternar Tema: Clique no botão de tema no topo

🧠 Detalhes Técnicos
Tarefas armazenadas como array de objetos Item[]

Tema alternado via ThemeProvider (lightTheme e darkTheme)

Persistência automática com localStorage (tarefas + tema)

Confirmação visual com modal ao remover tarefa

Arquitetura de componentes clara e reutilizável

✅ Testes
Utiliza arquivos .test.tsx para cada componente principal

Biblioteca: React Testing Library

bash
Copy
Edit
npm test
🎨 Personalização
Temas: Edite App.styles.ts para mudar cores globais

Modelo das Tarefas: Modifique Item.ts para novos campos

Ícones: Substitua os ícones com Lucide ou outros SVGs personalizados
