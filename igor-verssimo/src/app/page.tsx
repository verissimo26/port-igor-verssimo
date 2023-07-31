


import About from '@/Components/About'
import Endport from '@/Components/Endport'
import Main from '@/Components/Main'
import Portfolio from '@/Components/Portfolio'
import Skills from '@/Components/Skills'
import Image from 'next/image'


export default function Home() {
  return (
    <main>
      <Main/> 
      <About/>  
      <Portfolio/>
      <Skills/>
      <Endport/>
         
    </main>
  )
}
