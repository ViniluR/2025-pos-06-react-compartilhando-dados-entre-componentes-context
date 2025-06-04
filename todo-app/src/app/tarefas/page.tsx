"use client";

import React, { useState } from "react";
import Cabecalho from "@/componentes/Navbar.tsx";
import ModalTarefa from "@/app/tarefas/nova/page.tsx";
import { useTarefas } from "@/data/ContextTarefa";


interface TarefaProps {
	titulo: string;
	concluido?: boolean;
}

const Tarefa: React.FC<TarefaProps> = ({ titulo, concluido }) => {
	const [estaConcluido, setEstaConcluido] = useState(concluido);

	const classeCard = `p-3 mb-1 rounded-lg shadow-md hover:cursor-pointer hover:border ${
		estaConcluido
			? "bg-indigo-700 hover:bg-indigo-800 hover:border-none"
			: "bg-gray-600 hover:bg-gray-700 hover:border-none"
	}`;

	const classeCorDoTexto = estaConcluido ? "text-amber-50" : "";

	const escutarClique = () => {
		console.log(`A tarefa '${titulo}' foi clicada!`);
		setEstaConcluido(!estaConcluido);
	};

	return (
		<div className={classeCard} onClick={() => escutarClique()}>
			<h3 className={`text-xl font-bold ${classeCorDoTexto}`}>{titulo}</h3>
			<p className={`text-sm ${classeCorDoTexto}`}>
				{estaConcluido ? "Concluída" : "Pendente"}
			</p>
		</div>
	);
};

interface TareafasProps {
	dados: TarefaInterface[];
}

const Tarefas: React.FC<TareafasProps> = ({ dados }) => {
	return (
		<div className="grid reverse grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
			{[...dados].reverse().map((tarefa) => (
				<Tarefa
					key={tarefa.id}
					titulo={tarefa.title}
					concluido={tarefa.completed}
				/>
			))}
		</div>
	);
};



const Home = () => {
	const { tarefas, adicionarTarefa } = useTarefas();
	const [mostrarModal, setMostrarModal] = useState(false);

	return (
		<div className="container mx-auto p-4 px-64 bg-gradient-to-br from-indigo-900 to-black">
			<Cabecalho />

			<div className="flex justify-end mb-8">
        		<button onClick={() => setMostrarModal(true)} className="bg-purple-700 hover:cursor-pointer text-white px-10 py-2 rounded">
         				Nova Tarefa
       			</button>
        	</div>

			<Tarefas dados={tarefas} />

			{mostrarModal && (
       			<ModalTarefa onAdicionar={adicionarTarefa} onFechar={() => setMostrarModal(false)}/>
     )}
		</div>
	);
};

export default Home;