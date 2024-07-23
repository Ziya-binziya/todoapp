import './App.css'
import './bootstrap.min.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     <ToastContainer/>
    </>
  )
}

export default App
