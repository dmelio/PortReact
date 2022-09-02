import pdf from "../DanielMelioEscobar.pdf"
const Inicio = () => {
    return (
        <div className="Container-title">
            <div className="row">
                <h5>Hola, soy</h5>
                <h2>Daniel Melio Escobar</h2>
                <h5>Analista programador</h5>
                <div className="rowbtncv">
                    <a href={pdf}><button type="submit" className="btn btn-primary" id="btncv" download="DanielMelioEscobar.pdf"> Descargar CV</button></a>
                </div>
                <div class="rowFotoP">
                    <img class="img1port" alt="daniel melio foto perfil 1"/>
                </div>
            </div>
        </div>
    )
}

export default Inicio;