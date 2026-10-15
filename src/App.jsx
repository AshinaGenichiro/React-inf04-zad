import { useState } from 'react'
import PowitanieDnia from './components/PowitanieDnia'
import KartaProduktu from './components/KartaProduktu'
import KartaFlimu from './components/KartaFilmu'
import Galeria from './components/Galeria'
import Glosowanie from './components/Glosowanie'
import WyborKoloru from './components/WyborKoloru'
import FormularzKontaktu from './components/FormularzKontaktu'
import FormularzLogowania from './components/FormularzLogowania'
import './App.css'

function App() {
  return (
    <>
    <PowitanieDnia/>
    <KartaProduktu name="Laptop" price={2500} isAvailable={true}/>
    <KartaProduktu name="Golf" price={67} isAvailable={false}/>
    <KartaFlimu PTitle="Star Wars" Pdirector="Pejda" Pgrade={6.7} PisReccomended= {true}/>
    <KartaFlimu PTitle="Golf" Pdirector="Pejda" Pgrade={6.7} PisReccomended= {false}/>
    <br></br>
    <hr></hr>
    <Galeria/>
    <br></br>
    <hr></hr>
    <Glosowanie/>
    <br></br>
    <hr></hr>
    <WyborKoloru/>
    <br></br>
    <hr></hr>
    <FormularzKontaktu/>
    <br></br>
    <hr></hr>
    <FormularzLogowania/>
    </>
  )
}

export default App
