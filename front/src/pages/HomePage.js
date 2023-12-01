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
                        <p><b style={color.red}>RedFilms</b> es un centro de medios moderno que brinda la posibilidad
                        de rankear peliculas y enterarte de todas las noticias alrededor del cine.
                        </p>
                        <p>Peliculas, TV shows, TV en vivo y canales web - encuentra todo esto en RedFilms. 
                            Descargá nuestros torrents y empezá a disfrutar.
                        </p>
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
                    <h5 style={color.red2}>Visitá nuestro ranking:</h5>
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
                    <br></br>
                    <br></br>
                    <div>
                        <h5 style={color.red2}>Visitá nuestra sección de estrenos:</h5>
                        <Link to='/estrenos'>
                            <h1 className="textoEncuesta">Los Estrenos Más Esperados!</h1>
                        </Link>
                        <Link to='/estrenos'>
                            <div style={padding.top}>
                                <img  className="imgHome" src="img/home/estrenos.jpg" alt="Estrenos"/>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <h5 style={color.red2}>Rankeá la última película que viste:</h5>
                        <Link to='/novedades'>
                            <h1 className="textoEncuesta">Agregá tu película aquí!!</h1>
                        </Link>
                        <Link to='/novedades'>
                            <div>
                                <img  className="imgHomeLog" src="img/home/logFilms.png" alt="Log"/>
                            </div>
                        </Link>
                    </div>
                </div>
                <br></br>
            </div>
        </main>
    );
}

export default HomePage;