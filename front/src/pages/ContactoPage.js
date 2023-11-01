import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import '../styles/contacto.css'
import '../styles/home.css'

const textAlignCenter = {
    textAlign: "center"
}

const pb10 = {
    paddingBottom: "70px"
};


const ContactoPage = (props) => {
    return (
        <div>
            
                <div className="holder">
                    <div className="formulario">
                        <h4 style={textAlignCenter}>Contactános!</h4>
                        <input className="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre"/>
                        <input className="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido"/>
                        <input className="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo"/>
                        <input className="controls" type="password" name="correo" id="correo" placeholder="Ingrese su Contraseña"/>
                        <p>Estoy de acuerdo con Terminos y Condiciones</p>
                        <input className="botons" type="submit" value="Registrar"/>
                        <p><Link to="">¿Ya tienes Cuenta?</Link></p>
                    </div>
                </div>
        
        </div>
    );
}

export default ContactoPage;