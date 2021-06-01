import React from 'react';

export default function Banner2() {

    return (
        <div className="bg-white w-full mx-auto overflow-hidden">
            <div className="grid grid-cols-12 lg:gap-8 lg:h-screen relative  ">
                <div className="mt-10 mx-auto lg:my-auto relative z-10 col-span-12 lg:col-span-6 text-center lg:text-left md:max-w-2xl">
                    <div className="mx-auto">
                        <p className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none font-sans sm:text-6xl lg:text-5xl xl:text-6xl"> Evinin rahatlığında matematik fulleten seri </p>

                        <p className="mt-5 text-2xl">Yolda zaman kaybetme, evde dershane kalitesinde konulara çalış.</p>
                        
                        <div className="sm:flex justify-center md:justify-start mt-5 mb-5">
                            <div className="w-full md:w-1/2">
                                <a className=" flex mx-3 justify-center items-center rounded-md shadow-lg font-semibold bg-green-600 text-lg text-white py-4 ml-3 border border-transparent md:py-4 md:text-lg md:px-10" href="#">Ücretsiz Başla</a>
                            </div>
                            <div className="w-full md:w-1/2">
                                <a href="" className="flex mx-3 justify-center items-center rounded-md shadow-lg font-semibold bg-white text-lg text-green-600 py-4 ml-3 border border-transparent md:py-4 md:text-lg md:px-10"> Giriş Yap</a>
                            </div>
                        </div>

                    </div>
                </div>

                
                    <img src="https://www.afmmagaza.com/resman/uploads/2286405.jpg" className="absolute transform scale-125 z-0  right-64 top-1/2 translate-x-1/2 xl:translate-x-1/5 -translate-y-1/2 h-0 lg:h-full " />

                
            </div>
            {/* <div className=" relative bg-white overflow-hidden">
                <div className=" py-24 mx-auto container px-4 sm:mt-12  relative">
                    <img src="https://www.afmmagaza.com/resman/uploads/2286405.jpg" alt="React Query Emblem" className="z-0 absolute transform right-96 top-1/2 h-0 lg:h-full scale-100 translate-x-1/2 xl:translate-x-1/5 -translate-y-1/2" />
                    <div className=" grid grid-cols-12 lg:gap-8  ">
                        <div className=" col-span-12 lg:col-span-6 z-10">
                            <div className=" text-center lg:text-left md:max-w-2xl md:mx-auto ">
                                <h1 className=" text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">Performant and powerful data
                                        <span className="">synchronization for React</span>
                                </h1>
                                <p className=" mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Fetch, cache and update data in your React and React Native applications all without touching any "global state".</p>
                                <div className=" mt-5  mx-auto sm:flex sm:justify-center lg:justify-start lg:mx-0 md:mt-8">
                                    <div className=" rounded-md shadow">
                                        <a className="  w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-500 hover:bg-coral-light focus:outline-none focus:border-coral focus:shadow-outline-coral transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10" href="/overview">Get Started</a>
                                    </div>
                                    <div className=" mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                        <a href="https://github.com/tannerlinsley/react-query" target="_blank" rel="noopener noreferrer" className=" w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-coral bg-white hover:text-coral-light focus:outline-none focus:border-coral-light focus:shadow-outline-coral transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">GitHub</a>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <p className="">Still using v2? No problem!
                                                <a href="https://react-query-v2.tanstack.com/docs/overview" className=" text-blue-600 font-semibold transition-colors duration-150 ease-out">
                                            Find the v2 docs here.</a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    );
}
