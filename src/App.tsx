import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Classes from './components/Classes'
import Research from './components/Research'
import TimelinePages from './components/TimelinePage'

import { Link, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:id" element={<Classes />} />
        <Route path="/timeline" element={<TimelinePages />} />
        <Route path="/timeline:id" element={<TimelinePages />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
