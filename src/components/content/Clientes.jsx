import React from 'react'
import './Clientes.css'
import Festval from '../logos/festival-logotipo.png'
import Exercito_brasileiro from '../logos/exercito.jpg'
import Fab from '../logos/fab.jpg'
import Boni from '../logos/Boni.png'
import Caesb from '../logos/caesb.png'
import Sabesp from '../logos/sabesp.png'
import Copel from '../logos/copel.png'
import Cindacta from '../logos/cindacta2.png'
import Carrefour from '../logos/carrefour.jpg'
import Volvo from '../logos/volvo.jpg'
import Tenda from '../logos/tenda.png'
import Aldo from '../logos/aldo.jpeg'


const Clientes = () => {
    return (
        <div className="Principal">
            {/* <p>FESTVAL</p>
            <p>Exército brasileiro</p>
            <p>Força aérea brasileira</p>
            <p>Supermercados 3 irmãos Boni</p>
            <p>Caesb</p>
            <p>Sabesp</p>
            <p>Copel</p>
            <p>Cindacta II</p>
            <p>Carrefour</p>
            <p>Volvo</p>
            <p>Construtora TENDA</p>
            <p>Aldo</p> */}
            <div className="Logo">
                <img src={Festval} alt="" />
                <img src={Exercito_brasileiro} alt="" />
                <img src={Fab} alt="" />
                <img src={Boni} alt="" />
            </div>
            <div className="Logo">
            <img src={Caesb} alt="" />
            <img src={Sabesp} alt="" />
            <img src={Copel} alt="" />
            <img src={Cindacta} alt="" />
            </div>
            <div className="Logo">
            <img src={Carrefour} alt="" />
            <img src={Volvo} alt="" />
            <img src={Tenda} alt="" />
            <img src={Aldo} alt="" />
            </div>


        </div>
    )

}
export default Clientes