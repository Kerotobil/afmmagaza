import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import { useLoginMutation } from "../hooks/useAuth";

import { useStore } from "../hooks/useStore";

export default function Login() {
  const loginMutation = useLoginMutation();
  const access_token = useStore((state) => state.access_token);
  const ready = useStore((state) => state.ready);

  const [username, setUsername] = useState<string>();
  const [password, setPasword] = useState<string>();

  function handleSubmit(event) {
    event.preventDefault();
    loginMutation.mutate({ username, password });
  }

  return (
    <div className="h-screen theme-light bg-gray-800 ">
      <Navbar />

      <div className="mt-12">
        <div className="border-2 flex w-auto lg:w-3/4 justify-around bg-gray-200 mx-auto pb-8">
          <img
            src="https://www.afmmagaza.com/resman/uploads/2334094.jpg"
            className="hidden md:block mt-4 h-64 lg:h-96"
            alt=""
          />
          <div className="w-96 ml-2 my-auto">
            <h1 className="text-3xl text-center font-sans font-semibold">
              KOZ Serisi'ne Giriş Yap
            </h1>
            <div className="py-4 mt-4 w-full rounded-md bg-white shadow-lg">
              <form onSubmit={handleSubmit} className="flex justify-center">
                <div className="flex flex-col space-y-5 w-3/4 ">
                  <div className="flex flex-col">
                    <h1 className="text-left text-gray-500 text-lg ">
                      Kullanıcı E-Posta
                    </h1>
                    <label htmlFor="email"></label>
                    <input
                      className="border-b-2 cursor-text hover:border-yellow-400 focus:border-yellow-400"
                      type="email"
                      placeholder="email"
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-left text-gray-500 text-lg ">Parola</h1>
                    <label htmlFor="password"></label>
                    <input
                      className=" border-b-2 cursor-text hover:border-yellow-400 focus:border-yellow-400"
                      type="password"
                      placeholder="Parola"
                      onChange={(event) => setPasword(event.target.value)}
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                    <input
                      disabled={loginMutation.isLoading}
                      type="submit"
                      className="bg-green-700 text-white rounded-lg px-2 py-1 hover:bg-green-600"
                    />
                  </div>
                  <div>
                    <pre>{"access_token = " + access_token}</pre>
                    <pre>{ready ? "ready" : "not ready"}</pre>
                  </div>
                  {/* <button onClick={() =>Users(token)}>User Çağır</button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
