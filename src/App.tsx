import './App.css'
import { Route, Routes } from 'react-router'
import Homepage from './feature/homepage/pages'
import TourPage from './feature/itinery/tour'
import LoginOverlay from './feature/auth/auth_ux/LoginOverlay/LoginOverlay'
import LoginForm from './feature/auth/auth_ux/LoginComponents/LoginForm'

function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/tour' element={<TourPage/>}/>
        <Route path='/login' element={<LoginOverlay/>}>
           <Route index element={<LoginForm isSignUp={false}/>}/>
           <Route path="signup" element={<LoginForm isSignUp={true}/>}/>
        </Route>
       </Routes>
    </div>
  )
}

export default App
