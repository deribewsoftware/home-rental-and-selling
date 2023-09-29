import React from 'react'
import { AiOutlineComment } from 'react-icons/ai'
import { GrShareOption } from 'react-icons/gr'
import { IoMdCall } from 'react-icons/io'
import { MdOutlineFavorite, MdReport } from 'react-icons/md'

import './house_detail.css';
interface houseAction{
  children ?: any;

}
const HouseActions = (props:houseAction) => {
  return (
    <div className="house-right">


      {props.children}

  
    
</div>
  )
}

export default HouseActions
