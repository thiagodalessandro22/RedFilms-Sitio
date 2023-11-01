import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css'
import '../styles/home.css'


const color = {
    red: {
        color: 'red'
    },
    red2: {
        color: 'rgb(200, 24, 24)'
    }
}

const padding = {
    top: {
        paddingTop: '90px;'
    },
}

const HomePage = (props) => {
    return (
        <main>
            <div className="holder">
                <div className="columnas">
                    <div className="bienvenidos redFilms">
                        <h2>Bienvenidos a RedFilms - #1 Movie Streaming</h2>
                        <p><b style={color.red}>RedFilms</b> es un centro de medios moderno que es una solución integral
                        para el entretenimiento de video. Descubre, ve y organiza contenido de video desde 
                        complementos fáciles de instalar.
                        </p>
                        <p>Peliculas, TV shows, TV en vivo y canles web - encuentra todo esto en RedFilms.</p>
                    </div>
                    <div className="testimonio t-center">
                            <div>
                            <img className="imgCinta" src="img/home/cinta.jpg"/>
                            </div>
                    </div>
                </div>
            </div>
            <div className="holder">  
                <div className="t-center">
                    <h5 style={color.red2}>Visitá nuestra encuesta:</h5>
                    <div>
                        <Link to='/topPeliculas'>
                            <h1 className="textoEncuesta">Las 5 Mejores Peliculas de la Historia</h1>
                        </Link>
                    </div>
                    <div>
                        <Link to='/topPeliculas'>
                            <div style={padding.top}>
                                <img  className="imgHome" src="img/home/peliculas.png" alt="Fondo"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;