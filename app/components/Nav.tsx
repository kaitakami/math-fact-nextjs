import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <nav className='p-4 text-white shadow-md bg-indigo-400'>
            <div className='container flex justify-between'>
                <Link href="/">
                    <h1 className='text-lg md:text-2xl font-bold'>Number Fact</h1>
                </Link>
                <Link href="/about" className='my-auto font-bold opacity-90 text-gray-200'>About</Link>
            </div>
        </nav>
    )
}

export default Nav
