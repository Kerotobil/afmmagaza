import React, { useCallback, useState } from 'react';
import NavbarList from '../components/NavbarList';
import Link from 'next/link';





export default function Navbar() {

    const [Modal, setModal] = useState(true);
    const [Login, setLogin] = useState(false);

    const modalToggle = useCallback(() => {
        setModal(_ => !_);
    }, [Modal]);

    
    const loginToggle = useCallback(() => {
        setLogin(_ => !_);
    }, [Login]);
    



    return (

        <div className="h-20 flex bg-primaryNavbar  w-full justify-around items-center">
            <div className="w-80 md:w-72 lg:w-96 cursor-pointer">
                <Link href="/"><img src="https://www.afmmagaza.com/resman/uploads/LOGO YATAYbeyaz yazı.png" alt="" /></Link>
            </div>
            <div>
                <div className="hidden lg:flex flex-row place-items-center ">
                    <ul className="hidden md:flex flex-row">
                        <NavbarList title="Ders Paketleri" url="/Lesson" />
                        <NavbarList title="Online Kurs" url="/TutorialLesson2" />
                        <NavbarList title="Profil" url="/Profil" />
                        <NavbarList title={<div>asdasdas</div>} url="" />
                    </ul>
                    <button onClick={loginToggle}>
                    <div className="justify-self-end relative">
                        <img className="h-10 rounded-full bg-pink-300" src="https://miro.medium.com/max/560/1*MccriYX-ciBniUzRKAUsAw.png" alt="" />
                         {Login ?<div className="absolute z-30 bg-green-200">
                             <form action="login" className="flex">
                                    <div>,
                                    <input type="text" placeholder="E-mail" />
                                    <input type="password" placeholder="Parola" />
                                    </div>
                             </form>
                         </div> : <div></div> }
                         
                    </div>

                    </button>
                </div>

                <div className="lg:hidden">{ Modal ? (
                    <button onClick={modalToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>) :
                    <div className="w-2/3 absolute top-0 z-20    p-2 transform right-0 lg:hidden ">
                        <div className="rounded-lg shadow-md bg-green-300 ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="px-5 pt-4 flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src="https://www.afmmagaza.com/resman/uploads/LOGO YATAYbeyaz yazı.png" alt="" />
                                </div>
                                <div className="-mr-2">
                                    <div>
                                        <button onClick={modalToggle}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                    </div>
                                </div>
                            </div>
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">Ders Paketleri</a>

                                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">Kitaplarımız</a>

                                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">Çözümler</a>

                                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50">Hakkımızda</a>
                            </div>
                            <a href="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                                Log in
          </a>
                        </div>
                    </div>




                }

                </div>


            </div>


        </div>


    );

}

