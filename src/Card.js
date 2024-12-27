import Guru from "./Guru";
import Date from './Date';
import { useState } from "react";
//import {BrowseRouter,Link} from 'react-router-dom';
function Card({id,image,info,dob,name,removeGuru}){
    
  const[readmore,setReadmore]=useState(false);
  const des= readmore?info:`${info.substring(0,70)}....`;
   function clickHandler(){
    setReadmore(!readmore);
   }

    return(

    <div className="container">
        <div >
            <img src={image} className="img"></img>
        </div>
       <div>
       <div className="dob">
            <h3>{dob}</h3>
        </div>
        <div>
            <h3>{name}</h3>
        </div>
      <div>
        {des}
        <span className="des" onClick={clickHandler}>
         { readmore? "...show less" :"show more"};
        </span>
      </div>
       </div>
      <div>
        <button className="btn" onClick={()=>removeGuru(id)}>Not Interested</button>
      </div> 
    </div>
    );

}
export default Card;