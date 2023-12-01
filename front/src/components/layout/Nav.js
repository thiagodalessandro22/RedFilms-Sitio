import React from 'react';

import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined} 
                    >Home</NavLink></li>
                    <li><NavLink to="/novedades" className={({ isActive }) => isActive ? "activo" : undefined} >Calificá tu pelicula!</NavLink></li>
                    <li><NavLink to="/estrenos" className={({ isActive }) => isActive ? "activo" : undefined} 
                    >Estrenos</NavLink></li>
                    <li><NavLink to="/promociones" className={({ isActive }) => isActive ? "activo" : undefined} 
                    >Promociones</NavLink></li>
                    <li><NavLink to="/topPeliculas" className={({ isActive }) => isActive ? "activo" : undefined} 
                    >Top 5 Mejores Peliculas</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined} 
                    >Descargá nuestra App</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;