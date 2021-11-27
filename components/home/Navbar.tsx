import React, { useCallback, useState } from "react";
import NavbarList from "../NavbarList";
import Link from "next/link";
import Image from "next/image";
import useToken2 from "../../hooks/useToken2";
import { useAuth } from "../../hooks/useAuth";
import { useUsers } from "../../hooks/useUsers";
import { useStore } from "../../hooks/useStore";
import Dropdown from "../Dropdown";

export default function Navbar() {
  const Profile = useStore((state) => state.profile);

  const { token } = useToken2();
  const { data, isStale, isSuccess } = useUsers(token);
  const { data: auth } = useAuth();
  //  console.log(data!=null);
  // const logOut = () => {
  //     localStorage.clear();
  // },

  const [Modal, setModal] = useState(true);
  const modalToggle = useCallback(() => {
    setModal((_) => !_);
  }, [Modal]);

  // const [Logi, setLogi] = useState(token);
  // const logiToggle = useCallback((newToken) => {
  //     setLogi(newToken);
  // }, [Logi]);

  function Logout() {
    useStore.getState().logout();
  }

  return (
    <div className="h-24 flex bg-gray-100 w-full border-b-2 border-pink-600 justify-around items-center item1">
      <div className="w-80 h-16 relative md:w-72 lg:w-96 cursor-pointer">
        <Link href="/">
          <Image
            src="/LOGO-yatay-kirmizi.png"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
      <div>
        <div className="hidden lg:flex flex-row place-items-center">
          <ul className="hidden md:flex flex-row place-items-center">
            <Dropdown
              menuSubTittle={[
                { subtitle: "TYT", path: "/Lesson" },
                { subtitle: "KPSS", path: "/4" },
                { subtitle: "DGS", path: "/4" },
              ]}
              buttonTittle={"Ders Paketleri"}
            />
            <NavbarList title="Ders Paketleri" url="/Lesson" />
            <NavbarList title="Online Kurs" url="/TutorialLesson2" />
            <NavbarList title="Profil" url="/Profil" />
          </ul>
        </div>
        <div className="lg:hidden">
          {Modal ? (
            <button onClick={modalToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          ) : (
            <div className="w-2/3 md:w-96 absolute top-0 z-20    p-2 transform right-0 lg:hidden ">
              <div className="rounded-lg shadow-md bg-green-300 ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://www.afmmagaza.com/resman/uploads/LOGO YATAYbeyaz yazı.png"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <div>
                      <button onClick={modalToggle}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50"
                  >
                    Ders Paketleri
                  </a>

                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50"
                  >
                    Kitaplarımız
                  </a>

                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50"
                  >
                    Çözümler
                  </a>

                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50"
                  >
                    Hakkımızda
                  </a>
                </div>
                <Link href="/Login">
                  <a className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                    Giriş Yap
                  </a>
                </Link>
                <a className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                  Kayıt Ol
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
