'use client'
import { useState } from 'react';

interface Props {
    setNumberFact: React.Dispatch<React.SetStateAction<string | null>>
}

const Form = ({ setNumberFact }: Props) => {
    const [numberInput, setNumberInput] = useState<string>("0")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumberInput(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setNumberFact(numberInput)
    }

    return (
        <section className='flex flex-col w-full max-w-xl gap-5 p-8 m-auto mt-24 shadow-md bg-slate-200'>
            <h2 className="mb-3 text-3xl font-bold">Type your favorite<br />number</h2>
            <form className='flex flex-col justify-center gap-4 m-auto sm:flex-row' onSubmit={handleSubmit}>
                <input type="number" className="block w-full max-w-xs px-4 py-2 leading-normal bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue" style={{
                    'WebkitAppearance': 'none', 'MozAppearance': 'textfield'
                }} onChange={handleChange} value={numberInput} required pattern="[0-9]" />
                <button
                    type='submit'
                    className="max-w-xs px-4 py-2 font-bold text-gray-800 transition-colors bg-white border border-gray-300 rounded-md hover:border-gray-400 hover:bg-gray-100"
                >
                    Show
                </button>
            </form>
        </section>
    )
}

export default Form
