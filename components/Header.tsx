"use client"
import Link from 'next/link'
import logo from '../assets/Logo.svg'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

type Props = {}

function Navbar({}: Props) {
  const [model, setModel] = useState<boolean>(false)
  const showModel = ()=> {
    setModel(true)
  }

  const hideModel = ()=> {
    setModel(false)
  }
  return (
    <nav className='font-montserrat border-b-4'>
      <section className='max-w-7xl mx-auto relative'>
        <div className='h-[60px] px-3 py-1 flex justify-between items-center z-20'>
          <Link href='/'>
            <Image className='aspect-[16/9] w-36 ' src={logo} alt="brand logo" ></Image>
          </Link>

          <div className='hidden xs:flex gap-1.5 sm:gap-3'>
            <button className="navButton">Home</button>
            <button className="navButton">Find Jobs</button>
          </div>

          {
            !model? 
            <button onClick={showModel} className='xs:hidden'><RxHamburgerMenu className='text-3xl' /></button> : 
            <button onClick={hideModel} className='xs:hidden'><IoClose className='text-3xl' /></button>
          }

          {model && 
            <div className='xs:hidden mt-2 absolute flex flex-col top-full right-1 p-2 rounded-lg shadow-xl bg-gray-200 gap-1.5 sm:gap-3 z-10'>
              <button className="navButton rounded-md">Home</button>
              <button className="navButton rounded-md">Find Jobs</button>
            </div>
          }
        </div>
      </section>
    </nav>
  )
}

export default Navbar