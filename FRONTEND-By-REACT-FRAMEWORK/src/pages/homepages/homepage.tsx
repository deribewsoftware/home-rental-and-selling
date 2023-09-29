import { useState } from "react";
import Card from "../../components/card/card";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../layouts/footer/footer";

import './homepages.css'
import Banner from "../../components/banner/banner";
import Dropdown from "../../components/dropdownButton/dropdown";
import { useLocation } from "react-router-dom";

import { SiGnuprivacyguard } from "react-icons/si";
import { FiLogIn } from "react-icons/fi";


function HomePage(){
  const label_Items=['Villa','Apartema','Condomnium']
  const [htype,sethtype]=useState<any>();
  const [house,gethouse]=useState<any>([])
  const navBarItemsLink=['/signup','/login'];
  const navBarItems=['Signup','Login']
  const navBarItemsLogo=[<SiGnuprivacyguard/>,<FiLogIn/>]
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("Home_Type");
  const [data, setData] = useState([]);
  const getmenu=localStorage.getItem("menu")
  let menu;
  if (getmenu) {
    menu = JSON.parse(getmenu);
    // Use the `menu` object here
  } else {
    // The `menu` value is not stored in `localStorage`
  }
  
  

var url=htype?`http://localhost:3336/house?Home_Type=${htype}`:`http://localhost:3336/house`;

  fetch(url).then((response) =>response.json()).then(data=>{
    gethouse(data)
    console.log(house);
    data.map((houseDta:any) =>(localStorage.setItem("houseId",houseDta.id)))
  // console.log(location)
})
  const getHousetype=(item:any)=>{
    sethtype(item)
   
  }
  return(
    <>
   
    <Navbar 
    nav_title_logo={navBarItemsLogo}
    nav_link={navBarItemsLink} 
    nav_title={navBarItems}

     hometype={[<Dropdown
     color="blue"
     label_items_links={['villa','/app/house','/cond']}
     label_items={label_Items}
     setdata={getHousetype}
      label="Home Type"/>,
      
      <Dropdown
        color="blue"
        label_items_links={['villa', '/app/house', '/cond', '/bhd', '/gond', '/ass']}
        label_items={['Addis Ababa', 'Hawasa', 'Adama', 'Bahdar', 'Gondar', 'Assela']}
        label="City" setdata={function () {
          throw new Error("Function not implemented.");
        } }/>]}/>
      
       {/* {menu? <Sidebar/>:''} */}
        
              
    <Banner/>
   
    
<div className="homepage">
  

{
  
house.map((name:any)=><Card url={`/lesseHouseDetail/${name.id}`} housetype={name.Home_Type} size={name.Size} price={name.Price} region={name.Region}  wereda={name.Wereda} city={name.City} subcity={name.Sub_City} door={name.Home_Photo.Door}
like={name.like}/>)}

</div>

    <Footer/>
    </>
  )
}
export default HomePage;