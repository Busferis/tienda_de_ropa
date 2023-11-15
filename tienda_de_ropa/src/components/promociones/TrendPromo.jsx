import React from 'react'
import './trendpromo.css';
import ropa from '../../data/pilcha.json';

let preciof = ropa[0].precio - (ropa[0].precio * (ropa[0].descuento / 100));

const TrendPromo = () => {
  return (
    <>
        <div className='sliderPromo'>
            <div className="promo1">
                <img src={ropa[0].url} alt="" className="imgpromo" />
                <div className="detallepromo">
                    <h4 className='op40'>Recomendaciones</h4>
                    <h1>{ropa[0].nombre}</h1>
                    <div className="precio">
                        <span className="price">${preciof} </span>
                        <span className="oldprice">${ropa[0].precio}</span>
                    </div>
                </div>
            </div>
            {/* <div className="promo2">
                <img src="" alt="" className="imgpromo" />
                <div className="detallepromo">
                    <h3>Recomendaciones</h3>
                    <h2>Women Blue Denim</h2>
                    <span className="price">$3.99</span>
                </div>
            </div> */}
        </div>
        <div className="tres_puntitos">
            <div className="punto"></div>
            <div className="puntoGrande"></div>
            <div className="punto"></div>
        </div>
    </>
  )
}

export default TrendPromo