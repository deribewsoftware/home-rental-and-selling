import React, { useEffect, useState } from 'react'
import './uploadHous.css'
import Navbar from '../../../components/navbar/navbar'
import Dropdown from '../../../components/dropdownButton/dropdown'
import { FaHome } from 'react-icons/fa'
import { SiGnuprivacyguard } from 'react-icons/si'
import { FiLogOut } from 'react-icons/fi'
const UploadHouse = () => {
 
const navBarItemsLink=['/Lesserprofile','/uploadHouse','/signup','/login'];
const navBarItems=["Your Profile","All Your House",'Signup','Logout']
const navBarItemsLogo=[<SiGnuprivacyguard/>,<FaHome/>,<SiGnuprivacyguard/>,<FiLogOut/>]
const [house, sethouse]=useState({
  housetype:'',
  size:"",
  price:"",
  city:"",
  subCity:"",
  wereda:"",
  kebele:"",
  houseId:"",
  door:"",
  floor:"",
  wall:"",
  roof:"",
  kitchen:"",
  shower:"",
  toilet:"",
  license:"",

})
const handleInputChange=(event:any) => {
  const target = event.target;
  const name=target.name;
  const value=target.type=='file' ? target.files[0]: target.value ;
  sethouse({...house,[name]:value})
};

const handleInputsubmit=(event:any) => {
  event.preventDefault();
  
 let formData=new FormData();
  formData.append("Home_Type",house.housetype);
  formData.append('Size',house.size);
  formData.append('Price',house.price);
  formData.append('City',house.city);
  formData.append('Sub_City',house.subCity);
  formData.append('Wereda',house.wereda);
  formData.append('Kebele',house.kebele);
  formData.append('home_no',house.houseId);

  
  formData.append('door',house.door!);
  formData.append('wall',house.wall!);
  formData.append('floor',house.floor!);
  formData.append('roof',house.roof!);
  formData.append('kitchen',house.kitchen!);
  formData.append('shower',house.shower!);
  formData.append('toilet',house.toilet!);
  formData.append('licenses',house.license!);

  fetch(`http://localhost:3336/house/${localStorage.getItem('lesserId')}`,{
    method:"POST",
    headers:{
  
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
    body:formData

  }).then(response =>response.json()).then(
    data=>{
      
      console.log(data)
    }).catch((error)=>console.log(error));

};













  return (
    <div className='uploadHouse row'>
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
      <div className='housecard'>
      <form method='post' onSubmit={handleInputsubmit}>
        <div className='row row-card'>
<div className='col-lg-6 col-sm-12 subcard'>
<fieldset>
  <legend>Register Your  House </legend>
 <div className='housetype form-check '>

<label className='form-check-label' htmlFor="type">HouseType</label>
<input 
className='form-control' 
type="text" 
id='type'
 name='housetype' 
value={house.housetype} onChange={handleInputChange} />


 </div>
 <div className='housetype form-check '>
<label className='form-check-label' htmlFor="size">Size</label>
<input className='form-control' type="text" id='size' name='size' value={house.size} onChange={handleInputChange}  />
 </div>
 <div className='housetype form-check '>
<label className='form-check-label' htmlFor="price">Price</label>
<input className='form-control' type="text" id='price'name='price' value={house.price} onChange={handleInputChange} />
 </div>
 <div className='housetype form-check '>
<label className='form-check-label' htmlFor="city">City</label>
<input className='form-control' type="text" id='city' name="city" value={house.city} onChange={handleInputChange} />
 </div>

 <div className='housetype form-check '>
<label className='form-check-label' htmlFor="subcity">Sub City</label>
<input className='form-control' type="text" id='subcity' name="subCity" value={house.subCity} onChange={handleInputChange}/>
 </div>

 <div className='housetype form-check '>
<label className='form-check-label' htmlFor="wereda">Wereda</label>
<input className='form-control' type="text" id='wereda' name='wereda' value={house.wereda} onChange={handleInputChange} />
 </div>
 <div className='housetype form-check '>
<label className='form-check-label' htmlFor="kebele">Kebele</label>
<input className='form-control' type="text" id='kebele' name='kebele'value={house.kebele} onChange={handleInputChange} />
 </div>

 <div className='housetype form-check '>
<label className='form-check-label' htmlFor="house_no">House No</label>
<input className='form-control' type="text" id='house_no' name='houseId' value={house.houseId} onChange={handleInputChange}/>
 </div>
</fieldset>
</div>




<div className='col-lg-6 col-sm-12 subcard'>
<fieldset>
  <legend>Upload House Photo</legend>

  <div className='housetype form-check '>
<label className='form-label' htmlFor="door">Door</label>
<input className='form-control' type="file" id='door' defaultValue={house.door} name='door' onChange={handleInputChange} />
 </div>
 <div className='housetype form-check '>
<label className='form-label' htmlFor="wall">Wall</label>
<input className='form-control' type="file" id='wall'name='wall' defaultValue={house.wall} onChange={handleInputChange} />
 </div>
 <div className='housetype form-check '>
<label className='form-label' htmlFor="floor">Floor</label>
<input className='form-control' type="file" id='floor' name='floor' defaultValue={house.floor} onChange={handleInputChange}/>
 </div>
 <div className='housetype form-check '>
<label className='form-label' htmlFor="roof">Roof</label>
<input className='form-control' type="file" id='roof' name='roof'defaultValue={house.roof} onChange={handleInputChange}/>
 </div>

 <div className='housetype form-check '>
<label className='form-label' htmlFor="kitchen">Kitchen</label>
<input className='form-control' type="file" id='kitchen' name='kitchen' defaultValue={house.kitchen} onChange={handleInputChange}/>
 </div>

 <div className='housetype form-check '>
<label className='form-label' htmlFor="shower">Shower</label>
<input className='form-control' type="file" id='shower'name='shower'defaultValue={house.shower} onChange={handleInputChange}/>
 </div>
 <div className='housetype form-check '>
<label className='form-label' htmlFor="toilet">Toilet</label>
<input className='form-control' type="file" id='toilet' name='toilet' defaultValue={house.toilet} onChange={handleInputChange}/>
 </div>
 <div className='housetype form-check '>
<label className='form-label' htmlFor="license">License</label>
<input className='form-control' type="file" id='license' defaultValue={house.license} name='license' onChange={handleInputChange}/>
 </div>
</fieldset>
</div>


        </div>
       <div className='form-footer'>
<input type="submit" value="Submit" />
       </div>
        
        </form>
      </div>
      
    </div>
  )
}

export default UploadHouse
