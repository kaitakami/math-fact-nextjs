const translateEnglish = require('deepl')
interface Response {
    data: { translations: [{ text: string }] }
}

const translate = (fact: string) => {
    return translateEnglish({
        free_api: true,
        text: fact,
        target_lang: "JA",
        auth_key: process.env.DEEPL_AUTH_KEY
    })
        .then((data: Response) => (
            {
                translation: data.data.translations[0].text,
                loading: false,
                error: null
            }))
        .catch((err: Error) => (
            {
                translation: null,
                loading: false,
                error: err
            }
        ))
}

export default translate
