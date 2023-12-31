import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/temporary/logo.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


const Endport = () => {
  return (
    <div id="contato" className="w-full lg:h-screen">
      <div className=" bg-slate-100 max-w-[1024px] m-auto px-2 py-16 h-full w-full">
        <p className="text-xl text-center tracking-widest uppercase text-[#5651e5]">
          Entre em Contato
        </p>
        <div className="grid lg:grid-cols-5 gap-8 w-full h-full ">
          <div className=" col-span-3 lg:col-span-2  shadow-lg shadow-gray-400 rounded py-4">
            <div className=" flex justify-center">
              <Image src={logo} alt="" width={150} height={150} />
              <div></div>
            </div>
            <div>
              <p className="p-4 text-center">Front-End Developer</p>
              <p className="p-4 text-center">
                Entre em contato pelo Linkedin, E-mail ou WhatsApp!
              </p>
            </div>
            <div className="flex items-center justify-evenly w-full">

            <div className="p-3 text-gray-700 text-xl ease-in hover:bg-gray-700 hover:text-white rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110 duration-300">
                <a target="blank"  href="https://www.linkedin.com/in/igormvs2023/" > <FaLinkedin /></a>
              </div>
        
              <div className=" text-xl text-gray-700 hover:bg-gray-700 hover:text-white p-3 ease-in rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110 duration-300 ">
                <a target="blank" href="https://api.whatsapp.com/send/?phone=11912374840&text&type=phone_number&app_absent=0" ><FaWhatsapp /></a>
              </div>
              <div className=" text-xl text-gray-700 hover:bg-gray-700 hover:text-white p-3 ease-in rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110 duration-300">
                <a target="blank" href="/gmail.com"><BiLogoGmail /></a>
              </div>


              
            </div>
          </div>

          <div className=" col-span-3  w-full h-auto shadow-xl shadow-gra-400 rounded-xl lg:p-4">
            <div className="p-4 ">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full ">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-1">Nome</label>
                    <input
                      className="border-2 rounded-lg p-1 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-1">Telefone</label>
                    <input
                      className="border-2 rounded-lg p-1 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col ">
                  <label className="uppercase text-sm py-1">E-mail</label>
                  <input
                    className="border-2 rounded-lg p-1 flex border-gray-300"
                    type="e-mail"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Mensagem</label>
                  <textarea
                    className="border-2 rounded-lg  border-gray-300"
                    rows={10}
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="mt-2 uppercase rounded-xl p-2 text-white bg-[#5651e5] hover:opacity-[0.9] ease-in duration-300">
                    Enviar mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endport;
