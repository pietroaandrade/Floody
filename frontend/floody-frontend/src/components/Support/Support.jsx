import {FiChevronUp, FiChevronDown, FiPlus, } from "react-icons/fi"
import React, { useState } from "react";

export default function Support(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedProblem, setSelectedProblem] = useState('');

    const problemTypes = [
        "Solicitação de recurso",
        "Relatório de problema",
        "Verificação de número de telefone",
        "Questão de associação e pagamento",
        "Problema com a conta",
        "Outro"
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleProblemSelect = (problem) => {
        setSelectedProblem(problem);
        setIsDropdownOpen(false);
    };

    return(
        <div className="flex flex-col items-center justify-center w-full h-full px-4 py-4 gap-4">
            <div className="w-full mx-auto max-w-[800px] flex flex-col gap-6" >
                <h1 className="text-4xl font-bold mb-1 font-serif">Feedback</h1>
                <div className="flex flex-col gap-2.5 relative">
                    <p>Tipo de problema</p>
                    <button 
                        className="w-full border h-10 px-3 rounded-lg flex items-center justify-between cursor-pointer shadow"
                        onClick={toggleDropdown}
                    >
                        <span className="text-sm text-stone-400">
                            {selectedProblem || "Por favor selecione um problema"}
                        </span>
                        {isDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute top-[calc(100%_+_4px)] left-0 w-full rounded-lg shadow-lg bg-white z-10">
                            {problemTypes.map((problem) => (
                                <div 
                                    key={problem}
                                    className="m-1 px-3 py-2 rounded cursor-pointer hover:bg-stone-100 text-sm text-stone-700"
                                    onClick={() => handleProblemSelect(problem)}
                                >
                                    {problem}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-2.5">
                    <p>Descrição do problema</p>
                    <div className="rounded-[10px] flex flex-col p-3 border shadow">
                    <textarea className="min-h-[180px] text-sm text-stone-400 placeholder:text-[var(--text-disable)] bg-transparent resize-none outline-none" placeholder="Por favor, diga-nos o que você estava tentando fazer, qual comportamento inesperado você notou e se viu alguma mensagem de erro durante o processo."></textarea>
                    <div className="flex items-end justify-between border-t border-[var(--border-light)] pt-3">
                        <div class="flex gap-2">
                            <button className="w-16 h-16 border border-dashed border-[var(--border-dark)] rounded flex items-center justify-center clickable hover:bg-stone-200">
                                <FiPlus />
                            </button>
                        </div>
                        
                    </div>
                </div>
                <div className="mt-4 flex flex-col gap-2.5">
                    <p className="text-sm font-medium">Seu email</p>
                    <input type="email" className=" text-stone-400 border shadow rounded-[10px] p-3 text-sm outline-none  placeholder:text-[var(--text-disable)]" placeholder="Digite seu email">
                    </input>

                </div>
                <button className="mt-4 inline-flex items-center shadow justify-center whitespace-nowrap text-sm font-medium text-stone-100 transition-colors  bg-stone-400 h-[36px] px-[12px] rounded-[10px] gap-[6px] hover:opacity-90 w-[200px] min-h-10">
                    Enviar

                </button>
                <div className="mt-4 bg-stone-400 rounded-[10px] shadow p-4">
                    <h2 class="text-base font-semibold mb-1 text-stone-100">Entre em contato conosco</h2>
                    <p class="text-sm text-stone-500">Você também pode nos contatar por email.</p>
                    <a href="mailto:support@pluvia.com" class="text-sm text-blue-500 hover:opacity-80">support@pluvia.com</a>
                </div>
                
            </div>
        </div>
        </div>
                


        
    )
}