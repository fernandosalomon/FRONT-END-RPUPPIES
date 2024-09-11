import styleDesarrolladores from "../css/desarroladores.module.css";
import maxiSoriano from "../assets/img/Pingu.jpg";

const Desarrollador = (props) => {
  return (
    <article className={styleDesarrolladores.cardDesarrolador}>
      <div className={styleDesarrolladores.headCardDesarrolador}>
        <div className={styleDesarrolladores.circuloHead}></div>
        <div className={styleDesarrolladores.contenedorImg}>
          <img
            className={styleDesarrolladores.imgDesarrollador}
            src={props.img}
            alt={props.nombre}
          />
        </div>
      </div>
      <div className={styleDesarrolladores.descripcionDev}>
        <h3>{props.nombre}</h3>
        <h4>{props.puesto}</h4>
        <p>
          <i className="fa-solid fa-screwdriver-wrench"></i> Herramientas:{" "}
          {props.descripcion}
        </p>
      </div>
      <div className={styleDesarrolladores.redesDev}>
        <a
          className={styleDesarrolladores.linkDev}
          href={props.linkedin}
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          className={styleDesarrolladores.linkDev}
          href={props.github}
          target="_blank"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          className={styleDesarrolladores.linkDev}
          href={props.porfolio}
          target="_blank"
        >
          <i className="fa-solid fa-briefcase"></i>
        </a>
      </div>
    </article>
  );
};

const Desarrolladores = () => {
  return (
    <section className={styleDesarrolladores.desarrolladores}>
      <article className={styleDesarrolladores.desarrolladoresTitulo}>
        <h3>Desarrolladores</h3>
      </article>
      <article className={styleDesarrolladores.contenedorDesarrolladores}>
        <Desarrollador
          img={maxiSoriano}
          nombre="Maximiliano Soriano"
          puesto="Desarrollador Full Stack"
          descripcion="html, css, js,react, mysql, mongoDB, java, php and python."
          linkedin="https://www.linkedin.com/in/maximiliano-soriano"
          github="https://github.com/MaxiSoriano70"
          porfolio="https://maximiliano-soriano-porfolio.netlify.app/"
        />
        <Desarrollador
          img={maxiSoriano}
          nombre="Fernando Salomón"
          puesto="Desarrollador Full Stack"
          descripcion="html, css, js,react, mysql, mongoDB, java, php and python."
          linkedin="https://www.linkedin.com/in/fernando-federico-salomon-880137237/"
          github="https://github.com/fernandosalomon"
        />
        <Desarrollador
          img={maxiSoriano}
          nombre="Gonzalo Mainardi"
          puesto="Desarrollador Full Stack"
          descripcion="html, css, js,react, mysql, mongoDB, java, php and python."
          linkedin="https://www.linkedin.com/in/gonzalo-mainardi"
          github="https://github.com/amc961"
        />
        <Desarrollador
          img={maxiSoriano}
          nombre="Marcos Bazan"
          puesto="Desarrollador Full Stack"
          descripcion="html, css, js,react, mysql, mongoDB, java, php and python."
          linkedin="https://www.linkedin.com/in/marcos-bazan"
          github="https://github.com/bazanmarcos84"
        />
      </article>
    </section>
  );
};

export default Desarrolladores;
