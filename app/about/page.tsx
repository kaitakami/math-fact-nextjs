import React from 'react'

const About = () => {
  return (
    <main className='container flex flex-col gap-8 p-3 pt-20 md:p-20'>
      <h1 className='text-2xl font-bold'>About</h1>
      <p>
        This simple project allows you to retrieve a fact for any number. The data for this project is sourced from the{' '}
        <a className='text-pink-400 hover:underline' href="http://numbersapi.com" target="_blank" rel="noreferrer">numbersapi website</a>
        , translations are provided by the DeepL API. You can view my github and the repo of this project{' '}
        <a className='text-pink-400 hover:underline' href="https://github.com/kaitakami" target="_blank" rel="noreferrer">here</a>
        .</p>
      <h2 className='text-xl font-bold'>Japanese</h2>
      <p>
        このシンプルなプロジェクトでは、ある数字に対するファクトを取得することができます。このプロジェクトのデータは
        <a className='text-pink-400 hover:underline' href="http://numbersapi.com" target="_blank" rel="noreferrer">numbersapiのウェブサイト</a>
        から、翻訳はDeepL APIから提供されています。私のgithubとこのプロジェクトのrepoは
        <a className='text-pink-400 hover:underline' href="https://github.com/kaitakami" target="_blank" rel="noreferrer">こちら</a>
        で見ることができます。
      </p>
    </main>
  )
}

export default About
