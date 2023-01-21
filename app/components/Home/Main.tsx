'use client'
import { useState, useEffect } from 'react';
import { APIData } from '@/app/types';
import Form from './Form'
import Fact from './ Fact';
import getFact from '@/app/services/mathFactAPI';

const Main = () => {
    const [numberFact, setNumberFact] = useState<string | null>(null)
    const [fact, setFact] = useState<APIData | null | undefined>(null)
    const [error, setError] = useState<Error | null | undefined>(null)
    useEffect(() => {
        if (typeof numberFact === 'string') {
            getFact(numberFact).then(result => {
                setFact(result?.result)
                setError(result?.error)
            })
        }
    }, [numberFact])
    return (
        <main className='container flex flex-col justify-center text-center'>
            <div className='p-4 sm:p-7 md:p-10'>
                <Form setNumberFact={setNumberFact} />
                <Fact fact={fact} error={error} />
            </div>
        </main>
    )
}

export default Main
