import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

const Modals = () => {
    const [isOpenModal1,openModal1,closeModal1] = useModal(false)
    return (
        <div><h2>Modales</h2>
            <button onClick={openModal1 }>Contacto</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <form id="form">
                    <h2 className="modal_title">Contactame</h2>
                    <div className="mb-3">
                        <label className="form-label">Correo</label>
                        <input type="email" className="form-control" placeholder="correo" name="email" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mensaje</label>
                        <textarea type="text" className="form-control" placeholder="Mensaje" name="message" required></textarea>
                    </div>
                    <input type="submit" className="btnsend" id="button" value="Enviar" />
                </form>
            </Modal>
        </div>
     )
}

export default Modals;