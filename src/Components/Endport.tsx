import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/temporary/logo.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/Ai";

const Endport = () => {
  return (
    <div id="contato" className="w-full lg:h-screen">
      <div className=" bg-slate-100 max-w-[1024px] m-auto px-2 py-16 h-full w-full">
        <p className="text-xl text-center tracking-widest uppercase text-[#5651e5]">
          entre em Contato
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
                Disponivel para freelancer, vamos negociar!
              </p>
            </div>
            <div className=" text-xl  flex items-center justify-between max-w-[330px] m-auto py-4">
              <div className=" text-gray-700 m-3 p-4 rounded-full shadow-xl cursor-pointer hover:scale-125 easy-in duration-300 shadow-gray-400">
                <FaLinkedin size={20} />
              </div>
              <div className=" text-gray-700 p-4 m-3 rounded-full shadow-xl cursor-pointer hover:scale-125 easy-in duration-300 shadow-gray-400">
                <FaGithub size={20} />
              </div>
              <div className=" text-gray-700 p-4  m-3 rounded-full shadow-xl cursor-pointer hover:scale-125 easy-in duration-300 shadow-gray-400">
                <AiOutlineMail size={20} />
              </div>
              <div className=" text-gray-700 p-4  m-3 rounded-full shadow-xl cursor-pointer hover:scale-125 easy-in duration-300 shadow-gray-400">
                <FaWhatsapp size={20} />
              </div>
            </div>
          </div>

          <div className=" col-span-3  w-full h-auto shadow-xl shadow-gra-400 rounded-xl lg:p-4">
            <div className="p-4 ">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Nome</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Telefone</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">E-mail</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="e-mail"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Mensagem</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="mt-4 uppercase rounded-xl p-2 text-white bg-[#5651e5] hover:opacity-[0.9] ease-in duration-300">
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
