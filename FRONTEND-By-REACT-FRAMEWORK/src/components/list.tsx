interface Props{
  alist: string[];
}

function List(props:Props){
  

  return <ul className="list-group">
    {props.alist.map((name, index)=><li className="list-group-item">{name}</li>)}
  </ul>
}
export default List;