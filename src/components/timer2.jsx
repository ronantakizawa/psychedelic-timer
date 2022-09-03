
import React, { useState, useRef, useEffect } from 'react';



const Timer2 = (props) => {
  const { initMinute = 0, initSeconds = 0, initHour = 0} = props
  const [hours,setHours] = React.useState(initHour);
  const [minutes, setMinutes] = React.useState(initMinute);
  const [seconds, setSeconds] = React.useState(initSeconds);

  React.useEffect((event) => {
    let myInterval = setInterval(() => {
        setSeconds(seconds + 1)
        if (seconds === 59) {
          setSeconds(0)
          setMinutes(minutes+1)
      if (minutes === 59) {
          setHours(hours+1)
          setMinutes(0)
      }
      }
        if(hours===0){
            onTrigger1();
        }
        else if(hours===1){
          onTrigger2();
        }
        else if(hours===2){
            onTrigger3();
        }
        else if(hours===3){
          onTrigger4();
        }
        else if(hours===4){
          onTrigger5();
        }
        else if(hours===5){
            onTrigger6();
        }
        else if(hours===6){
          onTrigger7();
        }

    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })
  
  const timer2 = {

    textAlign:"center",
    fontSize:"30px",
    fontWeight: "bold",
    justifyContent:"space-evenly",
    flexDirection:"row",
}

const array1= ["Anticipation, Excitement","Chills, Tingling",
"Mild Hallucination, Increased Heartrate","Vivid Hallucinations, Intensified Emotions",
"Out-of-body experience, Fluctuating Body Temperature","Mild Hallucination, Sweating",
"Regular Heartrate, Relaxation"];

    const onTrigger1 = (event) =>
    {
            props.parentCallback(array1[0]);
    }
    const onTrigger2 = (event) =>
    {
            props.parentCallback(array1[1]);
            event.preventDefault();
    }
    const onTrigger3 = (event) =>
    {
            props.parentCallback(array1[2]);
            event.preventDefault();
    }
    const onTrigger4 = (event) =>
    {
            props.parentCallback(array1[3]);
            event.preventDefault();
    }
    const onTrigger5 = (event) =>
    {
            props.parentCallback(array1[4]);
            event.preventDefault();
    }
    const onTrigger6 = (event) =>
    {
            props.parentCallback(array1[5]);
            event.preventDefault();
    }
    const onTrigger7 = (event) =>
    {
            props.parentCallback(array1[6]);
            event.preventDefault();
    }

  return (
	    < >
            <div>
            <h1 style={timer2}>{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
            </div>
        </>
  )
}

export default Timer2