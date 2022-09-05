
import React, { useState, useEffect } from 'react';
import Timer1 from "./lsdtimer1";
import Timer2 from "./lsdtimer2";
import Image2 from "/Users/ronantakizawa/Documents/Personal CS projects/drug timer/drug-timer/src/img2.png";

const Timer = (props) => {


    const [word, setWord] = useState("");


    const handleCallback = (childData) =>{
        setWord(childData);
    }



     

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out',
    });
    useEffect(() => {
     const timeout = setInterval(() => {
         if ( body.homepageDisplay === false ) {
            clearInterval(timeout);
             setFadeProp({
                 fade: 'fade-in'
             })
             return;
         } 
         else {
            clearInterval(timeout);
             setFadeProp({
                 fade: 'fade-out'
             })
             return;
         }
     }, 300);
  
     return () => clearInterval(timeout)
  }, []);

  const body = {
    homepageDisplay:props.dataLSDTimer
 }


  const style={
    display: "flex",
    placeItems:"center",
    textAlign:"center",
    flexDirection: "row",
    position:"relative",
    justifyContent:"space-evenly",
  }
  
  const pic={
      display:"grid",
      placeItems:"center",
      justifyContent:"center",
      textAlign:"center"
  
  }

  const img = {
    display:"grid",
      placeItems:"center",
      justifyContent:"center",

  }


  return (
	    <>
        <div style = {body} data-testid="fader" className={fadeProp.fade} >
        <div style={style}>
            <img src={Image2} width="900" height="400" alt="Shroom" style={pic}></img>
        </div>
        <div style={style}>
            <div>
                <p>TIME PASSED</p>
                <Timer2 
                    parentCallback = {handleCallback}
                ></Timer2>
            </div>
            <div>
                <p>TIME LEFT</p>
                <Timer1></Timer1>
            </div>
        </div>
        <br></br>
        <div style={pic}>
            <h1 style={pic}>EXPECTED SYMPTOMS:</h1>
            <h1 id="text" style={pic}>{word}</h1>
        </div>

        </div>

        
        </>
  )
}

export default Timer