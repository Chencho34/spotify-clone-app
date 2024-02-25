'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ListItemProps {
  // image: string
  // name: string
  // href: string
}

export default function ListItem ({ href, image, name }: ListItemProps): JSX.Element {
  const router = useRouter()
  const handleClick = () => {
    // add auth before push
    router.push(href)
  }

  return (
    <button className='relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4'>
      <section className='relative min-h-[64px] min-w-[64px]'>
        <Image />
      </section>
    </button>
  )
}
