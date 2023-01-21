import React from 'react'

const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full px-4 py-2 text-xs text-gray-500 bg-slate-100">
            <a className='block text-center text-pink-400' href="https://kaitakami.dev" target="_blank" rel="noreferrer">kaitakami.dev</a>
            <div className='flex justify-center gap-2'>
                <p className="text-center">Copyright &copy; 2023</p>
                <a href="https://github.com/kaitakami" className="block text-center hover:text-pink-400" target="_blank" rel="noreferrer">My GitHub</a>
            </div>
        </footer>
    );
}

export default Footer
