import React from "react";
import { ReactDOM } from "react";
import '../../components/producto.css';

function Producto() {
    return(
        <>
        <div className="promo_2">
            <div className="sliderPromo2">
                <div className="portada"></div>
            </div>
            <div className="tresPuntos">
                <div className="puntito"></div>
                <div className="puntoGrande2"></div>
                <div className="puntito"></div>
            </div>
        </div>
        <div className="menu">
            <div><h1>Heywa Hoodie</h1></div>
            <div className="color">
                <div className="whiteCircle"></div>
                <div className="grayCircle"></div>
                <div className="blackCircle"></div>
                <div className="blueCircle"></div>
            </div>
            <div className="barra">
                <div className="boton">S</div>
                <div className="boton">M</div>
                <div className="botonAzul">L</div>
                <div className="boton">XL</div>
                <div className="boton">XXL</div>
            </div>
            <div className="cart">Add to cart</div>
        </div>
        </>
    )
}

export default Producto;