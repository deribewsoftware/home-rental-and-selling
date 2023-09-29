import { Link } from 'react-router-dom';
import './sidebar.css';
import { useState } from 'react';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { SiGnuprivacyguard } from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';
import Dropdown from '../dropdownButton/dropdown';
import { FaHome } from 'react-icons/fa';

const Sidebar = () => {
  const [dispaly,setdisplay]=useState(true)
  const closeButton=()=>{
   setdisplay(false);
  }
  return (
    // <Link className='mobile-navbar' to={'/'}>Home</Link>
    <>
    
      {dispaly?<div className='side-bar d-flex flex-column position-absolute'>
        
      <div className='button-float'> <button onClick={closeButton} className='btn btn-close '></button></div>
      <Link to={'/'} className='side-bar-item'><span className='side-bar-logo'><AiFillHome/></span> Home</Link>

   
  <span className='side-bar-item'><Dropdown
  hover_color='white'
  color='white'
  label='House Type'
  label_items={['Villa','Apertemma','Condomnium']}
  label_items_links={['Villa','Apertemma','Condomnium']}
  /></span>

      <Link to={'/signup'} className='side-bar-item'><span className='side-bar-logo'><SiGnuprivacyguard/></span>Signup</Link>

      <Link to={'/login'} className='side-bar-item'><span className='side-bar-logo'><FiLogIn/></span>Login</Link>
      <Link to={'/'} className='side-bar-item'><span className='side-bar-logo'><FiLogOut/></span>Logout</Link>
     
    </div>:""}</>

    
  )
}

export default Sidebar;
function closeButton() {
  throw new Error('Function not implemented.');
}

