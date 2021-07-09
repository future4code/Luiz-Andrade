import { useEffect, useState } from 'react';
import './Styles/TripDetailsPage.css'

function TripDetailsPage() {


    return (
        <div className="TripDetailsPage">
            <div className="Container_detail">
                <div className="voltar_detail">Voltar</div>

                <div className="informacoes"></div>

                <div className="container_bottom_detail">
                    <div className="candidatos">Candidatos Pendentes</div>
                    <div className="aprovados">Candidatos aprovados</div>
                </div>
            </div>
        </div>
    );
}

export default TripDetailsPage;

