import React from "react";
import { ReactDOM } from "react";
import '../../components/producto.css';
import ropa from '../../data/pilcha.json';
import { Link } from "react-router-dom"

function Producto() {
    return(
        <>
        <div className="barra2">
            <Link to='/tienda_de_ropa'>
                <span className="material-icons-outlined icono">arrow_back</span>
            </Link>
            <span className="material-icons-outlined icono">shopping_cart</span>
        </div>
        <div className="promo_2">
            <div className="portada">
                <div className="tresPuntos">
                    <div className="puntito"></div>
                    <div className="puntoGrande2"></div>
                    <div className="puntito"></div>
                </div>
                <img src={ropa[1].url} alt="" />
            </div>
        </div>
        <div className="menu">
            <h1 className="black">Heywa Hoodie</h1>
            <div className="precios">
                <span className="precio2">$30.99</span>
                <span className="precio3">$44.99</span>
            </div>
            <span className="black">Color</span>
            <div className="color">
                <div className="whiteCircle"></div>
                <div className="grayCircle"></div>
                <div className="blackCircle"></div>
                <div className="blueCircle"></div>
            </div>
            <span className="black">Size</span>
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