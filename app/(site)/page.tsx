import { Header, ListItem } from '@/components'

export default function Home (): JSX.Element {
  return (
    <main className='bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
      <Header>
        <section className='mg-2'>
          <h1 className='text-white text-3xl font-semibold'>Welcome back</h1>
          <article className='grid  grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4'>
            <ListItem image='/images/liked.png' name='Liked Songs' href='liked'/>
          </article>
        </section>
      </Header>
      <section className='mt-2 mb-7 px-6'>
        <article className='flex justify-between items-center'>
          <h1 className='text-white text-2xl font-semibold'>Newest songs</h1>
        </article>
        <article>
          List of Songs!
        </article>
      </section>
    </main>
  );
}
