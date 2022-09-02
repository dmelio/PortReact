const Inicio = () => {
    return (
        <div className="Container-title">
            <div className="row">
                <h5>Hola, soy</h5>
                <h2>Daniel Melio Escobar</h2>
                <h5>Analista programador</h5>
                <div className="rowbtncv">
                    <a href="doc/Daniel Melio Escobar.pdf"><button type="button" className="btn btn-primary" id="btncv">Descargar CV</button></a>
                </div>
                <div class="rowFotoP">
                    <img class="img1port" alt="daniel melio foto perfil 1"/>
                </div>
            </div>
        </div>
    )
}

export default Inicio;