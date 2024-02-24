import logo from '../public/assets/Logo.svg'
import Image from 'next/image'
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { LuGlobe2 } from "react-icons/lu"

function Footer() {
  return (
    <section className='mt-5 p-4 sm:px-7 sm:py-2 bg-[rgb(230,230,230)] outline outline-gray-300 outline-[5px] font-montserrat h-40'>
      <article className='w-full h-full mx-auto max-w-7xl flex justify-between items-center'>
        <div className='flex flex-col'>
            <Image src={logo} alt="brand logo" className='w-36 xl:w-44'></Image>

            <p className='text-gray-900 text-sm font-semibold mt-2'>Designed by <a className='text-orange-600 font-bold' href="https://gautam-portfolio-flax.vercel.app/">Gautam Sajwan</a></p>
        </div>

        <ul className='flex items-center gap-3 sm:gap-5 lg:gap-8'>
          <li>
            <a href="https://www.linkedin.com/in/gautam-sajwan-b44179217/"> <BsLinkedin className='text-gray-900 text-4xl' /> </a>
          </li>
          <li>
            <a href="https://github.com/Gautamsajwan"> <BsGithub className='text-gray-900 text-4xl' /> </a>
          </li>
          <li>
            <a href="https://gautam-portfolio-flax.vercel.app/"> <LuGlobe2 className='text-gray-900 text-4xl' /> </a>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default Footer