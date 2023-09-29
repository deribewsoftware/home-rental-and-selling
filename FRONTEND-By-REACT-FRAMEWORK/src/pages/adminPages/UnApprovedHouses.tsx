import React, { useState } from 'react'
import Footer from '../../layouts/footer/footer';
import Navbar from '../../components/navbar/navbar';
import { useParams } from 'react-router-dom';
import Card from '../../components/card/card';
import Dropdown from '../../components/dropdownButton/dropdown';
import { FiLogOut } from 'react-icons/fi';
import { SiGnuprivacyguard } from 'react-icons/si';

const UnApprovedHouses = () => {
  
  const navBarItems=[ 'Your Profile','Signup', 'Logout']
  const navBarItemsLink=['/adminProfile','/signup','/logout'];
  
  const navBarItemsLogo=[<SiGnuprivacyguard/>,<SiGnuprivacyguard/>,<FiLogOut/>]
 
    const [unhouse,gethouse]=useState<any>([])
    const {lesserId}=useParams();
    const [hasData ,sethasData]=useState<boolean>();
    
    
  
  
    fetch(`http://localhost:3336/house/admin`,
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
  <div className="row gap-3 justify-content-around m-3">
  {hasData? unhouse.map((name:any)=><Card url={`/unApprovedHouseDetail/${name.id}`} housetype={name.Home_Type} size={name.Size} price={name.Price} region={name.Region}  wereda={name.Wereda} city={name.City} subcity={name.Sub_City} door={name.Home_Photo.Door
  }/>):<h1> No Houses Posted</h1>}
  
  </div>
  
      <Footer/>
      </>
  )
}

export default UnApprovedHouses;
