/* eslint-disable react/prop-types */
import '../css/card.css'
import downarrow from '../css/downArrow.png'
import logo from '../css/Icon-Small.png'

export default function Card(props) {
    return <div className="card">

        <div className="CardHeader">
            <div className="tittle"> <h1>{props.cardname}</h1> </div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </div>

        <div className="center">
            {props.center}
        </div>

        <div className="expandButton">
            <button><p>more</p> <img src={downarrow} alt="arrow" /> </button>
        </div>
    </div>
}