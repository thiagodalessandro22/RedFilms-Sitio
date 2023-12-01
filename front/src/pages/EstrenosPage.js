// import '../App.css'
// import '../src/styles/components/estrenos.css';
// import '../styles/home.css'
import '../styles/estrenos.css'
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

const Estrenos = (props) => {
    return (
        <div style={pt10} className="holder">
            <h1 className="textoPromocion">Los Estrenos más esperados!!</h1>
            <p><span className="rojo"><b>RedFilms</b></span> presenta los estrenos más esperados para fines de 2023 y para 2024.</p>
            <p>A pesar de faltar bastante tiempo para 2024 hay ya muchas producciones confirmadas.</p>
            <p>El séptimo arte contará en 2024 con varios filmes que los fanáticos de las franquicias y blockbusters ansían ver en pantalla grande.
            Acción, fantasía, anime y superhéroes en combate es un poco del menú que están preparando las grandes casas productoras para seguir llevando gente a las salas de cine.</p>
            
            <div style={pt40}>
                <h2 className="textAlignCenter">Napoleón - Ridley Scott</h2>
                <img className="imgEstrenos" src="img/estrenos/napoleon.jpg" alt="Napoleón"/>
                <p style={pt5} class="textoEstrenos">Joaquin Phoenix llega el mes de noviembre al cine con Napoleón, otro de los eventos cinematográficos más
                esperados del año. Tras su debut en Rotten Tomatoes, el filme dirigido por Ridley Scott, alcanzó
                una calificación inicial del 82%, manteniendo actualmente un sólido 80% de aprobación por parte
                de los críticos. Esta producción ofrece una mirada original y personal sobre los orígenes de 
                Napoleón Bonaparte y su rápida ascensión a emperador, retratando en pantalla su relación con 
                su esposa Josefina y sus grandes batallas.</p>
            </div>

            <div style={pt25}>
                <h2 className="textAlignCenter">Misión Imposible 8 - Christopher McQuarrie</h2>
                <img className="imgEstrenos" src="img/estrenos/cruise.png" alt="Misión Imposible 8"/>
                <p style={pt5} class="textoEstrenos16">Tom Cruise y sus escenas arriesgadas de acción parecen no tener fin,
                ya que la franquicia de Misión Imposible contará con una octava película para el verano del 2024.
                Deseosos de seguir viendo a Tom Cruise realizando piruetas que hacen sudar a las aseguradoras,
                esperaremos ansiosos esta nueva entrega prometedora.</p>
            </div>

            <div style={pt25}>
                <h2 className="textAlignCenter">Joker 2 - Todd Phillips</h2>
                <img className="imgEstrenos" src="img/estrenos/joker2.png" alt="Joker 2"/>
                <p style={pt5} class="textoEstrenos16">Las buenas sensaciones que dejó el Joker de
                Joaquin Phoenix permitieron una segunda parte de su personaje. El 4 de octubre es 
                la fecha indicada para conocer esta historia que incluirá a la talentosa Lady Gaga.
                Pocas adaptaciones de cómics pijameros han causado tanto impacto a nivel de crítica,
                público y sociedad como lo hizo la controvertida 'Joker' de Todd Phillips en 2019. 
                Y es que esta historia de orígenes del Príncipe payaso del crimen de DC puso patas 
                arriba la industria con su única, violenta y cruda aproximación al personaje 
                interpretado por un Joaquin Phoenix tan brillante como de costumbre.
                Desde entonces, son muchas las voces que se han alzado pidiendo al 
                universo una secuela y, tras una larga temporada de rumores y desmentidos, 
                se ha terminado confirmando que 'Joker 2' será una realidad.
                </p>
            </div>

            <div style={pt25}>
                <h2 className="textAlignCenter">Dune: Parte Dos - Denis Villeneuve</h2>
                <img className="imgEstrenos" src="img/estrenos/dune2.png" alt="Dune 2"/>
                <p style={pt5} class="textoEstrenos16">Lleva bastante tiempo haciéndose de rogar, 
                pero parece que el próximo 15 de marzo de 2024 veremos por fin la ansiada segunda 
                parte de Dune, la magistral superproducción de Denis Villeneuve que llegó a los 
                cines allá por 2021, y que devolvió la ilusión a un público que comenzaba a salir 
                de la pandemia ávido de nuevas y grandes historias. La encontraron con esta 
                adaptación de la ambiciosa novela de Frank Herbert, pero la ambición fue tal que 
                tuvieron que partir el filme en dos, dejando así con ganas a los espectadores de 
                mucho más. La espera habrá merecido la pena, pues en esta siguiente entrega contarán 
                con más estrellas en ya espectacular reparto: Florence Pugh, Austin Butler, 
                Léa Seydoux o el gran Christopher Walken.
                </p>
            </div>


        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


        </div>
    );
}

export default Estrenos;
