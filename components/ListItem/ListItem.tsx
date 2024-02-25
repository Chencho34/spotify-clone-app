'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaPlay } from 'react-icons/fa'

interface ListItemProps {
  image: string
  name: string
  href: string
}

export default function ListItem ({ href, image, name }: ListItemProps): JSX.Element {
  const router = useRouter()
  const handleClick = () => {
    // add auth before push
    router.push(href)
  }

  return (
    <button onClick={handleClick} className='relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4'>
      <figure className='relative min-h-[64px] min-w-[64px]'>
        <Image className='object-cover' fill src={image} alt='Image'/>
      </figure>
      <p className='truncate font-medium py-5'>{name}</p>
      <span className='absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110'>
        <FaPlay className='text-black'/>
      </span>
    </button>
  )
}
