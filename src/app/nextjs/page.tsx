import Link from "next/link";
import React from "react";
import { featuredSites } from "../data";
import Image from "next/image";

const Nodejs = () => {
  return (
    <div className="pt-[6.5rem] p-6 w-full h-[calc(100vh-5rem)]">
      <div>
        <ul className="flex justify-between uppercase md:justify-around">
          <Link href="/nextjs" className="text-sm md:text-xl text-[#5651e5] hover:opacity-[0.8] cursor-pointer border-b-2">
            NEXT JS
          </Link>
          <Link href="/nodejs" className="text-sm md:text-xl hover:border-b">
            NODE JS
          </Link>
          <Link href="/illustrator" className="text-sm md:text-xl hover:border-b">
            ILLUSTRAdawdaw daw da wd awTOR
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nodejs;


