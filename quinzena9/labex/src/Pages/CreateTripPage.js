import { useEffect, useState } from 'react';
import './Styles/CreateTripPage.css'

function CreateTripPage() {
    return (
        <div className="CreateTripPage">

            <div className="Container_Trip">

                <div className="Header_Trip">
                    <div className="Voltar_Trip">Voltar</div>
                    <div className="Criar_Trip">Criar Trip</div>
                </div>
               
               <div className="viagens">

               </div>
               
               <button>Criar</button>
            </div>
        </div>
    );
}

export default CreateTripPage;
