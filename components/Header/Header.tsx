'use client'

import { useRouter } from "next/navigation"
import { BiSearch } from "react-icons/bi"
import { HiHome } from "react-icons/hi"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { twMerge } from "tailwind-merge"
import { Button } from "@/components"

interface HeaderProps {
  children: React.ReactNode
  className?: string 
}

export default function Header ({ children, className }: HeaderProps): JSX.Element {
  const router = useRouter()
  const handelLogout = () => {

  }

  return (
    <header className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
      <section className='w-full mb-4 flex items-center justify-between'>
        <article className='hidden md:flex gap-x-2 items-center'>
          <button onClick={() => router.back()} className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'><RxCaretLeft className='text-white' size={35}/></button>
          <button onClick={() => router.forward()} className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'><RxCaretRight className='text-white' size={35}/></button>
        </article>
        <article className='flex md:hidden gap-x-2 items-center'>
          <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'><HiHome className='text-black' size={20}/></button>
          <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'><BiSearch className='text-black' size={20}/></button>
        </article>
        <article className='flex justify-between items-center gap-x-4'>
           <section>
             <Button type='button' className='bg-transparent text-neutral-300 font-medium' onClick={() => {}}>Sign up</Button>
           </section>
           <section>
             <Button type='button' className='bg-transparent font-md bg-white px-6 py-2' onClick={() => {}}>Log in</Button>
           </section>
        </article>
      </section>
      {children}
    </header>
  )
}
