import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import '../styles/home.css'
import '../styles/redFilmsApp.css'

const pt10 = {
    paddingTop: "10px"
  };

  const fs20 = {
    fontSize: "20px"
  };

const RedFilmsAppPage = (props) => {
    return (
        <div>
            <div className="holder">
                <div style={pt10} className="holder">
                    <h1 className="textoPromocion">Unete a RedFilms con nuestra app!</h1>
                    <p>Con <span className="rojo"><b>RedFilms</b></span> disfruta en cualquier lugar y momento</p>
                    <p>Descargá nuestra app y mirá sin conexión en la aplicación de <span className="rojo"><b>RedFilms</b></span>
                    cuando descargue títulos a su iPhone, iPad, tablet o dispositivo Android.</p>
                </div>
            </div>
            

            <div className="holder">
                <div>
                    <div className="t-center">
                        <Link to=""><h5 className="textoApp">Descargá nuestra App:</h5></Link>
                        <Link to=""><h6 style={fs20} className="textoApp">Ir al Link:</h6></Link>
                        <Link to=""><img className="imgApp" src="img/app/descarga.png" alt="Fondo"/></Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default RedFilmsAppPage;