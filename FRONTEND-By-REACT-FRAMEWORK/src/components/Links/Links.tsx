import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './Links.css'
interface link{
  children:ReactNode;
  linkUrl:string;
}
const Links = (props:link) => {
  return (
    <div className='upload-house'>
    <Link className='links' to={props.linkUrl}>{props.children}</Link>
      
    </div>
  )
}

export default Links
