import React, { useState } from "react";
import Link from "next/link";
import { useSignUp } from "../hooks/useSignUp";

export default function SignUp() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPasword] = useState<string>();
  const [role] = useState<string>("ADMIN");
  // const [classroom, setClassroom] = useState<string>("YKS2022");
  const signupData = useSignUp();

  function handleSubmit(event) {
    event.preventDefault();
    signupData.mutate({ name, email, password, role });
  }

  return (
    <div className="">
      <div className=" bg-gradient-to-r from-blue-400 to-green-600 ">
        <div className="w-2/3 flex justify-start mx-auto h-24 pl-8">
          <Link href="/">
            <img
              className="h-20 my-auto  cursor-pointer"
              src="https://www.afmmagaza.com/resman/uploads/kurumsal _logo_AFM.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <div className="border-2 flex w-auto lg:w-3/4 justify-around mx-auto bg-gray-800 pb-8">
          <img
            src="https://www.afmmagaza.com/resman/uploads/2334094.jpg"
            className="hidden md:block mt-4 h-64 lg:h-96"
            alt=""
          />
          <div className="w-96 ml-2 my-auto">
            <h1 className="text-3xl text-gray-100 text-center font-sans font-semibold">
              Üye Ol
            </h1>
            <div className="py-4 mt-4 w-full rounded-md bg-white shadow-lg">
              <form
                onSubmit={handleSubmit}
                action="login"
                className="flex justify-center"
              >
                <div className="flex flex-col space-y-5 w-3/4 ">
                  <h1 className="text-left text-gray-50 text-lg "></h1>

                  <input
                    className=" mr-2 border-b-2 cursor-text hover:border-yellow-400 focus:border-yellow-400"
                    type="text"
                    placeholder="Ad - Soyad"
                    onChange={(event) => setName(event.target.value)}
                  />

                  <input
                    className="border-b-2 cursor-text hover:border-yellow-400 focus:border-yellow-400"
                    type="text"
                    placeholder="E-mail"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <input
                    className="border-b-2 cursor-text hover:border-yellow-400 focus:border-yellow-400"
                    type="password"
                    placeholder="Parola"
                    onChange={(event) => setPasword(event.target.value)}
                  />
                  <input
                    className="border-b-2 cursor-text hover:border-yellow-400 focus:border-yellow-400"
                    type="password"
                    placeholder="Parola Tekrar"
                  />
                  {/* <label>
                    Sınıfınızı seçiniz:
                    <select
                      value={classroom}
                      className="bg-gray-100 ml-2 rounded-md"
                      onChange={(event) => setClassroom(event.target.value)}
                    >
                      <option value="9.sınıf">9.sınıf</option>
                      <option value="10.sınıf">10.sınıf</option>
                      <option value="11.sınıf">11.sınıf</option>
                      <option selected value="YKS2022">
                        YKS2022
                      </option>
                      <option value="DGS">DGS</option>
                      <option value="KPSS">KPSS</option>
                      <option value="ALES">ALES</option>
                    </select>
                  </label> */}
                  <div className="flex flex-row justify-between">
                    <button className="bg-green-700 text-white rounded-md px-2 py-1 hover:bg-green-600">
                      Tamamla
                    </button>
                    <button></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
