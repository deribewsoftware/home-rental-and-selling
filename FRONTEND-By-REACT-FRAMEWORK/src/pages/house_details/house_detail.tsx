import Navbar from "../../components/navbar/navbar";
import Footer from "../../layouts/footer/footer";
import door from '../.././assets/images/banner4.jpg'
import wall from '../.././assets/images/banner6.jpg'
import licence from '../.././assets/images/license.webp'
import { FaGithub,FaFacebook } from "react-icons/fa";
import { MdOutlineFavorite, MdReport,  } from  "react-icons/md";
import {AiOutlineComment } from "react-icons/ai";
import {IoMdCall} from "react-icons/io";
import {GrShare, GrShareOption} from "react-icons/gr";

import './house_detail.css';
import { ReactNode } from "react";
interface houseDetail{
 houseaction:ReactNode;
  houseType: string;
  size:string;
  price:string;
  region:string;
  wereda:string;
  city:string;
  sub_city:string;
  house_no:string;
  door:string;
  wall:string;
  floor:string;
  roof:string;
  kitchen:string;
  shower:string;
  toilet:string;
  license:string;
  kebele:string;
}
function House_Detail(props:houseDetail){
  return(
    <>
   
    <div className="grid">

    <div className="house_data">
    <div className="house_data-license">
      <img className="H-image" src={props.license} alt="" />
    </div>
    <div className="house_data-info-main">
    <div className="house_data-info-sub">
    <div className="house">House Type</div>
    <div className="house">Size</div>
    <div className="house">Price</div>
    <div className="house">Address</div>
    <div className="house">Kebele</div>
    <div className="house">House Number</div>
    </div>

    <div className="house_data-info-sub">
    <div className="house">{props.houseType}</div>
    <div className="house">{props.size}</div>
    <div className="house">{props.price}ETB/month</div>
    <div className="house">{props.region}/{props.wereda}/{props.city}/{props.sub_city}</div>
    <div className="house">{props.kebele}</div>
    <div className="house">{props.house_no}</div>
    </div>


    </div>
    </div>
    



    <div className="house-photo">

  <div className="house-photo-item">
    <img className="H-image" src={props.door} alt="" />
    <div className="house-images-name">Door</div>
    </div>
  <div className="house-photo-item">
    <img className="H-image" src={props.wall} alt="" />
    <div className="house-images-name">Wall</div>
    </div>
  <div className="house-photo-item">
    <img className="H-image" src={props.floor} alt="" />
    <div className="house-images-name">Floor</div>
    </div>
    <div className="house-photo-item">
    <img className="H-image" src={props.roof} alt="" />
    <div className="house-images-name">Roof</div>
    </div>
    <div className="house-photo-item">
    <img className="H-image" src={props.kitchen} alt="" />
    <div className="house-images-name">Kitchen</div>
    </div>
    <div className="house-photo-item">
    <img className="H-image" src={props.shower} alt="" />
    <div className="house-images-name">Shower</div>
    </div>
    <div className="house-photo-item">
    <img className="H-image" src={props.toilet} alt="" />
    <div className="house-images-name">Toilet</div>
    </div>
   


</div>






{props.houseaction}
    




</div>
    
    <Footer/>
    </>
  )
}
export default House_Detail;