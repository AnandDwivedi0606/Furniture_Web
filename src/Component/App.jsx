import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Shop from './Shop'
import AboutUs from './AboutUs'
import Services from './Services'
import Blog from './Blog'
import ContactUs from './ContactUs'
import Profile from './Profile'
import Cart from './Cart'
import AccountEdit from './AccountEdit'
import Checkout from './Checkout'
import Thankyou from './Thankyou'
import Error from './Error'
import Adminhome from './Admin/Adminhome'
import Maincategory from './Admin/Maincategory/Maincategory'
import CreateMaincategory from './Admin/Maincategory/CreateMaincategory'
import UpdateMaincategory from './Admin/Maincategory/UpdateMaincategory'

export default function App() {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/aboutus' element={<AboutUs/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/contactus' element={<ContactUs/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/edit' element={<AccountEdit/>}/>

                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/thankyou' element={<Thankyou/>}/>
                
                <Route path='/admin' element={<Adminhome/>}/>
                <Route path='/admin/maincategory' element={<Maincategory/>}/>
                <Route path='/admin/maincategory/create' element={<CreateMaincategory/>}/>
                <Route path='/admin/maincategory/update/:id' element={<UpdateMaincategory/>}/>

                <Route path='/*' element={<Error/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  )
}



// #3b5d50






// for dummy server only for practise

// npm i -g json-server



// to start database in server first go to in that folder using below command 

// cd .\src\Assets\Database\



// then write this command to start server 

// json-server data.json --watch --port 8000
