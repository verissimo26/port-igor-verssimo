import Link from "next/link";
import React from "react";
import { featuredArtes } from "../data";
import Image from "next/image";

const Illustrator = () => {
  return (
    <div className="pt-[6.5rem] w-full h-[calc(100vh-5rem)]">
      <div>
        <ul className="flex justify-around uppercase ">
          <Link href="/nextjs" className="text-sm md:text-xl hover:border-b">
            NEXT JS
          </Link>
          <Link href="/nodejs" className="text-sm md:text-xl hover:border-b">
            NODE JS
          </Link>
          <Link
            href="/illustrator"
            className="text-sm md:text-xl text-[#5651e5] hover:opacity-[0.8] border-b-2"
          >
            ILLUSTRATOR
          </Link>
        </ul>
      </div>
      <div className="flex  flex-wrap w-screen h-screen mt-5 uppercase text-bold  ">
        {featuredArtes.map((item) => (
          <div key={item.id} className="flex flex-col w-1/2 md:w-1/3 shadow-xl items-center">
            {item.title}
            <div className="mt-3 flex relative h-full w-full justify-center">
              <Image
                src={item.img}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Illustrator;
