import stylePeluqueria from '../css/peluqueria.module.css';
import imgPelu1 from '../assets/img/peluqueria-1.jpg';
import imgPelu2 from '../assets/img/peluqueria-2.jpg';

const PubliPeluqueria = () => {
    return (
        <section className={stylePeluqueria.peluqueria}>
            <a className={stylePeluqueria.linkPeluqueria} href="#" target="_blank" data-aos="flip-up" aria-label="Peluqueria de mascotas">
                <img className={stylePeluqueria.imgPeluqueria1} src={imgPelu1} alt="peluqueria-1"/>
                <img className={stylePeluqueria.imgPeluqueria2} src={imgPelu2} alt="peluqueria-2"/>
            </a>
        </section>
    );
}

export default PubliPeluqueria;
