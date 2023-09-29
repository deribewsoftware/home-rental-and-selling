import Header from "../../layouts/header/header";
import './signup.css';
import signup from  '../.././assets/images/signupLogo.png';
import { FaLock, FaUser } from "react-icons/fa";
import Navbar from "../../components/navbar/navbar";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Dropdown from "../../components/dropdownButton/dropdown";
import Footer from "../../layouts/footer/footer";
import { SiGnuprivacyguard } from "react-icons/si";
import { FiLogIn } from "react-icons/fi";

function Signup(){
  const navBarItemsLink=['/signup','/login'];
  const navBarItems=['Signup','Login']
  const navBarItemsLogo=[<SiGnuprivacyguard/>,<FiLogIn/>]
const [firtName,setFirstName]=useState()
const [lastName,setLastName]=useState()
const [phone,setPhone]=useState()
const [region,setRegion]=useState()
const [wereda,setWereda]=useState()
const [zone,setZone]=useState()
const [city,setCity]=useState()
const [username,setUsername]=useState()
const [password,setPassword]=useState()
const [email, setEmail]=useState();
const [role,setrole]=useState();
const handleSubmit=(event:any)=>{
  event.preventDefault();
  fetch('http://localhost:3336/user/lesser/signup',{
    method: 'post',
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      First_Name:firtName,
      Last_Name:lastName,
      Phone_Number:phone,
      Region:region,
      Zone:zone,
      Wereda:wereda,
      City:city,
      User_Name:username,
      Password:password,
      Email:email,
})}).then(response=>response.json()).then(data=>{

  setrole(data['role'])
  console.log(data['role']);
}).catch((err)=>console.error(err));
}

if (role==="LESSER"){
  return <Navigate to="/lesserprofile"/>
}

  return(
<div className="registration"> 
<Navbar
nav_title_logo={navBarItemsLogo}
nav_link={navBarItemsLink} 
nav_title={navBarItems}

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
<div className="signup">
 
  <div className="wrap signup-info">
    <img className="signup-image " src={signup} alt="" />
  </div>


  
  <div className="wrap">
<form action="" method="post" onSubmit={handleSubmit}>
<div className="form_header">
<h1>Registration</h1>
</div>

<div className="form-body">
<fieldset>
<legend> <span><FaUser/></span> User Info</legend>
<label htmlFor="fname">First Name</label>
  <input type="text" id="fname" className="form-control" onChange={(event:any)=>setFirstName(event.target.value)} required/>
  <label htmlFor="lname">Last Name</label>
  <input type="lname" className="form-control" onChange={(event:any)=>setLastName(event.target.value)}  />
  <label htmlFor="phone">Phone</label>
  <input type="phone" className="form-control" onChange={(event:any)=>setPhone(event.target.value)}  />

  <label htmlFor="email">Email</label>
  <input type="email" id="email" className="form-control" onChange={(event:any)=>setEmail(event.target.value)}  />


  <label htmlFor="region">Region</label>
  
<select name="" id="region" onChange={(event:any)=>setRegion(event.target.value)} >

  <option value="Amhara">Amhara</option>
  <option value="Tigray">Tigray</option>

  <option value="Oromia"> Oromia</option>
  <option value="SNN">SNNP</option>
  <option value="Gambella">Gambella</option>
  <option value="Benishangul">Benishangul</option>
  <option value="Somale">Somale</option>
  <option value="Afar">Afar</option>
  <option value="Harari">Harari</option>
</select>

<label htmlFor="zone">Zone</label>
  <input type="text" id="zone" className="form-control" onChange={(event:any)=>setZone(event.target.value)}  />
  <label htmlFor="wereda">Wereda</label>
  <input type="text" id="Wereda" className="form-control" onChange={(event:any)=>setWereda(event.target.value)}  />
  <label htmlFor="city">City</label>
  <input type="text" id="city" className="form-control" onChange={(event:any)=>setCity(event.target.value)} />
</fieldset>

<fieldset>
  <legend> <span><FaLock/></span> Login Account</legend>
  <label htmlFor="username">Username</label>
  <input type="text" id="username" className="form-control" onChange={(event:any)=>setUsername(event.target.value)}  required/>
  <label htmlFor="password">Password</label>
  <input type="password" className="form-control" onChange={(event:any)=>setPassword(event.target.value)}  />
  <label htmlFor="password-onfirm">Password confirm</label>
  <input type="password-onfirm" className="form-control" />

</fieldset>






</div>

<div className="form-footer">
  <input type="submit" value={"Submit"} />
  <div className="has-account">already have account? <span className="login"> Login</span></div>
</div>
</form>
</div>
</div>
<Footer/>
</div>

    );}
    export default Signup;