import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Main = () => {
  return (
    <div id="main" className="bg-gray-50 flex flex-col h-screen w-screen bg-gradient-to-t from-slate-300 to-white">
      <div className=" w-full h-full flex flex-col justify-center mt-20 text-center ">
        <p className="uppercase text-[1rem]  ">Vamos construir algo juntos</p>
        <h1 className=" p-4 text-[1.2rem] ">
          Olá eu sou <span className="text-[#45454e] font-bold "> Igor Verissimo! </span>
        </h1>
        <h1 className="text-text-[1.2rem] md:text-[1.4rem] ">
          <span className="text-[#5651e5] font-bold ">Um Web Developer!</span>
        </h1>
        <p className="p-4 flex mx-auto w-[70%] text-text-[0.8rem] md:text-[1rem]">
          Sou um desenvolvedor web júnior, com ênfase em desenvolvimento
          Front-end, buscando minha primeira oportunidade como Web Developer, estudo desenvolvimento Web diariamente, ferramentas como Tailwind, Strapi, TypeScript, Redux, Supabase tem feito parte da minha rotina de estudos.
        </p>
        <p className="text-xl">
          {" "}
          REACT <span className="text-[#5651e5]  ">NEXT.JS</span> TAILWIND LOVER{" "}
        </p>
      </div>
      <div className=" text-[#5651e5]  flex mb-10 gap-6  justify-between max-w-[60%] m-auto">
        <div className="p-3 text-xl ease-in hover:bg-[#5651e5] hover:text-white rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110 duration-300">
          <a target="blank" href="https://www.linkedin.com/in/igormvs2023/" > <FaLinkedin /></a>
        </div>
        <div className=" text-xl text-[#5651e5] hover:bg-[#5651e5] hover:text-white p-3  ease-in rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110 duration-300">
          <a target="blank" href="https://github.com/verissimo26" ><FaGithub /></a>

        </div>
        <div className=" text-xl text-[#5651e5] hover:bg-[#5651e5] hover:text-white p-3 ease-in rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110 duration-300 ">
          <a target="blank" href="https://api.whatsapp.com/send/?phone=11912374840&text&type=phone_number&app_absent=0" ><FaWhatsapp /></a>
        </div>
        <div className=" text-xl hover:bg-[#5651e5] hover:text-white p-3 ease-in rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110 duration-300">
          <a target="blank" href="/"><BiLogoGmail /></a>
        </div>
      </div>
    </div>
  );
};

export default Main;
