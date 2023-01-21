import { APIData } from "../types";

interface Options {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': string
        'X-RapidAPI-Host': string
    }
}

function getFact(number: string | null): Promise<{ result: APIData | null; error: null; } | { result: null; error: Error; } | undefined> {
    let data: APIData | null = null;
    const url = `https://numbersapi.p.rapidapi.com/${number}/math?json=true`;


    let options: Options

    if (process.env.RAPIDAPI_KEY) {
        options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
            }
        };
    }

    const fetchData = async () => {
        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(response.statusText);
            data = await response.json();
            return { result: data, error: null }
        } catch (err) {
            if (err instanceof Error) {
                return { result: null, error: err }
            }
        }
    }

    return fetchData();
}

export default getFact;
