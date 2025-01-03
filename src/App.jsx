import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Steps from './components/Steps/Steps'
import Project from './components/Project/Project'
import Estate from './components/Estate/Estate'
import Foooter from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <Steps />
      <Project />
      <Estate />
      <Foooter />
    </>
  )
}

export default App
