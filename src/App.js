import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationPage from './pages/Users/RegistrationPage'
import LoginPage from './pages/Users/LoginPage'
import { getToken } from "./helper/SessionHelper";

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path="/registration" element={<RegistrationPage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App