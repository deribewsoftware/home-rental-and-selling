import Navbar from "../../components/navbar/navbar";
import banner2 from "../../assets/images/logo1.png";
import './header.css';
import Banner from "../../components/banner/banner";
import { ImSearch } from "react-icons/im";
import Dropdown from "../../components/dropdownButton/dropdown";

function Header(){
 
  return(
  <header className="header">
    <div className="logo">
    <div className="header-logo">z
      <img src={banner2} alt="" height={100} width={100} /> 
      </div> 
      <div className="header_title"><span className="Bete">Bete</span><span className="Home ">Home </span ><span className="Rental">Rental</span></div>
     <div className="search"> 
     <div className="input-group">
     <input className="search-item" type="search" placeholder="search..." />
     <div className="input-group-append search-button"><ImSearch size={30}/></div>
     </div>
     
 
     </div>
      </div>
    
    


  </header>
  )
}
export  default Header;