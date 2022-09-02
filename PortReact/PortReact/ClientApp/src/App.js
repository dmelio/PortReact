import "bootstrap/dist/css/bootstrap.min.css"
import "./Styles/main.css"
import Aboutme from "./componentes/Aboutme";
import Conocimientos from "./componentes/Conocimientos";
import Experiencia from "./componentes/Experiencia";
import Inicio from "./componentes/Inicio";
import { useModal } from "./hooks/useModal";
import Modals from "./componentes/Modals"



const App = () => {
    const [isOpenModal1,openModal,closeModal1] = useModal(false);
    return (
        <div className="margen">
            <Modals />
            <Inicio />
            <Aboutme />
            <Conocimientos />
            <Experiencia />
            
         </div>       
     )
}

export default App;

