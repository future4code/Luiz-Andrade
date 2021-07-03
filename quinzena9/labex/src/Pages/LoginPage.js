import { useEffect, useState } from 'react';
import './Styles/LoginPage.css'

function LoginPage() {
    return (
        <div className="LoginPage">
          <div className="Header_Login">
            <div className="Back_Login">Voltar</div> 
            <div className="Logo_Login">LOGO</div>
          </div>

          <div className="Container_Login">

    
              <div className="Inputs">
                  <input type="email"></input>
                  <input type="password"></input>
              </div>
              
              <button>ENTRAR</button>
          </div>
        
        </div>
        

    );
}

export default LoginPage;
