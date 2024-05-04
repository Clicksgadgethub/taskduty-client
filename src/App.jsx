import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import RootLayout from './layout/RootLayout'
import { Tasks } from './pages/alltask/Tasks'
import NewTask from './pages/newtask/NewTask';
import SignUp from './auth/Signup';
import Signin from './auth/Signin';
import toast, { Toaster } from 'react-hot-toast';
import ClientTask from './component/navbar/ClientTask'
import Edittask from './pages/edittask/Edittask'

function App() {

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/alltask' element={<Tasks/>}/>
        <Route path='/newtask' element={<NewTask/>}/>
        <Route path='/clienttask/:userId' element={<ClientTask/>}/>
        <Route path='/edittask/:userId' element = {<Edittask/>}/>
        </Route>
        {/* sign in and sign up route */}
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    <Toaster/>
    </>

  )
}

export default App

// npm i react-router-dom