import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

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
      <div className=" text-[#5651e5] text-[2rem]  flex items-center mb-32 gap-8 justify-between max-w-[60%] m-auto py-4">
        <div className="p-3  ease-in rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110 duration-300">
          <a href="https://www.linkedin.com/in/igormvs2023/" > <FaLinkedin /></a>
        </div>
        <div className=" text-[#5651e5] p-3  ease-in rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110 duration-300">
          <a href="https://github.com/verissimo26" ><FaGithub /></a>

        </div>
        <div className=" text-[#5651e5] p-3 ease-in rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110 duration-300 ">
          <a href="https://api.whatsapp.com/send/?phone=11912374840&text&type=phone_number&app_absent=0" ><FaWhatsapp /></a>
        </div>
        <div className="p-3 ease-in rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110 duration-300">
          <a href="/"><BiLogoGmail /></a>
        </div>
      </div>
    </div>
  );
};

export default Main;
