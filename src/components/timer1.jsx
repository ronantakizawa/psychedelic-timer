
import React from 'react';


const Timer1 = (props) => {
  const { initMinute = 0, initSeconds = 0, initHour = 6} = props
  const [hours,setHours] = React.useState(initHour)
  const [minutes, setMinutes] = React.useState(initMinute)
  const [seconds, setSeconds] = React.useState(initSeconds)

  React.useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } if (seconds === 0) {
        if (minutes === 0) {
        if(hours===0){
                clearInterval(myInterval)
        }
        else {
            setHours(hours-1)
            setMinutes(59)
            setSeconds(59)
        }

        }
        else{
            setMinutes(minutes-1)
            setSeconds(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  const timer1 = {

    display:"grid",
    placeItems:"center",
    textAlign:"center",
    fontSize:"30px",
    fontWeight: "bold",
  }

  return (
	    <>
          <h1 style={timer1}>{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
        </>
  )
}

export default Timer1