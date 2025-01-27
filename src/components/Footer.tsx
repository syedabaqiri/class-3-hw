import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <footer className='bg-gray-100 p-5  '>
            <p className='text-cyan-600'>@All right reserved</p>
             <div className='flex space-x-4 flex-row items-center justify-center'>
             <Link href='/home'>home</Link>
             <Link href="/contact">contact</Link>
             <Link href = "/about">about</Link>
             
             </div>
            
        </footer>


    </div>
  )
}

export default Footer