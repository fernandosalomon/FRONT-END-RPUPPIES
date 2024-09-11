import imagenCartel404 from '../assets/img/error-404-cartel.png';
import imagen404 from '../assets/img/error-404.png';

const Error404 = () => {
    return (
        <>
            <div className="container-fluid d-flex align-items-center justify-content-center flex-column py-4">
                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <h1 className="text-center me-3">Error</h1>
                    <img src={imagenCartel404} alt="error-404" style={{ width: '60px', height: '60px' }} />
                </div>
                <img className="m-4" src={imagen404} alt="error-404" style={{ width: '200px', height: '200px' }} />
                <button className="btn btnPersonalized1">Volver al inicio</button>
            </div>
        </>
    );
}

export default Error404;
