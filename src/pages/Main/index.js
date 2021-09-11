import React from 'react';
import RakingOrgaos from '../../components/RakingOrgaos';
import VisaoGeral from '../VisaoGeral';

import './index.css'

function Main() {
    return (
        <>
            <div id="page-pedido">
                <aside >
                    <header>
                        <strong>Cabecalho</strong>
                        <img src="" alt="" />
                    </header>
                    <footer>
                        <strong>Rodape</strong>
                    </footer>

                </aside>
                <div id="main">
                  <VisaoGeral />
                  <RakingOrgaos />
            </div>
         </div>
   
        </>

    );
}

export default Main;