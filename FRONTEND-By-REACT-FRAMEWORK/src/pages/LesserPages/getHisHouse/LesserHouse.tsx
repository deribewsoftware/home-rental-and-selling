import { useState } from "react";
import Navbar from "../../../components/navbar/navbar";
import Card from "../../../components/card/card";
import Footer from "../../../layouts/footer/footer";
import { useParams } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import Dropdown from "../../../components/dropdownButton/dropdown";



function LesserHouse(){


const navBarItemsLink=['/Lesserprofile','/uploadHouse','/signup','/login'];
const navBarItems=["Your Profile","All Your House",'Signup','Logout']
const navBarItemsLogo=[<SiGnuprivacyguard/>,<FaHome/>,<SiGnuprivacyguard/>,<FiLogOut/>]

  const [house,gethouse]=useState<any>([])
  const {lesserId}=useParams();
  const [hasData ,sethasData]=useState<boolean>();
  
  


  fetch(`http://localhost:3336/house/lesser/${lesserId}`,
 {
  headers:{
  
    Authorization:`Bearer ${localStorage.getItem('authToken')}`
  }
 }
  ).then((response) =>response.json()).then(data=>{
    if(data.length==0){
      sethasData(false);
    }
    else{
      sethasData(true);
    }
    gethouse(data)
    data.map((houseDta:any) =>(localStorage.setItem("houseId",houseDta.id)))
  console.log(data)})
  return(
    <>
    <Navbar
    nav_title_logo={navBarItemsLogo}
     nav_link={navBarItemsLink} nav_title={navBarItems}
     hometype={[<Dropdown
      color="blue"
      label_items_links={['villa','/app/house','/cond']}
      label_items={['Villa','Apartema','Condomnium']}
       label="Home Type"/>,
       <Dropdown
       color="blue"
       label_items_links={['villa','/app/house','/cond','/bhd','/gond','/ass']}
       label_items={['Addis Ababa','Hawasa','Adama','Bahdar','Gondar','Assela']}
        label="City"/>]}
     
     
     />
<div className="row gap-3 justify-content-around m-3">
{hasData? house.map((name:any)=><Card url={`/lesseHouseDetail/${name.id}`} housetype={name.Home_Type} size={name.Size} price={name.Price} region={name.Region}  wereda={name.Wereda} city={name.City} subcity={name.Sub_City} door={name.Home_Photo.Door
}/>):<h1> No Houses Posted</h1>}

</div>

    <Footer/>
    </>
  )
}
export default LesserHouse;