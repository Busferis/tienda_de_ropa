import React from 'react'
import TrendPromo from './TrendPromo'
import Buscador from './Buscador';
import './promo.css';

function Promo() {
  return (
    <div className='promo'>
        <Buscador />
        <TrendPromo />
    </div>
  )
}

export default Promo