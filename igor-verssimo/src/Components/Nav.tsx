"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const [navi, setNavi] = useState(false);
  const handleNav = () => {
    setNavi(!navi);
  };

  return (
    <div className="px-8 md:px-14 fixed top-0 w-full h-[6rem] shadow-xl z-[100] bg-white">
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
          <Link href="/#main">
              <ul>
              <li className="ml-10 text-xl font-bold uppercase text-[#5651e5] hover:opacity-[0.8] duration-200 ease-in">Igor.dev</li>
              </ul>
            </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/#main">
              <li className="ml-10 uppercase hover:text-[#5651e5] duration-200 ease-in">home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 uppercase hover:text-[#5651e5] duration-200 ease-in">Sobre-mim</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 uppercase hover:text-[#5651e5] duration-200 ease-in">Skills</li>
            </Link>
            <Link href="/#portfolio">
              <li className="ml-10 uppercase hover:text-[#5651e5] duration-200 ease-in">Projetos</li>
            </Link>
            <Link href="/#contato">
              <li className="ml-10 uppercase hover:text-[#5651e5] duration-200 ease-in">Contato</li>
            </Link>
          </ul>
          
        </div>
      </div>
      <div
        className={
          navi ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300" : ""
        }
      >
        <div
          className={
            navi
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full ">
              <h1>IGOR.DEV</h1>
              <div
                onClick={handleNav}
                className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
              >
               
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="w-[85%] md:w-[90%] py-4">
                Vamos construir alguns projetos juntos?
              </p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase ">
              <Link href="/">
                <li onClick={()=> setNavi(false)} className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#skills"> 
              <li onClick={()=> setNavi(false)} className="py-4 text-sm">Skills</li>
            </Link>
              <Link href="/#about">
                <li onClick={()=> setNavi(false)} className="py-4 text-sm">Sobre Mim</li>
              </Link>
              <Link href="/#portfolio">
                <li onClick={()=> setNavi(false)} className="py-4 text-sm">Projetos</li>
              </Link>
              <Link href="/#contato">
                <li onClick={()=> setNavi(false)} className="py-4 text-sm">Contato</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="tracking-widest uppercase text-[#5651e5]">
                Vamos conversar
              </p>
              <div className="flex items-center justify-between sm:w-[80%]">
                <div className="p-3  ease-in rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110 duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="p-3  ease-in rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110 duration-300">
                  <FaGithub />
                </div>
                <div className="p-3 ease-in rounded-full shadow-xl cursor-pointer shadow-gray-400 hover:scale-110 duration-300 ">
                  <FaWhatsapp />
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
