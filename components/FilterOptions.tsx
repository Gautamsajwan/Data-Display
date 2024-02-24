'use client'
import React, { useState } from 'react'
import { TiHeartFullOutline } from 'react-icons/ti'
import { PiSuitcaseSimpleFill } from "react-icons/pi"
import { RiDeleteBin7Fill } from "react-icons/ri";

type Props = {
    sortbyLikes: React.MouseEventHandler<HTMLButtonElement>
    sortbyJobs: React.MouseEventHandler<HTMLButtonElement>
    cancelFilter: React.MouseEventHandler<HTMLButtonElement>
}

function FilterOptions({sortbyLikes, sortbyJobs, cancelFilter}: Props) {
    const [color1, setcolor1] = useState<string>('')
    const [color2, setcolor2] = useState<string>('')

    // const colorChange1 = () => {
    //     setcolor1(prev => (
    //         prev === 'bg-red-500 text-white' ? '' : 'bg-red-500 text-white' 
    //     ))
    //     setcolor2('')
    // }

    // const colorChange2 = () => {
    //     setcolor2(prev => (
    //         prev === 'bg-blue-500 text-white' ? '' : 'bg-blue-500 text-white' 
    //     ))
    //     setcolor1('')
    // }

    const handleLikeFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
        setcolor1('bg-red-500 text-white')
        sortbyLikes(event)
    }

    const handleJobsFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
        setcolor2('bg-blue-500 text-white')
        sortbyJobs(event)
    }

    const handleRemoveFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
        setcolor1('')
        setcolor2('')
        cancelFilter(event)
    }

    return (
    <section className='my-4 mx-3.5 sm:mx-auto max-w-lg font-montserrat rounded-lg overflow-hidden outline-gray-800 outline'>
        <div className='flex flex-col items-center font-semibold'>
            <p className='py-1.5 text-lg font-bold'>Filter By</p>
            <div className='flex w-full outline outline-gray-800'>
                <button onClick={handleLikeFilter} className={`py-2 flex-grow flex justify-center items-center gap-1 ${color1} hover:bg-red-300 transition-color ease-in-out duration-200`}>
                    <span>Likes</span>
                    <TiHeartFullOutline className='text-xl -translate-y-0.5'/>
                </button>

                <button onClick={handleRemoveFilter} className={`w-16 bg-gray-800 flex justify-center items-center group`}>
                    <RiDeleteBin7Fill className='text-white text-2xl -translate-y-0.5 group-hover:scale-110 group-hover:text-red-500 group-active:scale-90 transition-all ease-in-out'/>
                </button>
                
                {/* <div className='w-1 bg-gray-800'></div> */}
                <button onClick={handleJobsFilter} className={`py-2 flex-grow flex justify-center items-center gap-1 ${color2} hover:bg-blue-300 transition-color ease-in-out duration-200`}>
                    <span>Jobs</span>
                    <PiSuitcaseSimpleFill className='text-xl -translate-y-0.5'/>
                </button>
            </div>
        </div>
    </section>
  )
}

export default FilterOptions