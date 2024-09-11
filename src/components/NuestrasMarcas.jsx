import styleNuestrasMarcas from '../css/nuestrasMarcas.module.css';
import marca1 from '../assets/img/marca-1.png';
import marca2 from '../assets/img/marca-2.png';
import marca3 from '../assets/img/marca-3.png';
import marca4 from '../assets/img/marca-4.png';
import marca5 from '../assets/img/marca-5.png';
import marca6 from '../assets/img/marca-6.png';

const Marca = (props) => {
    return(
        <div className={styleNuestrasMarcas.contenedorLogo} data-aos="flip-up">
            <img className={styleNuestrasMarcas[props.estilo]} src={props.imagen} alt={props.alt}/>
        </div>
    );
}

const NuestrasMarcas = () => {
    return (
        <section className={styleNuestrasMarcas.nuestrasMarcas}>
            <article className={styleNuestrasMarcas.marcaTitulo}>
                <h3>Nuestras marcas</h3>
            </article>
            <article className={styleNuestrasMarcas.marcas}>
                <Marca key={1} imagen={marca1} alt="royal-canin" estilo="logoRoyalCanin"/>
                <Marca key={2} imagen={marca2} alt="purina" estilo="logoPurina"/>
                <Marca key={3} imagen={marca3} alt="nexgard" estilo="logoNexgard"/>
                <Marca key={4} imagen={marca4} alt="bravexto" estilo="logoBravexto"/>
                <Marca key={5} imagen={marca5} alt="purina-pro-plan" estilo="logoPurinaProPlan"/>
                <Marca key={6} imagen={marca6} alt="whiskas" estilo="logoWhiskas"/>
            </article>
        </section>
    );
}

export default NuestrasMarcas;