//import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import VehicleInfoForm from "./pages/VehicleInfoForm"
import Home from './pages/Home'

function App() {

  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={<VehicleInfoForm />} />
      </Routes>
     </Router>
    </div>
  )
}

export default App
