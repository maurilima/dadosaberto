import React from 'react';
import { FaUserFriends } from 'react-icons/fa';


import './index.css'

function BoxShadow({ titleexterno, title, texto }) {
    return (
        <>
            <div className="box-message">
                <div className="title">
                    {title}
                </div>
                <div className="texto">
                   <FaUserFriends color='#139DF2'/>{texto}
                </div>
            </div>
            <div className="title-externo">{titleexterno}</div>


        </>

    );
}

export default BoxShadow;