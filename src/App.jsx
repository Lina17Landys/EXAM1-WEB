import { useState } from 'react'
import { planDeViajes } from './data'
import FoodCategory from './components/food/food'
import HotelCategory from './components/hotel/hotel'
//import './App.css'

function App() {

  return (
    <>
      <h1>Welcome to our travel agency</h1>
      <h2>Select your plans</h2>
      <FoodCategory alimentacion={planDeViajes.alimentacion} />
      <HotelCategory hoteles={planDeViajes.hoteles}/>
    </>
  )
}

export default App
