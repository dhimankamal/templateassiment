import '../node_modules/bootstrap/dist/css/bootstrap.css'

import './App.css'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Admmission from './pages/Admmission'
import Pages from './pages/Pages'
import News from './pages/News'
import Contact from './pages/Contact'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BootemFooter from './components/BootomFooter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<Aboutus />} />
          <Route exact path='/admmission' element={ <Admmission />} />
          <Route exact path='/pages' element={ <Pages />} />
          <Route exact path='/news' element={ <News />} />
          <Route exact path='/contact' element={ <Contact />} />
         
        </Routes>
        <Footer />
        <BootemFooter />
      </div>
    </Router>
  )
}

export default App
