import React from 'react';

export default function SearchButton() {


    return (
        <div className="flex h-full w-2/6 items-center">
            <input
                placeholder="Sayfa numarası ya da test adı ile ara ..."
                type="text"
                className="w-full border border-primary-500 rounded px-3 shadow appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
        </div>
    );
}