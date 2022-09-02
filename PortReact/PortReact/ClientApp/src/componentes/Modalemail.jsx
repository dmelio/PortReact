
const Modalemail = (closeModal1) => {
    return (
       
             <div className="modal_container">
                 <form id="form">
                <h2 className="modal_title">Contactame</h2>
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input type="email" className="form-control" placeholder="correo" name="email" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Mensaje</label>
                    <textarea type="text" className="form-control" placeholder="Mensaje" name="message" required></textarea>
                </div>
                <input type="submit" className="btnsend" id="button" value="Enviar"/>
            </form>
            <div className="btnCont">
                <button onClick={closeModal1} className="modal_close">Cerrar</button>
            </div>
        </div>
        )
}

export default Modalemail;


