import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Guru from'./Guru';
import Date from'./Date';

const App=()=> {
  const[guru,setGuru]=useState(Date)
  function removeGuru(id){
    const newGuru=guru.filter((guru)=>{ return guru.id!==id} );
    setGuru(newGuru);
   }
  
  
 
  if(guru.length===0){
    return(
      <div>
        <h1 className='noguru'>No Guru Left</h1>
        <button className='nbtn' onClick={()=>setGuru(Date)}>Refresh</button>
      </div>
    );
  }

  return (
  <div className='main'>
     
    <div className="App">
       <Guru gurus={guru} removeGuru={removeGuru}></Guru>
    </div>
  </div>
  )
};

export default App;
