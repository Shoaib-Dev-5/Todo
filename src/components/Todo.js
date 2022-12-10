import React, { useState } from "react";
import "./Todo.css";
import pic from '../img/pic.svg';

export const Todo = () => {
    const[input,setInput]=useState('');
    const[add,setAdd]=useState([]);

   const change=(e)=>{
    setInput(e.target.value);
    }
    const Additem=()=>{
      if(input){
        setAdd([input,...add]);
        setInput('');
      }
      else{
        alert("Plz Enter First");
      }
       
    }
    const clearAll=()=>{
      setAdd([]);
    }
    const del_item=(id)=>{
      const update_item=add.filter((e,ind)=>{
        return id !=ind;
      })
      setAdd(update_item);
    }

  return (
    <>
      <div className="main">
        <div className="images">
          <figure>
            <img src={pic} alt="" className="img-fluid"/>
            <figcaption><h5>Add Items To List</h5></figcaption>
          </figure>
        </div>

        <div className="input-field w-100">
         <input type="text" value={input} onChange={change} className="form-control" id="exampleInputEmail1" placeholder="Enter Here"/>
          <i className="bi bi-plus-circle add-btn" onClick={Additem} title="Add item"></i>
        </div>
    {
      add.map((e,ind)=>
      {
        return(
        <div className="show" key={ind}>
        <h4>{e}</h4>
        <i className="bi bi-trash3 del-btn"  title="Delete item" onClick={()=>del_item(ind)}></i>
    </div>
        )
        })
    }
        <div className="clear">
            <button className="btn btn-outline-danger" onClick={clearAll}>Clear All</button>
        </div>
      </div>
    </>
  );
};
