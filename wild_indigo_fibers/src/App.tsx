// imports
import { Route, Routes } from "react-router-dom"

// Page Setup
import SiteNav from "./components/SiteNav"
import Footer from "./components/Footer"

// Routes
import Home from "./pages/Home"
import About from "./pages/About"

function App() {

  return (
    <div>
      <SiteNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
