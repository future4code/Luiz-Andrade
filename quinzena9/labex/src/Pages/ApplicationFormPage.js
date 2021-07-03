import { useEffect, useState } from 'react';
import './Styles/ApplicationFormPage.css'

function ApplicationFormPage() {
    return (
        <div className="ApplicationFormPage">
        <div className="Header_Form">
            <div className="Tela_Inicial">Tela Inicial</div>
            <div className="Logo_Trips">Logo</div>
        </div>
          
          <div className="Container_Form">
              <div className="Container_Form_Inside">
                  <div className="Titulo_Form">
                     <p>Inscreva-se para uma viagem</p>
                  </div>

                  <div className="Form">

                      <button>Enviar</button>
                  </div>
              </div>
          </div>
        
        </div>

    );
}

export default ApplicationFormPage;
