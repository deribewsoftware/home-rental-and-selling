import React, { ReactNode, useState } from 'react'
import Navbar from '../../../components/navbar/navbar'

import './User.css';
import Dropdown from '../../../components/dropdownButton/dropdown';
import { SiGnuprivacyguard } from 'react-icons/si';
import { FiLogOut } from 'react-icons/fi';
import { RiAdminFill } from 'react-icons/ri';
interface Profile{
 userdata: ReactNode;
 userRole:ReactNode;


}

const UserProfile = (props:Profile) => {
  const navBarItems=[ 'Your Profile','Signup', 'Logout']
  const navBarItemsLink=['/adminProfile','/signup','/logout'];
  
  const navBarItemsLogo=[<RiAdminFill/>,<SiGnuprivacyguard/>,<FiLogOut/>]

  return (
    <div className='profileData '>
      <Navbar
      nav_title_logo={navBarItemsLogo}
      nav_link={navBarItemsLink} 
      nav_title={navBarItems}
      hometype={[<Dropdown
      color='blue'
        label_items_links={['villa','/app/house','/cond']}
        label_items={['Villa','Apartema','Condomnium']}
         label="Home Type"/>,
         <Dropdown
         color='blue'
         label_items_links={['villa','/app/house','/cond','/bhd','/gond','/ass']}
         label_items={['Addis Ababa','Hawasa','Adama','Bahdar','Gondar','Assela']}
          label="City"/>]}
             
             />
   
      <div className='userCard'>
        <div className='user-profile'>
          {props.userdata}

{/* <div className='user-image'>
  <img src={profile} alt="" />
</div>
<div className='user-name'>name:</div>
<div className='user-name'>{firtName} {lastName}</div>
<div className='user-address'>Address:</div>
<div className='user-address'>{region}/{zone}/{wereda}/{city}</div>
<div className='user-phone'>Phone:</div>
<div className='user-phone'>{phone}</div>
<div className='user-email'>Email:</div>
<div className='user-email'>{email}</div> */}
        </div>

        <div className='user-role user-profile'>

          {props.userRole}



          
          {/* <div className='upload-house'>
          <Links  linkUrl="/uploadHouse">
        Upload House
      </Links>
          </div>
      
          <div className='upload-house'><Link className='links' to={"/lesserHouse/"+ lesserId}>Your Posted House</Link>  </div>
          <div className='upload-house'>Logout</div>
          <div className='upload-house'>Change Password</div> */}
        </div>
      </div>
      
      
    </div>
  )
}

export default UserProfile;
