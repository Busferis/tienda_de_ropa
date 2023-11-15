import React from 'react'
import '../components/categories.css'

function Categories() {
  return (
    <div className='categories'>
      <div className="title">
        <h3>Categories</h3>
        <a href="#">Show All</a>
      </div>
      <div className="bloques">
        <div className="bloque">
          <span className="material-icons-outlined">face_4</span>
          <div className="categorias">
            Woman
          </div>
          <div className="categorias2">
            (728 items)
          </div>
          <span className="material-icons-outlined">arrow_forward_ios</span>
        </div>
        <div className="bloque">
          <span className="material-icons-outlined">face</span>
          <div className="categorias">
            Man
          </div>
          <div className="categorias2">
            (536 items)
          </div>
          <span className="material-icons-outlined">arrow_forward_ios</span>
        </div>
      </div>
    </div>
  )
}

export default Categories