import Navbar from '../../components/navbar/navbar';
import './login.css'
import loginLogo from '../.././assets/images/loginLogo1.jpg'
import { useEffect, useState } from 'react';
import HomePage from '../homepages/homepage';
import { Navigate, redirect } from 'react-router-dom';
import Dropdown from '../../components/dropdownButton/dropdown';
import Footer from '../../layouts/footer/footer';
import { FiLogIn } from 'react-icons/fi';
import { SiGnuprivacyguard } from 'react-icons/si';


function Login(){
  const navBarItemsLink=['/signup','/login'];
  const navBarItems=['Signup','Login']
  const navBarItemsLogo=[<SiGnuprivacyguard/>,<FiLogIn/>]
const [Token,setToken]=useState()
const [username,setusername]=useState<any>()
const [password,setpassword]=useState<any>()
const [loginIn,setloginIn]=useState<any>()
const handleSubmit=(event:any) => {
  event.preventDefault();
  fetch("http://localhost:3336/user/signin",{
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      User_Name:username,
     Password:password
    })
  }).then(
    Response=>Response.json()).then(
      (data)=>{
       localStorage.setItem('authToken',data['Tokens']['access_token']);
        console.log(data['Tokens']['access_token']);
        if(data['user']['role']=='LESSE'){
          setloginIn("LESSE")
        }
        else if(data['user']['role']=='LESSER'){
          setloginIn("LESSER")
        }
        else if(data['user']['role']=='ADMIN'){
          setloginIn("ADMIN")
        }
        else{
          setloginIn("none user")
        }
      }
    )
   
    }

    // if (loginIn ==="ADMIN"){
    //   return "ADMIN"
    // }
    if (loginIn ==="ADMIN"){
      return <Navigate to='/adminProfile'/>;
    }
     
    else if (loginIn ==="LESSER"){
      return <Navigate to='/Lesserprofile'/>;
    }
    else if(loginIn ==="LESSE"){
      return <Navigate to='/'/>;
    }
  return(
    <div className='login'>
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
      <div className="flex">
       <div className="wrap">
  <img className='logonImage' src={loginLogo} alt="" />
      </div>
      <div className="wrap">
      <form action="" method='post' onSubmit={handleSubmit}>
        <div className="form_header"><h1>Login to your account</h1></div>
        <div className="form-body">
          <div className="form-group">
            <label htmlFor="">Username</label>
            <input type="text" className='form-control' value={username} name="username" onChange={(event)=>setusername(event.target.value)}  />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className='form-control' value={password} name='password' onChange={(event)=>setpassword(event.target.value)} />
          </div>
        </div>
        <div className='form-footer'>
          <input type="submit" value={"Login"} />
          <div className="has-account">already have account? <span className="login"> Login</span></div>
        </div>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );

}
export default Login;