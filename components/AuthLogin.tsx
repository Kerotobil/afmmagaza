import React from 'react';


export default function AuthLogin() {
    return (
        <div className="mx-auto">
            <div className="p-4 rounded-md bg-green-200">
                <form action="/" className="flex">
                    <div className="flex flex-col space-y-5 ">
                        <input className="border-2 rounded-md cursor-text hover:border-yellow-400 focus:border-yellow-400" type="text" placeholder="E-mail" />
                        <input type="password" placeholder="Parola"/>
                        <div className="flex flex-row justify-between">
                            <button className="bg-green-700 text-white rounded-lg px-2 py-1 hover:bg-green-600">Giriş Yap</button>
                            <button className="bg-white text-green-700 rounded-lg px-2 py-1 border-2 hover:bg-green-100 hover:border-2 hover:border-white">Kayıt Ol</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}