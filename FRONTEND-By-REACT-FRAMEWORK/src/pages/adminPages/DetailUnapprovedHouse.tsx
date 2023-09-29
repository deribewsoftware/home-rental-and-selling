import React, { useEffect, useState } from 'react'
import House_Detail from '../house_details/house_detail';
import HouseActions from '../house_details/HouseActions';
import { GrShareOption } from 'react-icons/gr';
import { MdOutlineFavorite, MdReport } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
import { AiOutlineComment } from 'react-icons/ai';
import Button from '../../components/button/button';
import Navbar from '../../components/navbar/navbar';
import { useParams } from 'react-router-dom';
import Dropdown from '../../components/dropdownButton/dropdown';
import { FiLogOut } from 'react-icons/fi';
import { SiGnuprivacyguard } from 'react-icons/si';

const DetailUnapprovedHouse = () => {
  const navBarItems=[ 'Your Profile','Signup', 'Logout']
  const navBarItemsLink=['/adminProfile','/signup','/logout'];
  
  const navBarItemsLogo=[<SiGnuprivacyguard/>,<SiGnuprivacyguard/>,<FiLogOut/>]


  const [type,settype]=useState<any>()
  const [size,setsize]=useState<any>()
  const [price,setprice]=useState<any>()
  const [region,setregion]=useState<any>()
  const [wereda,setwereda]=useState<any>()
  const [city,setcity]=useState<any>()
  const [sub_city,setsub_city]=useState<any>()
  const [kebele,setkebele]=useState<any>()
  const [door,setdoor]=useState<any>()
  const [wall,setwall]=useState<any>()
  const [floor,setfloor]=useState<any>()
  const [roof,setroof]=useState<any>()
  const [kitchen,setkitchen]=useState<any>()
  const [shower,setshower]=useState<any>()
  const [toilet,settoilet]=useState<any>()
  const [license,setlicense]=useState<any>()
  const [home_no,sethome_no]=useState<any>()
  const {unhouseid}=useParams();

const makeApproved=(id:string)=>{
  fetch(`http://localhost:3336/house/${id}/admin`,{
    method:"PATCH",
    headers:{
      "Content-Type": "application/json",
        'Accept': 'application/json',
      Authorization:`Bearer ${localStorage.getItem("authToken")}`
    },
    body: JSON.stringify({
      Approval_status:true
    })
  }).then(response=>response.json()).then(data=>{
    console.log(data);
  }).catch((err)=>console.error(err));

}



const like=()=>{
  const like=0;
}
  useEffect(()=>{

    fetch(`http://localhost:3336/house/${unhouseid}/admin`,
    {
      headers:{
        Authorization:`Bearer ${localStorage.getItem("authToken")}`
      }
    }
    ).then(response=>response.json()).then(
      data=>{
        settype(data["Home_Type"])
        setsize(data["Size"])
        setprice(data["Price"])
        setregion(data["Region"])
        setwereda(data["Wereda"])
        setcity(data["City"])
        setsub_city(data["Sub_City"])
        setkebele(data["Kebele"])
        sethome_no(data["home_no"])
        setdoor(data['Home_Photo']["Door"])
        setwall(data['Home_Photo']["Wall"])
        setroof(data['Home_Photo']["Roof"])
        setfloor(data['Home_Photo']["Floor"])
        setkitchen(data['Home_Photo']["Kitchen"])
        settoilet(data['Home_Photo']["Toilet"])
        setshower(data['Home_Photo']["Shower"])
        setlicense(data['Home_Photo']["Home_license"])
        console.log(localStorage.getItem("houseId"));
       
        console.log(unhouseid);
    
      }
    ).catch((err) => console.log(err))
    
  },[unhouseid]);


  return (
    <div>
       <Navbar
       nav_title_logo={navBarItemsLogo}

nav_link={navBarItemsLink} 
nav_title={navBarItems}
hometype={[<Dropdown
  color='blue'
  label_items_links={['villa', '/app/house', '/cond']}
  label_items={['Villa', 'Apartema', 'Condomnium']}
  label="Home Type" setdata={function (value: any) {
    throw new Error('Function not implemented.');
  } }/>,
   <Dropdown
     color='blue'
     label_items_links={['villa', '/app/house', '/cond', '/bhd', '/gond', '/ass']}
     label_items={['Addis Ababa', 'Hawasa', 'Adama', 'Bahdar', 'Gondar', 'Assela']}
     label="City" setdata={function (value: any) {
       throw new Error('Function not implemented.');
     } }/>]}
       
       />
       <House_Detail houseaction={<HouseActions>
        <div className="house-like">
        <Button onSelect={like} color='none'>
  <MdOutlineFavorite size={60} color="red" />
  </Button>

<div text-like>1216 likes</div>
</div>
        
       
<div className="comments">
  <div className="comments-text">231 comments</div>
  <div><AiOutlineComment size={30}/></div>
  </div>
    <div className="call"><IoMdCall size={60} color="green"/></div>
    
<button onClick={(event)=>makeApproved(`${unhouseid}`)} className='btn btn-primary'>Make approved</button>

    <div className="report-text"><MdReport size={30} color="red"/>  Report</div>
    <div>
    <div className="house-left"><GrShareOption size={60} color="blue"/></div>
    <div className="text-share">share</div>
    </div>     

      
        
        
       
        
        
        
        </HouseActions>} houseType={type} size={size} price={price} region={region} wereda={wereda} city={city} sub_city={sub_city} kebele={kebele} house_no={home_no} door={door} 
       wall={wall}
       floor={floor}
       shower={shower}
       toilet={toilet}
        license={license}
        roof={roof}
        kitchen={kitchen}/>
         
        
    </div>
  )
}

export default DetailUnapprovedHouse
