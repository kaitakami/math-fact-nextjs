import { APIData } from "../types";

function getFact(number: string | null): Promise<{ result: APIData | null; error: null; } | { result: null; error: Error; } | undefined> {
    let data: APIData | null = null;
    const url = `http://numbersapi.com/${number}/math?json`

    const fetchData = async () => {
        try {
            const response = await fetch(url);
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
