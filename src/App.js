import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from "react";



const App = () => {

  const [time, setTime] = useState(null);
  const [run, setrun] = useState(false)
  

  useEffect(() => {
    if (run) {
      const intervalID = setInterval(() => {
        setTime(time - 1)

      }, 1000)
      if (time === 0) {
        setrun(false)
        clearInterval(intervalID)
      }
      return () => clearInterval(intervalID)
    }



  }, [time, run])

  return (
    <div className='App-link'>
      <header className='App-header'>  COUNT DOWN TIMER
        <input className='inputStyle' value={time} onChange={(e) => { setTime(e.target.value) }}></input>
        <button className='buttonStyleA' onClick={() => { setrun(true) }}>START</button>
        count:{time}
        <button className='buttonStyle' onClick={()=>{setrun(false)}}>STOP</button>
        <button className='buttonStyleB' onClick= { ()=>{setTime(null)}}>RESET</button>

      </header>
      
    </div>
  )
}




export default App;
