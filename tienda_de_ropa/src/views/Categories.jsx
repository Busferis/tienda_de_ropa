import React from 'react'
import '../components/categories.css'

function Categories() {
  return (
    <>
      <div className="title">
        <div>Categories</div>
        <a href="#">Show All</a>
      </div>
      <div className="bloques">
        <div className="bloque">
          <div className="categorias">
            Woman
          </div>
          <div className="categorias2">
            (728 items)
          </div>
        </div>
        <div className="bloque">
          <div className="categorias">
            Man
          </div>
          <div className="categorias2">
            (536 items)
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories