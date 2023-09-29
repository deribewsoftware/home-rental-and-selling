import { useState } from 'react'

import './App.css'

import Header from './layouts/header/header';

import HomePage from './pages/homepages/homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import UploadHouse from './pages/LesserPages/uploadHouse/UploadHouse';
import LesserProfile from './pages/LesserPages/LesserProfile/LesserProfile';
import LesserHouse from './pages/LesserPages/getHisHouse/LesserHouse';
import LesseHouseDetail from './pages/LessePages/LesseHouseDetail';
import AdminProfile from './pages/adminPages/AdminProfile';
import UnApprovedHouses from './pages/adminPages/UnApprovedHouses';
import DetailUnapprovedHouse from './pages/adminPages/DetailUnapprovedHouse';

function App() {
  const [count, setCount] = useState(0)
 

  return (

    <BrowserRouter>
    <Routes>
      <Route path='/unApprovedHouseDetail/:unhouseid' element={<DetailUnapprovedHouse/>}/>
    <Route path='/adminProfile' element={<AdminProfile/>}/>

<Route path='/unapprovedHouses' element={<UnApprovedHouses/>}/>






    
      <Route path='/lesserHouse/:lesserId' element={<LesserHouse/>}/>
    <Route path='/Lesserprofile' element={<LesserProfile/>}/>
      <Route path='/uploadHouse' element={<UploadHouse/>}>



      </Route>
    <Route path="/" element={<HomePage /> } />
       <Route path='/home' element={<HomePage/>}/>
       <Route  path='/lesseHouseDetail/:houseid' element={<LesseHouseDetail/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    // <div className="App">
     
    //  <HomePage/>
     
    // </div>
  )
}

export default App
