import styleMisMascotas from '../css/misMascotas.module.css';
import imgPerro from '../assets/img/perro.png';
import imgGato from '../assets/img/gato.png';

const CardCanino = () => {
    return (
        <div className={styleMisMascotas.cardMascota} data-aos="zoom-in">
            <div className={styleMisMascotas.cardContenido}>
                <span className={styleMisMascotas.perro}></span>
                <div className={styleMisMascotas.imgPet}>
                    <img className={styleMisMascotas.imgMascota} src={imgPerro} alt="perro"/>
                </div>
                <h4>Roco</h4>
                <div className={styleMisMascotas.botonesMascotas}>
                    <button className={styleMisMascotas.btnTurno}>
                        <i className="fa-solid fa-calendar-day"></i> Turnos
                    </button>
                    <button className={styleMisMascotas.btnEditarMascota} aria-label="Editar Mascota">
                        <i className="fa-solid fa-pen-to-square"></i> Editar
                    </button>
                </div>
            </div>
            <button className={styleMisMascotas.btnEliminarMascota} type="button"><i className="fa-solid fa-circle-xmark"></i></button>
        </div>
    );
}

const CardFelino = () => {
    return (
        <div className={styleMisMascotas.cardMascota} data-aos="zoom-in">
            <div className={styleMisMascotas.cardContenido}>
                <span className={styleMisMascotas.gato}></span>
                <div className={styleMisMascotas.imgPet}>
                    <img className={styleMisMascotas.imgMascota} src={imgGato} alt="gato"/>
                </div>
                <h4>Cloe</h4>
                <div className={styleMisMascotas.botonesMascotas}>
                    <button className={styleMisMascotas.btnTurno}>
                        <i className="fa-solid fa-calendar-day"></i> Turnos
                    </button>
                    <button className={styleMisMascotas.btnEditarMascota} aria-label="Editar Mascota">
                        <i className="fa-solid fa-pen-to-square"></i> Editar
                    </button>
                </div>
            </div>
            <button className={styleMisMascotas.btnEliminarMascota} type="button"><i className="fa-solid fa-circle-xmark"></i></button>
        </div>
    )
}

const MisMascotas = () => {
    return (
        <section className={styleMisMascotas.tusMascotas}>
            <article className={styleMisMascotas.tusMascotasTitulo}>
                <h2>Tus mascotas</h2>
            </article>
            <article className={styleMisMascotas.agregarMascota}>
                <button type="button" className="btn btn-success fw-bolder fs-6" data-bs-toggle="modal" data-bs-target="#agregarMascotaModal"><i className="fa-solid fa-circle-plus" aria-label="Agregar Mascota"></i> Agregar Mascota</button>
            </article>
            <article className={styleMisMascotas.contenedorMascotas}>
                <CardCanino key={1}/>
                <CardFelino key={2}/>
                <CardCanino key={3}/>
                <CardFelino key={4}/>
                <CardCanino key={5}/>
                <CardFelino key={6}/>
            </article>
        </section>
    );
}

export default MisMascotas;
