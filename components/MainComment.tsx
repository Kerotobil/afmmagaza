import React from 'react'



export default function MainComment({num}) {
    return (
        <div className="bg-white w-96 rounded-md shadow-lg transform -rotate-1 px-1 hover:transform-none overflow-hidden ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <p className="mt-2 text-center font-sans font-bold text-lg px-6 pb-10">Şehre uzak yerde yaşıyordum. Dershaneye gitmek yol olarak çok uzundu. Burada hem tüm konuları öğrenebildim hemde öğretmenlerle canlı soru çözme ve rehberlik imkanı olması benim için harika bir imkandı.</p>
            <div className=" bg-gradient-to-br from-indigo-500 to-purple-500 rounded-md rounded-t-none">
                <div className="h-20 flex content-center flex-wrap  ml-4">
                    <img className="h-10 rounded-full border-2 border-white bg-blue-100" src="https://miro.medium.com/max/560/1*MccriYX-ciBniUzRKAUsAw.png" alt="" />
                    <div className="ml-2 ">
                        <h1 className=" text-left text-blue-50 text-xl">{num}</h1>
                        <h1 className=" text-left text-gray-200 font-bold text-xl">TM 40bin</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}