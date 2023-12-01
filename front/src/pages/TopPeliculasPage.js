// import '../App.css'
// import '../src/styles/components/topPeliculas.css';
// import '../styles/home.css'

// import '../App.css'
// import '../src/styles/components/estrenos.css';
// import '../styles/home.css'
import '../styles/topPeliculas.css'
import '../App.css'
import '../styles/promociones.css'

const pt5 = {
    paddingTop: "5px"
};

const pt10 = {
    paddingTop: "10px"
};

const pt25 = {
    paddingTop: "25px"
};

const pt40 = {
    paddingTop: "40px"
};

const Top5MejoresPeliculas = (props) => {
    return (
        <div style={pt10} className="holder">
            <h1 className="textoPromocion">Top 5 Mejores Peliculas de la historia!!</h1>
            <p><span className="rojo"><b>RedFilms</b></span> presenta su top 5 de mejores peliculas -mayor valoración-.</p>
            <p>Tras más de un siglo de vida del séptimo arte, responder a la pregunta 
                "¿Cuál es la mejor película de la historia del cine?" es casi imposible. 
                Casi como decidirse entre las frases de cine más famosas e icónicas de la historia. 
                Hay muchos factores a tener en cuenta, muchos directores y directoras a considerar, 
                películas que marcaron un antes y un después, títulos queridos que nunca mueren... 
                ¡Es una decisión casi imposible! Así que vamos a hacer el intento... según nuestro criterio estas son
                las 5 mejores películas de la historia.
            </p>

            <div style={pt40}>
                <h2 className="textAlignCenter"><span className="rojo"><b>Top 5:</b></span> Goodfellas - Martin Scorsese</h2>
                <img className="imgTopPeliculas" src="img/top5peliculas/goodfellas.jpg" alt="Goodfellas"/>
                <p style={pt5} class="textoEstrenos">Buenos muchachos es una de las películas más 
                memorables de la filmografía de Martin Scorsese. Luego de haber hecho algunas cintas 
                sobre gángsters durante los 70 y los 80 como Calles peligrosas, en 1990 el director 
                abrió la década con la que sería su pieza definitiva sobre mafiosos. 
                El film protagonizado por Robert De Niro, Ray Liotta y Joe Pesci cumple 33 años.</p>
            </div>

            <div style={pt25}>
                <h2 className="textAlignCenter"><span className="rojo"><b>Top 4:</b></span> La Lista De Schindler - Steven Spielberg</h2>
                <img className="imgTopPeliculas" src="img/top5peliculas/listaschindler.jpg" alt="La Lista De Schindler"/>
                <p style={pt5} class="textoEstrenos">Premiada con 7 Oscars incluyendo el de Mejor Película, 
                Steven Spielberg se consagró en el olimpo del séptimo arte con esta desgarradora historia real 
                del holocausto en la que un empresario alemán sacrificó su negocio y reputación para salvar 
                miles de vidas judías.
                Oskar Schindler Liam Neeson, un empresario alemán de gran talento para las relaciones
                 públicas, busca ganarse la simpatía de los nazis de cara a su beneficio personal. 
                 Después de la invasión de Polonia por los alemanes en 1939, Schindler consigue, 
                 gracias a sus relaciones con los altos jerarcas nazis, la propiedad de una fábrica 
                 de Cracovia. Allí emplea a cientos de operarios judíos, cuya explotación le hace 
                 prosperar rápidamente, gracias sobre todo a su gerente Itzhak Stern Ben Kingsley, 
                 también judío. Pero conforme la guerra avanza, Schindler y Stern comienzan a ser 
                 conscientes de que a los judíos que contratan, los salvan de una muerte casi segura 
                 en el temible campo de concentración de Plaszow, que lidera el Comandante nazi Amon 
                 Goeth Ralph Fiennes, un hombre cruel que disfruta ejecutando judíos.</p>
            </div>


            <div style={pt25}>
                <h2 className="textAlignCenter"><span className="rojo"><b>Top 3:</b></span> Come And See - Elem Klimov</h2>
                <img className="imgTopPeliculas" src="img/top5peliculas/comeandsee.jpg" alt="Come And See"/>
                <p style={pt5} class="textoEstrenos">Un proyecto que nació como un encargo para celebrar el 40 aniversario
                de la victoria aliada pero que, gracias a la prodigiosa dirección de Elem Klimov, se ha 
                convertido en un todo un referente antibelicista que nos muestra la crudeza de la guerra en 
                su faceta más brutal a través de los ojos de un joven partisano de la resistencia bielorrusa. 
                El escritor Alés Adamóvich, mentor de la ganadora del Nobel, Svetlana Alexievich, fue máximo 
                responsable del guion, basado en sus propias experiencias de niño, cuando fue testigo de las 
                barbaridades que perpetraron los nazis en las aldeas de Bielorrusia.
                Tras encontrar un viejo rifle, un joven se une a las fuerzas de la resistencia soviética, 
                que lucha por expulsar a las fuerzas nazis del frente oriental. Allí, será testigo de algunos 
                los mayores horrores cometidos en la Segunda Guerra Mundial.</p>
            </div>

            <div style={pt25}>
                <h2 className="textAlignCenter"><span className="rojo"><b>Top 2:</b></span> El Ciudadano Kane - Orson Welles</h2>
                <img className="imgTopPeliculas" src="img/top5peliculas/ciudadanokane.jpg" alt="El Ciudadano Kane"/>
                <p style={pt5} class="textoEstrenos">Se estrenó hace 80 años y fue una genialidad de 
                Orson Welles, que la filmó a los 25. Retrató la vida del magnate periodístico 
                Randolph Hearst que quiso sobornar a los estudios RKO para que la hicieran 
                desaparecer. La trama de poder, ambición y corrupción de una película que se 
                convirtió en una de las mejores de la historia y la más escandalosa por lejos.
                Es una obra de arte que empieza con un gran yerro. Charles Foster Kane, El Ciudadano,
                muere solo y en soledad, con apenas un murmullo en sus labios: “Rosebud”. 
                Eso mueve a un periodista a rastrear el significado de esa palabra y el pasado de 
                Kane. Ese es el nudo del filme. Pero, si Kane muere solo, ¿quién le oyó murmurar 
                “Rosebud”?</p>
            </div>

            <div style={pt25}>
                <h1 className="textAlignCenter"><span className="rojo"><b>Bonus Tracks:</b></span></h1>
                <h2 className="textAlignCenter">Atrapado Sin Salida - Miloš Forman </h2>
                <img className="imgTopPeliculas" src="img/top5peliculas/atrapadosinsalida.jpg" alt="El Padrino 2"/>
                <p style={pt5} class="textoEstrenos">Randle McMurphy -Jack Nicholson-, un hombre condenado por 
                asalto, y un espíritu libre que vive contracorriente, es recluido en un hospital psiquiátrico. 
                La inflexible disciplina del centro acentúa su contagiosa tendencia al desorden, que acabará 
                desencadenando una guerra entre los pacientes y el personal de la clínica con la fría y severa 
                enfermera Ratched -Louise Fletcher- a la cabeza. La suerte de cada paciente del pabellón está 
                en juego.</p>
                <p style={pt25}></p>
                
                
                <h2 className="textAlignCenter">El Padrino 2 - Francis Ford Coppola</h2>
                <img className="imgTopPeliculas" src="img/top5peliculas/elpadrino2.jpg" alt="El Padrino 2"/>
                <p>La mejor secuela mafiosa de la historia sigue siendo ideal para quienes no hayan tenido el privilegio de darse cita con la misma.</p>
                <p style={pt5} class="textoEstrenos">En la Nueva York de 1917, un joven inmigrante 
                siciliano se convierte en criminal para sacar adelante a su familia. Más tarde, 
                su hijo hereda su imperio y lo mantiene en pie… a costa de traicionar aquello que 
                su padre consideraba honorable. Con su compleja estructura y sus interpretaciones 
                de órdago -encabezadas por Al Pacino y Robert De Niro-, 
                El padrino: Parte II prolongó la saga de los Corleone de manera deslumbrante, 
                siendo aclamada aún hoy como una de las mejores secuelas de la historia.</p>
            </div>

            <br></br>
            <div style={pt25}>
                <h1 className="textAlignCenter"><b>Y la mejor película de la historia es...</b></h1>
                <br></br>
                <h2 className="textAlignCenter"><span className="rojo"><b>Top 1: </b></span>El Padrino - Francis Ford Coppola</h2>
                <img className="imgTopPeliculas" src="img/top5peliculas/elpadrino.jpg" alt="El Padrino"/>
                <p style={pt5} class="textoEstrenos">A la hora de hablar de películas de gánsteres, 
                hay dos períodos distintos: antes y después de 'El padrino'. De hecho, la película 
                de Coppola estableció el estándar no solo para los dramas criminales sino también 
                para las películas en general. Los fans y la crítica a menudo consideran que la 
                original de 1972 y su secuela de 1974 están entre las mejores películas de todos 
                los tiempos. Ambas ganaron el Oscar a la Mejor Película.
                'El Padrino' debe gran parte de su éxito a su guion, a la dirección de Coppola, 
                pero también al reparto. El buen ojo del director consiguió reunir a uno de los 
                elencos que más se recuerdan de la historia del cine. Nadie ahora puede imaginarse 
                a Michael Corleone con otro rostro que no sea el de Al Pacino, o Sonny sin la cara de 
                James Caan. Y, sobre todo, una de las imágenes que han quedado para la posteridad es 
                la figura de Don Vito Corleone: Marlon Brando dejó su personaje más icónico gracias a 
                una caracterización y una interpretación colosal. Cuesta creer que casi no fuera elegido 
                para el patriarca de esta familia de mafiosos.</p>
            </div>


        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


        </div>
    );
}

export default Top5MejoresPeliculas;
