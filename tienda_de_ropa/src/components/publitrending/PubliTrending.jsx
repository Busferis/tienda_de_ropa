import React from 'react'
import ropa from '../../data/pilcha.json'

let preciof = ropa[0].precio - (ropa[0].precio * (ropa[0].descuento / 100));

const PubliTrending = () => {
  return (
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
  )
}

export default PubliTrending