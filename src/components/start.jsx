import React, { useState, useEffect} from 'react';
import "./setup.css";




const buttons = {
    display:"flex",
    placeItems:"center",
    alignItems:"center",
    position:"relative",
    fontSize: "20px",
    marginLeft:"300px",
    transition: "1s opacity"

    
 };

 const button = {

    marginRight:"110px",
    fontSize: "50px",
    //overflow: "hidden",
    whiteSpace: "nowrap",
    opacity: "1",
    transition: "1s opacity"
 };
 const h3 = {

    display:"grid",
    padding:"10px",
    placeItems:"center",
    textAlign:"center",
    fontSize:"50px",
    fontWeight: "bold",
    opacity: "1",
    transition: "1s opacity",
    overflow:"hidden",
    whiteSpace:"nowrap"

 };

const Fader = (props) => {

    const body = {

        homepageDisplay: props.data
    }    


    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out',
    });

    useEffect(() => {
        const timeout = setInterval(() => {
            if ( body.homepageDisplay === false ) {
                setFadeProp({
                    fade: 'fade-in'
                })
            } else {
                setFadeProp({
                    fade: 'fade-out'
                })
            }
        }, 300);

        return () => clearInterval(timeout)
    }, [fadeProp])


    const onLSD = (event) =>
    {
        props.parentCallback("LSD");
        event.preventDefault();
    }

    const handleShrooms = (event) =>
    {
        props.parentCallback("Shrooms");
        event.preventDefault();
    }


    const handleDMT = (event) =>
    {
        props.parentCallback("DMT");
        event.preventDefault();
    }

        return (
            <>
            <div data-testid="fader" className={fadeProp.fade}>
                <div style={h3}>
                    <br></br>
                    <p>Choose Your Psychedelic</p>
                    <br></br>
                </div>
    
                <div style={buttons}>
                    <button className="btn btn-light" style={button} onClick={onLSD}>
                        LSD &#127752;
                    </button> 
                    <button className="btn btn-light" style={button} onClick={handleShrooms}>
                        Psilocybin&#127812;
                    </button> 
                    <button className="btn btn-light" style={button} onClick={handleDMT}>
                        DMT&#128125;
                    </button>
                    
                </div>
            </div>
            </>
        )


    };


export default Fader

