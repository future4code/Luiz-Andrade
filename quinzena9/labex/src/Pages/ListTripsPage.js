import { useEffect, useState } from 'react';
import './Styles/ListTripsPage.css'

function ListTripPage() {
    return (
        <div className="ListTripPage">
            <header>
                <div className="Tela_Inicial">Tela Inicial</div>
                <div className="Logo_Trips">Logo</div>
                <div className="Inscrever-se">Inscrever-se</div>
            </header>
           
            <div className="Container_Viagens">
                
                <div className="Titulo">Lista de Viagens</div>
                <div className="Viagens">

                </div>
            </div>
        </div>
    );
}

export default ListTripPage;
