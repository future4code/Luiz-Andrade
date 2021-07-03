import { useEffect, useState } from 'react';
import './Styles/AdminHomePage.css'

function AdminHomePage() {


    return (
        <div className="AdminHomePage">
          <div className="Header_adm">
              <div className="volta_adm">Voltar</div>
              <div className="Logo_adm">Logo</div>
              <div className="Logout_adm">Logout</div>
          </div>

          <div className="container_adm">
              <div className="painel_adm"></div>
              <div className="container_viagens"></div>
              
          </div>
          <button>Criar Viagem</button>
        </div>
    );
}

export default AdminHomePage;
