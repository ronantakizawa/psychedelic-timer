import React, { useState, useEffect} from 'react';
import "./setup.css";


const body = {

    homepageDisplay: false
}


const buttons = {
    display:"flex",
    placeItems:"center",
    alignItems:"center",
    position:"relative",
    fontSize: "20px",
    marginLeft:"60px",
    opacity: "1",
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
    transition: "1s opacity"

 };

const Fader = (props) => {


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


    const onLSD = () =>
    {
        body.homepageDisplay = true;
    }

    const handleShrooms = () =>
    {
        body.homepageDisplay = true;
    }

    const handleWeed = () =>
    {
        body.homepageDisplay = true;
    }

    const handleDMT = () =>
    {
        body.homepageDisplay = true;
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
                    <button className="btn btn-light" style={button} onClick={()=>onLSD()}>
                        LSD &#127752;
                    </button> 
                    <button className="btn btn-light" style={button} onClick={()=>handleShrooms()}>
                        Psilocybin&#127812;
                    </button> 
                    <button className="btn btn-light" style={button} onClick={()=>handleWeed()}>
                        Marijuana&#127807;
                    </button> 
                    <button className="btn btn-light" style={button} onClick={()=>handleDMT()}>
                        DMT&#128125;
                    </button>
                    
                </div>
            </div>
            </>
        )


    };


export default Fader

