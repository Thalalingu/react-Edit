import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [search,setSearch] = useState("")
  const [data, setData] = useState([]);
  const [edit,setEdit] = useState(-1)
function dataSubmitted(e){
e.preventDefault()
console.log(search)
if(edit !== -1){
  const newData = [...data];
  newData[edit] = search;
  setData(newData);
  setEdit(-1);
   
}else
{ setData([...data,search])
 setSearch("")}
}

function myFun(val){
  console.log(val)
  setSearch(data[val])
  setEdit(val)
}
  return (
    <div>
      <p>hiiiujjji</p>
     
      <form onSubmit={dataSubmitted}>
      <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/><br/><br/>
      <input type="submit"/>
</form><br/>
      {
        data.map((item,ind) => <tr><td>{item}{ind}</td> &nbsp; &nbsp;
        <td><button onClick={()=> myFun(ind)}>Edit</button></td></tr>)
      }
    </div>
  );
}
