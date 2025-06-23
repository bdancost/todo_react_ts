// src/i18n/translations.ts

export type Idioma = "pt" | "en" | "es";

export const translations = {
  pt: {
    title: "Lista de Tarefas",
    createdAt: "Criado em",
    removeConfirm: "Você tem certeza que deseja remover esta tarefa da lista?",
    removeTitle: "Remover Tarefa",
    btnYes: "Sim",
    btnNo: "Não",
  },
  en: {
    title: "Task List",
    createdAt: "Created on",
    removeConfirm: "Are you sure you want to delete this task?",
    removeTitle: "Delete Task",
    btnYes: "Yes",
    btnNo: "No",
  },
  es: {
    title: "Lista de Tareas",
    createdAt: "Creado el",
    removeConfirm: "¿Estás seguro de que deseas eliminar esta tarea?",
    removeTitle: "Eliminar Tarea",
    btnYes: "Sí",
    btnNo: "No",
  },
};
