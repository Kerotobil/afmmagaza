import React from 'react';

export default function ({ children }) {
    return (
        <div className="border-red-500 border-8">
            <h1 className="text-4xl border-b-4 border-red-500 ">Template'im</h1>
            {children}
        </div>
    );
}