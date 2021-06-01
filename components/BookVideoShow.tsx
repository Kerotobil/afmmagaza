import React from 'react';

type Props = {
    imageLink: string;
}

export default function BookVideoShow(props: Props) {

    return (

        <div className="w-80">
            <img src={props.imageLink} alt="" />
        </div>
    );
}