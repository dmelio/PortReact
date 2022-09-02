const Experiencia = () => {
    return (
        <div className="explab">
            <h1 className="titexp">Experiencia laboral</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="box-exp">
                        <div className="rowtit">
                            <h1 className="exptit">
                                Analista programador
                            </h1>
                        </div>
                        <div className="row">
                            <h4 className="empresatit">Caja 18</h4>
                            <div className="textexp">
                                <p>En este cargo realice las siguientes tareas:</p>

                                <ul className="listTareas">
                                    <li type="circle">Planificación de migración de servidores y levantamiento de servicios activos</li>
                                    <li type="circle">Revisión de DTS en SQLServer</li>
                                    <li type="circle">Creación de manuales de usuario para software</li>
                                    <li type="circle">Crear diagrama de componentes para visualizar el estado de los servicios en
                                        producción</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box-exp">
                        <div className="rowtit">
                            <h1 className="exptit">
                                Tecnico de soporte
                            </h1>
                        </div>
                        <div className="row">
                            <h4 className="empresatit">Entel call center</h4>
                            <div className="textexp">
                                <p>En este cargo realicé las siguientes tareas:</p>
                                <ul className="listTareas">
                                    <li type="circle">Atención telefónica a personal de Entel</li>
                                    <li type="circle">Resolver incidencias en línea o derivación a área correspondiente</li>
                                    <li type="circle">Seguimiento de incidencias</li>
                                    <li type="circle">Instalar, configurar y mantener software de los usuarios</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box-exp">
                        <div className="rowtit">
                            <h1 className="exptit">
                                Tecnico de soporte
                            </h1>
                        </div>
                        <div className="row">
                            <h4 className="empresatit">Molymet</h4>
                            <div className="textexp">
                                <p>En este cargo realicé las siguientes tareas:</p>
                                <ul className="listTareas">
                                    <li type="circle">Atención vía telefónica y presencial a personal de la empresa</li>
                                    <li type="circle">Reparación de hardware (PC, impresoras, teléfonos) </li>
                                    <li type="circle">Instalación de equipos</li>
                                    <li type="circle">Mantenimiento de teléfonos ip</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        )
}

export default Experiencia;