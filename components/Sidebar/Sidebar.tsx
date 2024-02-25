'use client'
import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { BiSearch } from "react-icons/bi"
import { HiHome } from "react-icons/hi"
import { Box, Library } from ".."
import SidebarItem from "./SidebarItem/SidebarItem"

interface SidebarProps {
  children: React.ReactNode
}

// interface RoutesProps {
//   label: string
//   active: boolean
//   href: string
//   icon: IconType
// }

export default function Sidebar ({ children }: SidebarProps): JSX.Element {
  const pathname = usePathname()
  const routes = useMemo(() => [
    {
      label: 'Home',
      active: pathname !== '/searh',
      href: '/',
      icon: HiHome
    },
    {
      label: 'Search',
      active: pathname === '/searh',
      href: '/search',
      icon: BiSearch
    }
  ], [pathname])

  return (
    <section className='flex h-full'>
      <article className='hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2'>
        <Box>
          <section className='flex flex-col gap-y-4 px-5 py-4'>
           {
            routes.map(({ active, href, icon, label }, index) => (
              <SidebarItem href={href} icon={icon} label={label} key={index} active={active}/>
            ))
           }
          </section>
        </Box>
        <Box className='overflow-y-auto h-full'>
          <Library />
        </Box>
      </article>
      <main className='h-full w-full overflow-y-auto py-2'>
        {children}
      </main>
    </section>
  )
}
