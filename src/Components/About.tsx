import Image from "next/image";
import React from "react";
import dev from "../../public/img/dev.png";
import dev1 from "../../public/img/dev1.jpg";

const About = () => {
  return (
    <div id="about" className="flex flex-col h-screen md:flex-row ">
      <div className="p-10 flex flex-1 h-full w-full flex-col justify-center items-center ">
        <h1 className="text-[#5651e5] text-center py-5 text-xl font-bold uppercase">Freelancer em Desenvolvimento Web</h1>
        <p className=" text-center text-gray-700 py-5 text-sm md:text-xl ">
          Implementei sites e aplicações web utilizando React,
          seguindo as melhores práticas de desenvolvimento. Colaborei com
          equipes multidisciplinares na análise de requisitos, design de
          interfaces e implementação de funcionalidades. Implementação de
          bibliotecas e componentes reutilizáveis para agilizar o processo de
          desenvolvimento. Realizei testes e depurações em várias etapas do
          desenvolvimento para garantir a qualidade e o bom desempenho das
          aplicações web.
        </p>
      </div>
      <div className="flex h-full flex-1 w-full relative  ">
        <Image src={dev} alt="" fill className="  object-contain " />
      </div>
    </div>
  );
};

export default About;
