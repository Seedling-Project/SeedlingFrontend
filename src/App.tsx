import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Classes from './components/Classes'
import Research from './components/Research'

import { Link, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:id" element={<Classes />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
