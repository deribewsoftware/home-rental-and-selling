import { ReactNode } from "react";

interface Props{
  children:ReactNode;
  color:string;
  onSelect:any;
}

function Button(props:Props){
  return(
    <button onSubmit={()=>props.onSelect} className={"btn btn-"+props.color}>{props.children}</button>
  )
}
export default Button;