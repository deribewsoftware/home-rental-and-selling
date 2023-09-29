import './card.css';
import house from '../.././assets/images/bestHouse.jpg'

import { FaGithub,FaFacebook } from "react-icons/fa";
import { FcLike,FcShare } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { MdOutlineFavorite } from 'react-icons/md';
interface houseList{
  url:string;
  door:string;
  housetype:string;
  size:string;
  price:string;
  region:string;
  wereda:string;
  city:string;
  subcity:string;
  like:number;
}

function Card(props:houseList){
return (
  <Link className='links' to={props.url}>
  <div className=" Card ">
    
   
    <img className='house-image' src={props.door} alt="" />
    <div className='Card-body'>
     
      <div className='price-size'>
        <div className='price'>{props.price} ETB/Month</div>

        <div className='Card-title'>
       {props.housetype}
      </div>
        <div className='size'>Size:{props.size}m2</div>
      </div>
      <div className='house-location'>
        <div className='address'>Address:</div>
        <div className='address-value'>{props.region}-{props.wereda}-{props.city}-{props.subcity}</div>

      </div>
      <div className='price-size'> <div> <MdOutlineFavorite size={20} color={props.like?"red":"white"} />
      <p className='num-likes'>{props.like} likes</p>
      </div>  
      <div className='click-here'>Chick here to see details</div>
      
       <div> <FcShare size={20}/> </div></div>

    </div>
   
      
      </div>
      
        
      
      
  
    </Link>
    
)
}
export default Card;