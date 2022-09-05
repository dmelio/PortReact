import { useModal } from "../hooks/useModal";
import emailjs from "emailjs-com";
import Modal from "./Modal";

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    function enviarEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_fks96pm', 'template_0a11r99', e.target,'sYSNjIdQkdwDqcmoV').then(res => {
            alert("Se ha enviado correctamente.");
            console.log(res);
        })
    }
    return (
        <header>
            <nav id="menu">
                <ul>
                    <li type="circle"><a href="https://github.com/dmelio"><img className="imgnavgit"
                        width="40px"
                        height="40px" alt=""/></a>
                    </li>
                    <li type="circle"><a onClick={openModal1} href="#"><img className="imgnavmail"
                        width="40px"
                        height="40px" alt="" /></a>
                        
                    </li>
                    <li type="circle"><a href="https://wa.me/56961772339"><img className="imgnavwsp"
                        width="40px"
                        height="40px" alt=""/></a>
                    </li>
                    <li type="circle"><a href="https://mobile.twitter.com/danielplao"><img className="imgnavtw"
                        width="40px"
                        height="40px" alt=""/></a>
                    </li>   
                </ul>
            </nav>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1} enviarEmail={enviarEmail}>
                <form id="form" onSubmit={enviarEmail}>
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
        </header>

     )
}

export default Modals;