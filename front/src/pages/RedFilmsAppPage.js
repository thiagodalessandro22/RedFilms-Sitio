import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import '../styles/home.css'
import '../styles/redFilmsApp.css'
import axios from 'axios';

const pt10 = {
    paddingTop: "10px"
};

const pl10 = {
    paddingLeft: "50px"
};

const fs20 = {
    fontSize: "20px"
};

const textAlignCenter = {
    textAlign: "center"
}

const RedFilmsAppPage = (props) => {

    const initialForm = {
        nombre: '',
        apellido: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg();
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder contacto">
            <div>
                <div className="holder">
                    <div className="formulario">
                        <form action="/contacto" method='post' onSubmit={handleSubmit}>
                            <h4 style={textAlignCenter}>Contactános!</h4>
                            <input className="controls" type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ingrese su Nombre" />
                            <input className="controls" type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Ingrese su Email" />
                            <input className="controls" type="text" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Ingrese su Telefono" />
                            <textarea className="controls" name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Ingrese su Mensaje"></textarea>
                            <input className="botons" type="submit" value="Enviar" />
                            {sending ? <p>Enviando...</p> : null}
                            {msg ? <p>{msg}</p> : null}
                        </form>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="datos">
                <h2>Otras vias de comunicación</h2>
                <p>Tambien puedes contactarte con nosotros utilizando los siguiente medios:</p>
                <ul>
                    <li>Telefono: 42423423</li>
                    <li>Email: titat1494@gmail.com</li>
                    <li>Facebook: RedFilmsApp</li>
                    <li>Twitter: RedFilms</li>
                    <li>Skype: RedFilms</li>
                </ul>
            </div>
            <br></br>
            <div>
                <div className="holder">
                    <div style={pt10} className="holder">
                        <h1 className="textoPromocion">Unete a RedFilms con nuestra app!</h1>
                        <p>Con <span className="rojo"><b>RedFilms</b></span> disfruta en cualquier lugar y momento de manera sencilla.</p>
                        <p>Descargá nuestra app y mirá sin conexión en la aplicación de <span className="rojo"><b>RedFilms </b></span>
                            tanto para iPhone, iPad, tablet o dispositivos Android.</p>
                    </div>
                </div>


                <div className="holder">
                    <div>
                        <div className="t-center">
                            <Link to=""><h5 className="textoApp">Descargá nuestra App:</h5></Link>
                            <Link to=""><img className="imgApp" src="img/app/descarga.png" alt="Fondo" /></Link>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default RedFilmsAppPage;