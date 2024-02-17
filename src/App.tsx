import Home from './components/Home'
import Prototype from './components/NavBarPrototype'
import Footer from './components/Footer'
import Classes from './components/Classes'

import { Link, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Prototype />
      <Routes>
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:id" element={<Classes />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
