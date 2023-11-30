import React from 'react'
import ropa from '../../data/pilcha.json'
import { Link } from "react-router-dom"

let preciof = ropa[0].precio - (ropa[0].precio * (ropa[0].descuento / 100));

const PubliTrending = () => {
  return (
    <Link to='/tienda_de_ropa/Producto'>
    <div className='minipubli'>
      <div className="minipublimg">
        <img src={ropa[0].url} alt="" />
      </div>
      <div className="detallemini">
        <h4>{ropa[0].nombre}</h4>
        <div className="precio">
          <span className="price">${preciof} </span>
          <span className="oldprice">${ropa[0].precio}</span>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default PubliTrending