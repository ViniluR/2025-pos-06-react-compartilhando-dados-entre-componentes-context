"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { TarefaInterface } from "@/types/tarefa";
import axios from "axios";

interface TarefaContextProps {
  tarefas: TarefaInterface[];
  adicionarTarefa: (titulo: string) => void;
}

const TarefaContext = createContext<TarefaContextProps | undefined>(undefined);

export const useTarefas = () => {
  const context = useContext(TarefaContext);
  if (!context) {
    throw new Error("useTarefas deve ser usado dentro de um TarefaProvider");
  }
  return context;
};

export const TarefaProvider = ({ children }: { children: ReactNode }) => {
  const [tarefas, setTarefas] = useState<TarefaInterface[]>([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/todos")
      .then(res => {
        const tarefasDaAPI = res.data.todos.map((tarefa: any) => ({
          id: tarefa.id,
          title: tarefa.todo,
          completed: tarefa.completed,
        }));
        setTarefas(tarefasDaAPI);
      })
      .catch(err => {
        console.error("Erro ao buscar tarefas:", err);
      });
  }, []);

  const adicionarTarefa = (titulo: string) => {
    const novaTarefa: TarefaInterface = {
      id: tarefas.length + 1,
      title: titulo,
      completed: false,
    };
    setTarefas((prev) => [...prev, novaTarefa]);
  };

  return (
    <TarefaContext.Provider value={{ tarefas, adicionarTarefa }}>
      {children}
    </TarefaContext.Provider>
  );
};
