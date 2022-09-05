
import React from 'react';


const Timer1 = (props) => {
  const { initMinute = 20, initSeconds = 0,} = props
  const [minutes, setMinutes] = React.useState(initMinute)
  const [seconds, setSeconds] = React.useState(initSeconds)

  React.useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } if (seconds === 0) {
        if (minutes === 0) {
        if(minutes===0){
                clearInterval(myInterval)
        }
        else {
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
          <h1 style={timer1}>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
        </>
  )
}

export default Timer1