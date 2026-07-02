import './App.css'
import { Route, Routes } from 'react-router'
import Homepage from './feature/homepage/pages'
import TourPage from './feature/itinery/tour'

function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/tour' element={<TourPage/>}/> 
       </Routes>
    </div>
  )
}

export default App
