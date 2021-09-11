import React from 'react';

import './index.css'

function BoxShadow({ title, texto }) {
    return (
        <>
            <div className="box-message">
                <div className="title">
                    {title}
                </div>
                <div className="texto">
                    {texto}
                </div>
            </div>


        </>

    );
}

export default BoxShadow;