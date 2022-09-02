const Modal = ({ children, isOpen, closeModal }) => {
    return (
        <article className={`modal ${isOpen && "is-open"}`}>
            <div className="modal_container">
                <button onClick={closeModal} className="modal_close">X</button>
                    {children}
            </div> 
        </article>   
    )
}

export default Modal;

