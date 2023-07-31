import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import RegistrationPage from './pages/Users/RegistrationPage'
import LoginPage from './pages/Users/LoginPage'
import { getToken } from "./helper/SessionHelper";
import ProfilePage from './pages/Users/ProfilePage';
import SendOTPPage from './pages/Users/SendOTPPage';
import VerifyOTPPage from './pages/Users/VerifyOTPPage';
import CreatePasswordPage from './pages/Users/CreatePasswordPage';
import { Toaster } from 'react-hot-toast';
import FullscreenLoader from './components/MasterLayout/FullscreenLoader';
import Page404 from './pages/NotFound/Page404';
import DashboardPage from './pages/Dashboard/DashboardPage';
import CustomerCreateUpdatePage from './pages/Customer/CustomerCreateUpdatePage';
import CustomerListPage from './pages/Customer/CustomerListPage';
import CategoryCreateUpdatePage from './pages/Category/CategoryCreateUpdatePage';
import CategoryListPage from './pages/Category/CategoryListPage';

const App = () => {
  if (getToken()){
    return(
      <>
      <BrowserRouter>
       <Routes>
          <Route
              path="/brandCreateUpdate"
              element={<BrandCreateUpdatePage />}
          />
         <Route path="/brandList" element={<BrandListPage />} />
         <Route
              path="/categoryCreateUpdate"
              element={<CategoryCreateUpdatePage />}
            />
          <Route exact path="/categoryList" element={<CategoryListPage />} />
         <Route path="/customerCreateUpdate" element={<CustomerCreateUpdatePage />}/>
         <Route path="/customerList" element={<CustomerListPage />} />
         <Route
              path="/expenseCreateUpdate"
              element={<ExpenseCreateUpdatePage />}
            />
            <Route path="/expenseList" element={<ExpenseListPage />} />
         <Route
              path="/supplierCreateUpdate"
              element={<SupplierCreateUpdatePage />}
            />
          <Route path="/supplierList" element={<SupplierListPage />} />
      
         <Route path="/" element={<DashboardPage />} />
         <Route path="/Profile" element={<ProfilePage />} />
         <Route path="*" element={<Page404 />} />
       </Routes>
      </BrowserRouter>
      <FullscreenLoader />
        <Toaster />
      </>
    );
    }else{
     return(
      <>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<DashboardPage/>} />
        <Route path="/registration" element={<RegistrationPage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/sendOtp" element={<SendOTPPage />} />
        <Route path="/verifyOtp" element={<VerifyOTPPage />} />
        <Route path="/createPassword" element={<CreatePasswordPage />} />
        <Route path="*" element={<Page404 />} />
       </Routes>
      </BrowserRouter>
      <FullscreenLoader />
      <Toaster />
      </>
    );
  }
}

export default App