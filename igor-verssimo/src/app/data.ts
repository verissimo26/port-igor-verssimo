import { type } from "os";

type portItems = {
  id: number;
  title: string;
  desc?: string;
  img: string;
};

type Artes = portItems[];

export const featuredArtes: Artes = [
  {
    id: 1,
    title: "Loja de Sapato",
    desc: "Artes.",
    img: "/temporary/p1.png",
  },
  {
    id: 2,
    title: "Loja de Roupas",
    desc: "Artes..",
    img: "/temporary/p2.png",
  },
  {
    id: 2,
    title: "Abstrato",
    desc: "Artes..",
    img: "/temporary/p3.png",
  },
  {
    id: 2,
    title: "Abstrato",
    desc: "Artes..",
    img: "/temporary/p3.png",
  },
  {
    id: 2,
    title: "Abstrato",
    desc: "Artes..",
    img: "/temporary/p3.png",
  },
  {
    id: 2,
    title: "Abstrato",
    desc: "Artes..",
    img: "/temporary/p3.png",
  },
];

type portSites = {
  id: number;
  title: string;
  img: string;
};

export const featuredSites: portSites[] = [
  {
    id: 1,
    title: "TESTE!",
    img: "/temporary/p4.png",
  },
  {
    id: 1,
    title: "TESTE!",
    img: "/temporary/p5.png",
  },
  {
    id: 1,
    title: "TESTE!",
    img: "/temporary/p6.png",
  },
];

type portNode = {
  id: number;
  title: string;
  img: string;
};

export const featuredNode: portNode[] =[
  {
    id: 1,
    title: "TESTE NODE",
    img: '"/temporary/p6.png"'
  }
];

type slide ={
  id: number,
  title: string,
  img: string,
}

export const slider: slide[]=[
  {
    id: 1,
    title: "",
    img: '/temporary/slide1.png'
  },
  {
    id: 2,
    title: "",
    img: '/temporary/slide2.png'
  },
  {
    id: 3,
    title: "",
    img: '/temporary/slide2.png'
  },
  {
    id: 3,
    title: "VITE",
    img: '/temporary/sl3.png'
  },
  {
    id: 3,
    title: "VITE",
    img: 'slide1'
  },
] 
