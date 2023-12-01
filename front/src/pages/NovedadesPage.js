import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import '../styles/home.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

const NovedadesPage = (props) => {

    const textNovedades = {
        textAlign: "center",
        color: '#FF0000',
        fontFamily: 'Verdana',
        paddingTop: 10,
        paddingBottom: 20
    };

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async() => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <section className="holder">
            <h2 style={textNovedades}>Peliculas Calificadas!!</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                titulo={item.titulo}
                valoracion={item.valoracion}
                imagen={item.imagen} />)
            )}
        </section>
    );
}
export default NovedadesPage;