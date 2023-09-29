import { Link } from 'react-router-dom';
import HomePage from '../../pages/homepages/homepage';
import './navbar.css'
import { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import banner2 from "../../assets/images/logo1.png";

import { FaHome, FaSearch } from 'react-icons/fa';
import { FiMenu} from 'react-icons/fi';
import Sidebar from '../sidebar/Sidebar';




interface navProp{
  
  nav_link: string[];
  nav_title: string[];
  nav_title_logo: ReactNode[];
  hometype:ReactNode[];
}
function Navbar(props:navProp){

 

  const [scrollPosition, setScrollPosition] = useState(0);
  const [menu,setmenu] = useState(false);
  localStorage.setItem('menu',JSON.stringify(menu));

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const menuButton=()=>{
    if (menu==false) {
      setmenu(true);
    }
    else{
      setmenu(false);
    }
  }

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  
  
  
    
  return(
    // ${ scrollPosition? 'show':'defaulBar'}
    <div className={` navigation show`}>
      <div className='Hnavbar'>
      <button onClick={menuButton} className='btn btn-none menu-btn'><FiMenu color='white' size={24}/></button>
      <div className="header-logo">
      <img className='image_logo' src={banner2} alt="" height={60} width={60} /> 
      <div className="header_title"><span className="Bete">Bete</span><span className="Home ">Home </span ><span className="Rental">Rental</span></div>
      </div> 

     <Link  to={'/'} className=' navbar-item ' ><span><FaHome/> </span>Home </Link>
      {props.hometype.map((dropbtn, index) => <div className='navbar-item-btn '>{dropbtn}</div>)}
    
     


{props.nav_link.map((url_link,index)=> <Link className='navbar-item' to={url_link}><span>{props.nav_title_logo[index]}</span> {props.nav_title[index]}</Link>)}
    

    
    <div>
      <input className='search-button' type="search" placeholder='search...' />
      <button className='btn btn-none search-btn'><FaSearch color='white' size={24}/></button>

    </div>
    
    </div>

 {menu? <Sidebar/>:''}

    </div>
  )
  
    

}
export default Navbar;