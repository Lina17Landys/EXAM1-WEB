import { useState } from 'react'
import { planDeViajes } from './data'
import FoodCategory from './components/food/food'
import HotelCategory from './components/hotel/hotel'
import Country from './components/country/country'
//import PaquetePrecios from './components/paquete/paquete'
//import './App.css'

function App() {

  return (
    <>
      <h1>Welcome to our travel agency</h1>
      <h2 className='sub'>Select your plans</h2>
      <FoodCategory alimentacion={planDeViajes.alimentacion} />
      <HotelCategory hoteles={planDeViajes.hoteles}/>
      <Country destinosdla={planDeViajes.destinosdla}/>

    </>
  )
}
//no funcionó <PaquetePrecios/>

export default App
