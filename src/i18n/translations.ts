// src/i18n/translations.ts

export type Idioma = "pt" | "en" | "es";

type Translation = {
  title: string;
  createdAt: string;
  removeConfirm: string;
  removeTitle: string;
  btnYes: string;
  btnNo: string;
  placeholder: string;
  all: string;
  pending: string;
  done: string;
};

export const translations: Record<Idioma, Translation> = {
  pt: {
    title: "Lista de Tarefas",
    createdAt: "Criado em",
    removeConfirm: "Você tem certeza que deseja remover esta tarefa da lista?",
    removeTitle: "Remover Tarefa",
    btnYes: "Sim",
    btnNo: "Não",
    placeholder: "Adicionar tarefa",
    all: "Todas",
    pending: "Pendentes",
    done: "Concluídas",
  },
  en: {
    title: "Task List",
    createdAt: "Created on",
    removeConfirm: "Are you sure you want to delete this task?",
    removeTitle: "Delete Task",
    btnYes: "Yes",
    btnNo: "No",
    placeholder: "Add task",
    all: "All",
    pending: "Pending",
    done: "Completed",
  },
  es: {
    title: "Lista de Tareas",
    createdAt: "Creado el",
    removeConfirm: "¿Estás seguro de que deseas eliminar esta tarea?",
    removeTitle: "Eliminar Tarea",
    btnYes: "Sí",
    btnNo: "No",
    placeholder: "Agregar tarea",
    all: "Todas",
    pending: "Pendientes",
    done: "Completadas",
  },
};
