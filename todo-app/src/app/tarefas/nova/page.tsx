// componentes/ModalTarefa.tsx
"use client";

import { useState } from "react";

interface ModalTarefaProps {
    onAdicionar: (titulo: string) => void;
    onFechar: () => void;
}

const ModalTarefa: React.FC<ModalTarefaProps> = ({ onAdicionar, onFechar }) => {
    const [titulo, setTitulo] = useState("");

    const adicionarTarefa = () => {
        if (titulo.trim()) {
            onAdicionar(titulo);
            setTitulo("");
            onFechar();
        }
    };

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 to-black flex justify-center items-center">
            <div className="bg-gray-700 p-6 rounded-lg w-80 shadow-lg">
                <h2 className="text-xl text-white font-bold mb-4">Nova Tarefa</h2>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Digite a tarefa"
                    className="w-full border border-gray-400 outline-none p-2 mb-6 text-white rounded"
                />
                <div className="flex justify-between">
                    <button onClick={onFechar} className="bg-white hover:bg-gray-200 hover:cursor-pointer text-indigo-700 px-4 py-2 rounded">Cancelar</button>
                    <button onClick={adicionarTarefa} className="bg-indigo-700 hover:bg-indigo-800 hover:cursor-pointer text-white px-4 py-2 rounded">Adicionar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalTarefa;