import React, { useState } from 'react'
import Navbar from '../../../components/navbar/navbar'
import './LesserProfile.css'
import profile from '../../.././assets/images/profile.png'

import { Link } from 'react-router-dom';
import Links from '../../../components/Links/Links';
import UserProfile from '../../homepages/UserPofile/UserProfile';

const LesserProfile = () => {
  const [firtName,setFirstName]=useState()
const [lastName,setLastName]=useState()
const [phone,setPhone]=useState()
const [region,setRegion]=useState()
const [wereda,setWereda]=useState()
const [zone,setZone]=useState()
const [city,setCity]=useState()
const [username,setUsername]=useState()
const [lesserId,setlesserId]=useState()
const [email, setEmail]=useState();

  
fetch("http://localhost:3336/lesser/detail",{
  method: 'GET',
  headers: {
    Authorization:`Bearer ${localStorage.getItem('authToken')}`
  },
}).then((response) => response.json()).then(data=>{
  setFirstName(data['First_Name'])
  setLastName(data['Last_Name'])
  setPhone(data['Phone_Number'])
  setCity(data['City'])
  setRegion(data['Region'])
  setZone(data['Zone'])
  setEmail(data['Email'])
  setWereda(data['Wereda'])
  setlesserId(data['id']);
  localStorage.setItem("lesserId",data['id'])
  console.log(data['id'])
}).catch((error) => console.error(error));
  return (


<>
<UserProfile
userdata={
  <>
  <div className='user-image'>
       <img src={profile} alt="" />
       </div>
  <div className='user-name'>name:</div>
 <div className='user-name'>{firtName} {lastName}</div>
 <div className='user-address'>Address:</div>
 <div className='user-address'>{region}/{zone}/{wereda}/{city}</div>
 <div className='user-phone'>Phone:</div>
<div className='user-phone'>{phone}</div>
 <div className='user-email'>Email:</div>
<div className='user-email'>{email}</div>

  </>
 
}

userRole={<>




         <div className='upload-house'>
         <Links  linkUrl="/uploadHouse">
       Upload House
      </Links>
          </div>

          <div className='upload-house'>
         <Links  linkUrl={"/lesserHouse/"+lesserId}>
       Your Posted House
      </Links>
          </div>

          <div className='upload-house'>
         <Links  linkUrl="/uploadHouse">
       Logout
      </Links>
          </div>

          <div className='upload-house'>
         <Links  linkUrl={"/lesserHouse/"+lesserId}>
       Change Password
      </Links>
          </div>





  </>}
/>
</>

  )
}

export default LesserProfile
