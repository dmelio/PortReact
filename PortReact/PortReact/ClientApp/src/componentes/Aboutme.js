const Aboutme = () => {
    return (
        <div className="container-aboutme">
            <h1 className="titabout">Sobre mi</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="container">
                        <img class="img2port" alt="daniel melio foto perfil 2" />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="container">
                        <div className="contcirculos">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="exp">
                                        <div className="row">
                                            <span className="icon"><img className="iconExp" width="35px" height="35px" /></span>
                                        </div>
                                        <h1 className="aboutsectit">Experiencia</h1>
                                        <h2 className="aboutsecexp">3 años en soporte TI</h2>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="exp">
                                        <div className="row">
                                            <span className="icon"><img className="iconGit" width="35px" height="35px" /></span>
                                        </div>
                                        <h1 className="aboutsectit">Github</h1>
                                        <h2 className="aboutsecexp"><a href="https://github.com/dmelio">Perfil de github</a></h2>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="exp">
                                        <div className="row">
                                            <span className="icon"><img className="iconHob" width="35px" height="35px" /></span>
                                        </div>
                                        <h1 className="aboutsectit">Hobbies</h1>
                                        <h2 className="aboutsecexp">Skater, gamer y guitarrista</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="cont-presentacion">
                                <p>Mi nombre es Daniel Melio soy titulado de analista programador en DuocUC y también titulado de
                                    técnico medio en telecomunicaciones el liceo politécnico A-112, He trabajado aproximadamente 3 años
                                    realizando soporte informático de forma presencial y remota. Me gusta la informática y aprender de ella
                                    por lo que siempre estoy dispuesto a conocer nuevas tecnologías, herramientas, lenguajes, etc.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )

}

export default Aboutme;