import { useEffect, useState } from 'react'
import translate from '@/app/services/japaneseTranslationAPI'
import { APIData } from '@/app/types'
interface Props {
    fact: APIData | null | undefined,
    error: Error | null | undefined
}
interface State {
    translation: string | null,
    loading: boolean,
    error: string | null
}

const Fact = ({ fact }: Props) => {
    const [japaneseTranslation, setJapaneseTranslation] = useState<State>({ translation: null, loading: true, error: null })

    useEffect(() => {
        setJapaneseTranslation({ translation: null, loading: false, error: null })
    }, [fact])


    const translateToJapanese = () => {
        if (typeof fact?.text === 'string') {
            setJapaneseTranslation({ translation: null, loading: true, error: null })
            translate(fact?.text)
                .then((result: State) => setJapaneseTranslation(result))
        } else {
            setJapaneseTranslation(prevState => ({ ...prevState, error: "First you have to get a fact to translate to 🇯🇵" }))
        }
    }
    const FactExists = () => (
        <>
            <div className='flex flex-col gap-5 px-6 py-4 m-auto text-left'>
                <h3 className='text-xl font-bold'>Fact:</h3>
                <p>
                    {fact?.text}
                </p>
            </div>
            <div className='flex flex-col gap-8 px-6'>
                <button type='button' className='px-4 py-2 font-medium text-white transition-colors ease-in-out bg-blue-500 border border-white rounded-lg shadow hover:bg-blue-700 md:m-auto' onClick={translateToJapanese}>日本語に訳す</button>
                {japaneseTranslation.error && <p className='font-semibold text-center text-red-400'>問題が発生しました</p>}
                {japaneseTranslation.loading && <p className='text-xl font-semibold text-gray-500 animate-pulse'>読み込み中...</p>}
                {japaneseTranslation.translation && <p className='m-auto text-left'>{japaneseTranslation.translation}</p>}
            </div>
        </>
    )

    return (
        <section className='flex flex-col max-w-xl gap-5 p-8 m-auto mt-20 mb-12 shadow-md bg-slate-200'>
            {fact ? FactExists() : <p>Start by typing a number :)</p>}
        </section>
    )
}

export default Fact
