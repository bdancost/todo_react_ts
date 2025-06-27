// src/services/taskService.ts
import { db } from "./firebase";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";

export const addTask = async (name: string, userId: string) => {
  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      name,
      done: false,
      createdAt: Timestamp.now(),
      userId,
    });
    return docRef.id;
  } catch (error) {
    console.error("Erro ao adicionar tarefa:", error);
    throw error;
  }
};

export const getTasksByUser = async (userId: string) => {
  const q = query(collection(db, "tasks"), where("userId", "==", userId));
  const snapshot = await getDocs(q);

  const tasks = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      done: data.done,
      createdAt: data.createdAt?.toDate().toISOString() || "",
    };
  });

  return tasks;
};

// Atualiza o campo "done" de uma tarefa
export const updateTaskStatus = async (id: string, done: boolean) => {
  try {
    const taskRef = doc(db, "tasks", id);
    await updateDoc(taskRef, {
      done,
    });
  } catch (error) {
    console.error("Erro ao atualizar status da tarefa:", error);
  }
};

// Remove uma tarefa do Firestore
export const deleteTask = async (id: string) => {
  try {
    const taskRef = doc(db, "tasks", id);
    await deleteDoc(taskRef);
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error);
  }
};
