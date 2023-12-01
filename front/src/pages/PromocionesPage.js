import React from 'react';
import '../App.css'
import '../styles/promociones.css'
import '../styles/home.css'

const pt10 = {
    paddingTop: "10px"
  };

const colorBlack = {
    color: "black"
}

const Promociones = (props) => {
    return (
        <div style={pt10} className="holder">
            <h1 className="textoPromocion">Promociones y Planes</h1>
            <p><span className="rojo"><b>RedFilms</b></span> ofrece varios planes para que elijas el más adecuado para tus necesidades.</p>
            <p>Como miembro de <span className="rojo"><b>RedFilms</b></span>, se te cobrará una vez por mes en la fecha de suscripción. Las cuentas de <span className="rojo"><b>RedFilms</b></span> están pensadas para personas que viven juntas en el mismo hogar. Aprende más sobre cómo compartir <span className="rojo"><b>RedFilms</b></span>.</p>
            <div className="promocion">
                <img src="img/promociones/packFamiliar.png" alt="Plan Familiar"/>
                <div className="info">
                    <h3 className="textoTituloPlan">Accedé al Plan Familiar</h3>
                    <p className="textoPlan">Incluye juegos móviles, series y películas; sin publicidad y sin límite.
                    <span className="rojo">&nbsp;Puedes ver contenido en 1 dispositivo compatible a la vez.</span>
                    &nbsp;Puedes ver en HD.
                    <span className="rojo">&nbsp;Puedes descargar contenido en 1 dispositivo compatible a la vez.</span></p>
                </div>
            </div>
            <div className="promocion1">
                <img src="img/promociones/planPareja.png" alt="Plan Estándar"/>
                <div className="info2">
                    <h3 className="textoTituloPlan">Accedé al Plan Estándar</h3>
                    <p className="textoPlan">Incluye juegos móviles, series y películas; sin publicidad y sin límite.
                    <span className="rojo">&nbsp;Puedes ver contenido en 2 dispositivos compatibles a la vez.</span>
                    &nbsp;Puedes ver en Full HD.
                    <span className="rojo">&nbsp;Puedes descargar contenido en 2 dispositivos compatibles a la vez.</span>
                    &nbsp;Opción para agregar hasta 1 miembro extra que no viva contigo.</p>
                </div>
            </div>
            <div className="promocion">
                <img src="img/promociones/planPremium.png" alt="Plan Premium"/>
                <div className="info">
                    <h3 style={colorBlack}className="textoTituloPlan">Del Cine a tu Casa con el <span className="rojo"><b>Plan Premium</b></span> </h3>
                    <p className="textoPlan">Incluye juegos móviles, series y películas; sin publicidad y sin límite.
                    <span className="rojo">Puedes ver contenido en 4 dispositivos compatibles a la vez.</span>
                    &nbsp;Puedes ver en Ultra HD.
                    <span className="rojo">&nbsp;Puedes descargar contenido en 6 dispositivos compatibles a la vez.</span>
                    &nbsp;Opción para agregar hasta 2 miembros extras que no vivan contigo.
                    <span className="rojo">&nbsp;Audio espacial de </span><b>RedFilms</b></p>
                </div>
            </div>
            <br></br>
        </div>
    );
}

export default Promociones;