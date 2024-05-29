import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='bg-white border-b font-satoshi'>
            <div className='flex items-center justify-between px-2 max-w-6xl mx-auto'>
                <div className='flex items-center gap-10'>
                    <Link href="/">
                        <Image src={'/logo.png'} alt='logo' className='w-auto h-auto' width={200} height={10} />
                    </Link>
                    <div className='hidden md:flex gap-6 text-gray-700'>
                        <Link href="/jobs">Jobs</Link>
                        <span>Companies</span>
                        <span>Services</span>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <button className='ring-1 ring-[#275DF5] rounded-full py-2 px-6 text-[#275DF5]'>Login</button>
                    <button className='bg-[#F05537] text-white text-bold px-6 py-2 rounded-full'>Register</button>
                </div>
            </div>
        </header>
    )
}

export default Header