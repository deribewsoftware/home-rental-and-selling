import { ReactNode, useState } from 'react';
import './dropdown.css'
import Button from '../button/button';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
interface dropdown{
  label:string;
  label_items:string[];
  label_items_links:string[];
  label_items_links_logo?:ReactNode;
  color?:string;
  hover_color?:string;
  setdata:(value:any)=>any;

}

const Dropdown = (props:dropdown) => {
 const  [isShow,setshow]=useState<boolean>(false)
 
 const toggleDropdown = () => {
  setshow(!isShow);
};



  return (
    <>
     <div className='dropdown-container'>
     
     
      
    
     <button  onClick={toggleDropdown} 
            
              
      className={`  dropdown-button  ${props.color}`}  style={{
        fontSize: "18px",
        fontWeight: "500",
       
         fontFamily: 'Roboto, sans-serif' }}> <span className='side-bar-logo'>{props.label_items_links_logo}</span>{props.label}{isShow? <AiFillCaretUp size={20}/>:<AiFillCaretDown size={20}/>}</button> 
     
      {isShow &&(<div onClick={toggleDropdown}  className={`dropdown-items-container ${isShow? 'show':'hide'}`} >
{props.label_items.map((links,index)=><button key={index}  onClick={()=>{props.setdata(links)}} className='link btn btn-none pe-5 ps-5 m-0' >{links}</button>)}
        
        
       
      </div>
      )}
     </div>
    </>
  )
}

export default Dropdown;
