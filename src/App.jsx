import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import CabSearch from './components/CabSearch'
import Chat from './components/Chat'
import About from './components/About'
import Contact from './components/Contact'
import EditProfile from './components/EditProfile'
import ChangePw from './components/ChangePw'

import V_Register from './components/Vendor/V_Register'
import V_Login from './components/Vendor/V_Login'
import V_RideInquiry from './components/Vendor/V_Ride_Inquiry'
import V_Ride_Booking from './components/Vendor/V_Ride_Booking'
import AddRide from './components/Vendor/Add_Ride'
import MyVehicle from './components/Vendor/MyVehicle'

import U_Register from './components/User/U_Register'
import U_Login from './components/User/U_Login'
import U_Ride_Inquiry from './components/User/U_Ride_Inquiry'
import A_Login from './components/Admin/A_Login'
import A_Register from './components/Admin/A_Register'
import A_Sidebar from './components/Admin/A_Sidebar'
import Dashboard from './components/Admin/Dashboard'
import Main from './components/Admin/Main'
import UserList from './components/Admin/UserList'
import VendorList from './components/Admin/VendorList'
import Verification from './components/Admin/Verification'
import ContactList from './components/Admin/ContactList'
import ContactDetail from './components/Admin/ContactDetail'
import UserDetail from './components/Admin/UserDetail'
import VendorDetail from './components/Admin/VendorDetail'
import VendorVehicle from './components/Admin/VendorVehicle'
import RideDetail from './components/RideDetail'
import A_Profile from './components/Admin/A_Profile'
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/cab-search' element={<CabSearch/>}></Route>
          <Route path='/chat' element={<Chat/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/edit-profile' element={<EditProfile/>}></Route>
          <Route path='/change-password' element={<ChangePw/>}></Route>
          <Route path='/ride-detail' element={<RideDetail/>}></Route>

          <Route path='/v-register' element={<V_Register/>} ></Route>
          <Route path='/v-login' element={<V_Login/>} ></Route>
          <Route path='/v-ride-inquiry' element={<V_RideInquiry/>}></Route>
          <Route path='/v-ride-booking' element={<V_Ride_Booking/>  } ></Route>
          <Route path='/add-ride' element={<AddRide/>}></Route>
          <Route path='/my-vehicle' element={<MyVehicle/>}></Route>

          <Route path='/u-register' element={<U_Register/>} ></Route>
          <Route path='/u-login' element={<U_Login/>} ></Route>
          <Route path='/u-ride-inquiry' element={<U_Ride_Inquiry/>} ></Route>

          <Route path='/a-login' element={<A_Login/>}></Route>
          <Route path='/a-register' element={<A_Register/>}></Route>
          <Route path='/admin' element={<Main/>}>
            <Route index element={<Dashboard/>}></Route>
            <Route path='/admin/profile' element={<A_Profile/> }></Route>
            <Route path='/admin/user-list' element={<UserList/> }></Route>
            <Route path='/admin/user-detail' element={<UserDetail/> }></Route>
            <Route path='/admin/vendor-list' element={<VendorList/>}></Route>
            <Route path='/admin/vendor-detail' element={<VendorDetail/>}></Route>
            <Route path='/admin/vendor-vehicle' element={<VendorVehicle/>}></Route>
            <Route path='/admin/verification' element={<Verification/>}></Route>
            <Route path='/admin/contact-list' element={<ContactList/>}></Route>
            <Route path='/admin/contact-detail' element={<ContactDetail/>}></Route>
          </Route>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </>
  ) 
}

export default App
