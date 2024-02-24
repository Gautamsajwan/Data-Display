import Link from 'next/link'
import logo from '../public/assets/Logo.svg'
import Image from 'next/image'

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className='font-montserrat border-b-4'>
      <section className='max-w-7xl mx-auto'>
        <div className='h-[70px] px-3 py-2 flex justify-between items-center z-20'>
          <Link href='/'>
            <Image className='aspect-[16/9] w-36 ' src={logo} alt="brand logo" ></Image>
          </Link>

          <div className='flex gap-1.5 sm:gap-3'>
            <button className="navButton">Home</button>
            <button className="navButton">Find Jobs</button>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default Navbar