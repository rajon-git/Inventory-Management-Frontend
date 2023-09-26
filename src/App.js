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
import Page404 from './pages/NotFound/Page404';
import DashboardPage from './pages/Dashboard/DashboardPage';
import CustomerCreateUpdatePage from './pages/Customer/CustomerCreateUpdatePage';
import CustomerListPage from './pages/Customer/CustomerListPage';
import CategoryCreateUpdatePage from './pages/Category/CategoryCreateUpdatePage';
import CategoryListPage from './pages/Category/CategoryListPage';
import ExpenseReportPage from './pages/Report/ExpenseReportPage';
import SaleReportPage from './pages/Report/SalesReportPage';
import ReturnReportPage from './pages/Report/ReturnReportPage';
import PurchaseReportPage from './pages/Report/PurchaseReportPage';
import SupplierListPage from './pages/Supplier/SupplierListPage';
import SupplierCreateUpdatePage from './pages/Supplier/SupplierCreateUpdatePage';
import SalesCreateUpdatePage from './pages/Sales/SalesCreateUpdatePage';
import SalesListPage from './pages/Sales/SalesListPage';
import ReturnListPage from './pages/Return/ReturnListPage';
import ReturnCreateUpdatePage from './pages/Return/ReturnCreateUpdatePage';
import PurchaseListPage from './pages/Purchase/PurchaseListPage';
import PurchaseCreateUpdatePage from './pages/Purchase/PurchaseCreateUpdatePage';
import ProductListPage from './pages/Product/ProductListPage';
import ProductCreateUpdatePage from './pages/Product/ProductCreateUpdatePage';
import ExpenseTypeListPage from './pages/ExpenseType/ExpenseTypeListPage';
import ExpenseTypeCreateUpdatePage from './pages/ExpenseType/ExpenseTypeCreateUpdatePage';
import ExpenseListPage from './pages/Expense/ExpenseListPage';
import ExpenseCreateUpdatePage from './pages/Expense/ExpenseCreateUpdatePage';
import BrandCreateUpdatePage from './pages/Brand/BrandCreateUpdatePage';
import BrandListPage from './pages/Brand/BrandListPage';

const App = () => {
  if (getToken()){
    return(
      <>
      <BrowserRouter>
       <Routes>
          <Route path="/brandCreateUpdate" element={<BrandCreateUpdatePage />}/>
         <Route path="/brandList" element={<BrandListPage />} />
         <Route path="/categoryCreateUpdate" element={<CategoryCreateUpdatePage />}/>
        <Route exact path="/categoryList" element={<CategoryListPage />} />
         <Route path="/customerCreateUpdate" element={<CustomerCreateUpdatePage />}/>
         <Route path="/customerList" element={<CustomerListPage />} />

         <Route path="/expenseCreateUpdate" element={<ExpenseCreateUpdatePage />}/>
         <Route path="/expenseList" element={<ExpenseListPage />} />

         <Route path="/expenseTypeCreateUpdate" element={<ExpenseTypeCreateUpdatePage />}/>
         <Route path="/expenseTypeList" element={<ExpenseTypeListPage />} />

         <Route path="/productCreateUpdate" element={<ProductCreateUpdatePage />}/>
         <Route path="/productList" element={<ProductListPage />} />

         <Route path="/purchaseCreateUpdate" element={<PurchaseCreateUpdatePage />} />
         <Route path="/purchaseList" element={<PurchaseListPage />} />

         <Route path="/returnCreateUpdate" element={<ReturnCreateUpdatePage />}/>
         <Route path="/returnList" element={<ReturnListPage />} />

         <Route  path="/salesCreateUpdate" element={<SalesCreateUpdatePage />} />
         <Route path="/salesList" element={<SalesListPage />} />

         <Route path="/supplierCreateUpdate"  element={<SupplierCreateUpdatePage />} />
         <Route path="/supplierList" element={<SupplierListPage />} />

         <Route path="/purchaseReport" element={<PurchaseReportPage />} />
         <Route path="/returnReport" element={<ReturnReportPage />} />
         <Route path="/saleReport" element={<SaleReportPage />} />
         <Route path="/expenseReport" element={<ExpenseReportPage />} />
      
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