// import './App.css'
import Landing from "./views/principal/Landing"
import { BrowserRouter, Outlet } from "react-router-dom";
import {Link, Route, Routes} from 'react-router-dom'
import Producto from "./views/producto/Producto";

function App() {

  return (
    <>
      <BrowserRouter>
        <Outlet />
      <Routes>
            <Route path="/tienda_de_ropa/Producto" element={<Producto />} />
            <Route index path="/tienda_de_ropa" element={<Landing />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
