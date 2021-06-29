import React from 'react';
import Link from 'next/link';

type Props = {
    title: React.ReactNode;
    url: string;
}

export default function NavbarList(props: Props) {


    return (

        <li className="p-4 ">
            <Link href={props.url} >
                <a className="text-xl text-white cursor-pointer hover:text-pink-200" >
                    {props.title}
                </a>
            </Link>

        </li>
    );

}