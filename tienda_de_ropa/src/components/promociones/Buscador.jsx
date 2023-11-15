import React from 'react'
import './buscador.css'

const Buscador = () => {
  return (
    <div className='buscador'>
        <input type="submit" value="search" className="material-icons-outlined white" />
        <input type="search" placeholder="¿Que estas haciendo hoy?" />
    </div>
  )
}

export default Buscador