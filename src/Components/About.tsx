import Image from "next/image";
import React from "react";
import front3 from "../../public/temporary/front2.png"
import dev1 from "../../public/img/dev1.jpg";

const About = () => {
  return (
    <div id="about" className="flex flex-col h-screen md:flex-row ">
      <div className="p-10 flex flex-1 h-full w-full flex-col justify-center items-center ">
        <h1 className="text-[#5651e5] text-center py-5 text-xl font-bold uppercase"></h1>
        <h2 className="text-gray-700 py-5 text-[1.2rem] md:text-[1.5rem]">Entusiasta de Tecnologia</h2>
        
          <div className="pb-4 "><h1 className="text-[#5651e5] font-semibold text-[1.5rem] md:text-[2rem]">O que esperar de mim?</h1></div>
         <p className=" text-center text-gray-700 py-5 text-sm md:text-xl text-[1.2rem] md:text-[1.5rem] "> 
          Um estudante apaixonado por desenvolvimento Web, uma coisa que eu descobri
          no primeiro semestre da faculdade, comecei com HTML, CSS básico, depois
          comecei aos poucos a aprender JavaScript, e não demorou muito para eu conhecer o React e Vue,
          está sendo incrível o aprendizado, espero me juntar a
          um time de desenvolvimento e aprender na prática cada vez mais a cada dia,
          tenho certeza que tenho muito a agregar ao meu futuro time de Devs.
        </p>
      </div>
      <div className="flex h-full flex-1 w-full relative  ">
        <Image src={front3} alt="" fill className="  object-contain " />
      </div>
    </div>
  );
};

export default About;
