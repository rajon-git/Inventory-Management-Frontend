import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationPage from './pages/Users/RegistrationPage'
import LoginPage from './pages/Users/LoginPage'
import { getToken } from "./helper/SessionHelper";
import ProfilePage from './pages/Users/ProfilePage';
import SendOTPPage from './pages/Users/SendOTPPage';
import VerifyOTPPage from './pages/Users/VerifyOTPPage';
import CreatePasswordPage from './pages/Users/CreatePasswordPage';
import { Toaster } from 'react-hot-toast';
import FullscreenLoader from './components/MasterLayout/FullscreenLoader';

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path="/registration" element={<RegistrationPage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/sendOtp" element={<SendOTPPage />} />
        <Route path="/verifyOtp" element={<VerifyOTPPage />} />
        <Route path="/createPassword" element={<CreatePasswordPage />} />
     </Routes>
     </BrowserRouter>
     <FullscreenLoader/>
     <Toaster/>
    </>
  )
}

export default App