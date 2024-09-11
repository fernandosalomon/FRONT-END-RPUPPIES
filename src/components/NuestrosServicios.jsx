import styleNuestrosServicios from '../css/nuestrosServicios.module.css';
import stylePrincipal from '../index.module.css';
import consultorioVeterinario from '../assets/img/consultorio-veterinario.svg';
import internacionDiurna from '../assets/img/internacion-diurna.svg';
import laboratorioPropio from '../assets/img/laboratorio.svg';
import radiografias from '../assets/img/radiografias.svg';
import cirugias from '../assets/img/cirugias.svg';
import colocacionMicrochips from '../assets/img/colocacion-microchips.svg';
import guardiaVeterinaria from '../assets/img/guardia-veterinaria.svg';
import otrasEspecialidades from '../assets/img/otras-especialidades.svg';

const Servicio = (props) => {
    return(
        <div className={styleNuestrosServicios.cardServicio} data-aos="flip-up">
            <img src={props.imagen} alt={props.titulo}/>
            <h5>{props.titulo}</h5>
            <p>{props.descripcion}</p>
        </div>
    );
}

const NuestrosServicios = () => {
    return (
        <section className={styleNuestrosServicios.servicios}>
            <article className={styleNuestrosServicios.serviciosTitulo}>
                <h2>Servicios</h2>
            </article>
            <article className={styleNuestrosServicios.contenedorServicios}>
                <Servicio key={1} imagen={consultorioVeterinario} titulo="Consultorio Veterinario" descripcion="Espacio dedicado al cuidado de mascotas, ofreciendo consultas, diagnósticos y tratamientos veterinarios para su bienestar."/>
                <Servicio key={2} imagen={internacionDiurna} titulo="Internación Diurna" descripcion="Servicio de cuidado veterinario durante el día, con monitoreo y atención médica especializada para mascotas."/>
                <Servicio key={3} imagen={laboratorioPropio} titulo="Laboratorio Propio" descripcion="Laboratorio veterinario interno para realizar análisis y diagnósticos precisos en el mismo consultorio."/>
                <Servicio key={4} imagen={radiografias} titulo="Radiografías y Ecografías" descripcion="Servicio de radiografías y ecografías para diagnósticos veterinarios rápidos y precisos."/>
                <Servicio key={5} imagen={cirugias} titulo="Cirugias" descripcion="Realización de cirugías veterinarias con equipos modernos y cuidados especializados para la recuperación de las mascotas."/>
                <Servicio key={6} imagen={colocacionMicrochips} titulo="Colocación de Microchip" descripcion="Servicio de implantación de microchip para identificación segura y permanente de mascotas."/>
                <Servicio key={7} imagen={guardiaVeterinaria} titulo="Guardia Veterinaria" descripcion="Atención veterinaria de urgencias disponible las 24 horas para casos imprevistos."/>
                <Servicio key={8} imagen={otrasEspecialidades} titulo="Otras Especialidades" descripcion="Consultas especializadas en diversas áreas veterinarias para el cuidado integral de las mascotas."/>
            </article>
        </section>
    );
}

export default NuestrosServicios;
