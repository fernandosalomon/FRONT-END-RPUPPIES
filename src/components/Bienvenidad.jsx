import { Card } from 'react-bootstrap';
import styleBienvenida from '../css/bienvenida.module.css';

const Bienvenidad = () => {
    return (
        <section className={styleBienvenida.bienvenidad} data-aos="fade-up">
            <h2 className={styleBienvenida.tituloBienvenida}>Bienvenid@ a Rolling Puppies</h2>
            <div className={styleBienvenida.cardDescripcion}>
                <p className={styleBienvenida.descripcion}><b>Rolling Puppies</b> es una veterinaria moderna y acogedora dedicada al cuidado integral de mascotas, especializada en perros, gatos y animales exóticos. Ofrecen una amplia gama de servicios, que incluyen consultas veterinarias, vacunaciones, desparasitaciones, cirugías menores, control de peso y asesoramiento en nutrición. Con un equipo altamente capacitado, garantizan un trato personalizado y afectuoso para cada mascota, priorizando su bienestar y comodidad.</p>
            </div>
        </section>
    );
}

export default Bienvenidad
