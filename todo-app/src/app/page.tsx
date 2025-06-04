"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navegarParaTarefas = () => {
    router.push("/tarefas");
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 to-black text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">
          Bem-vindo à sua Lista de Tarefas!
        </h1>
        <p className="text-lg md:text-xl">
          Organize seu dia, conquiste seus objetivos.
        </p>
        <button
          onClick={navegarParaTarefas}
          className="mt-6 px-8 py-4 text-lg font-semibold bg-white text-indigo-950 hover:bg-indigo-100 hover:cursor-pointer rounded-2xl shadow-lg transition"
        >
          Ver Tarefas
        </button>
      </div>
    </main>
  );
}
