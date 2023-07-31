import React from "react";
/* import { AiOutlineMail } from "react-icons/Ai";
 */import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="bg-gray-50 flex flex-col h-screen w-screen bg-gradient-to-t from-slate-300 to-white">
      <div className=" w-full h-full flex flex-col justify-center mt-20 text-center ">
        <p className="uppercase text-lg md:text-xl">Vamos construir algo juntos</p>
        <h1 className=" p-4 text-[2rem] md:text-[3rem] ">
          Olá eu sou <span className="text-[#45454e] font-bold "> Igor!</span>
        </h1>
        <h1 className="text-[2rem] md:text-[3rem]  ">
          <span className="text-[#5651e5] font-bold "> Freelancer!</span>
        </h1>
        <p className="p-4 flex mx-auto w-[70%] text-sm md:text-xl">
          Sou um desenvolvedor web experiente, com ênfase em desenvolvimento
          React, buscando oportunidades como freelancer para projetos
          desafiadores. Tenho sólidos conhecimentos, Sou apaixonado por criar sites incríveis e
          estou sempre atualizado com as últimas tendências e tecnologias do
          desenvolvimento web.
        </p>
        <p className="text-[1.5rem] md:text-[2.5rem] ">
          {" "}
          REACT <span className="text-[#5651e5] ">NEXT.JS</span> TAILWIND{" "}
        </p>
      </div>
      <div className=" text-xl  flex items-center justify-between max-w-[330px] m-auto py-4">
        <div className=" text-gray-700 m-3 p-4 rounded-full shadow-xl cursor-pointer hover:scale-125 easy-in duration-300 shadow-gray-400">
          <FaLinkedin size={20} />
        </div>
        <div className=" text-gray-700 p-4 m-3 rounded-full shadow-xl cursor-pointer hover:scale-125 easy-in duration-300 shadow-gray-400">
          <FaGithub size={20} />
        </div>
        {/* <div className=" text-gray-700 p-4  m-3 rounded-full shadow-xl cursor-pointer hover:scale-125 easy-in duration-300 shadow-gray-400">
          <AiOutlineMail size={20} />
        </div> */}
        <div className=" text-gray-700 p-4  m-3 rounded-full shadow-xl cursor-pointer hover:scale-125 easy-in duration-300 shadow-gray-400">
          <FaWhatsapp size={20} />
        </div>
      </div>
    </div>
  );
};

export default Main;
