'use client'

import { AiOutlinePlus } from "react-icons/ai"
import { TbPlaylist } from "react-icons/tb"

export default function Library (): JSX.Element {
  const onClick = () => {

  }

  return (
    <section className='flex flex-col'>
      <article className='flex items-center justify-between px-5 pt-4'>
        <section className='inline-flex items-center gap-x-2'>
          <TbPlaylist className='text-neutral-400' size={26}/>
          <p className='text-neutral-400 font-medium text-md'>Your Library</p>
        </section>
        <AiOutlinePlus className='text-neutral-400 cursor-pointer hover:text-white transition' onClick={onClick} size={20} /> 
      </article >  
      <article className='flex flex-col gap-y-2 mt-4 px-3'>
        List of Songs!
      </article>    
    </section>
  )
}
