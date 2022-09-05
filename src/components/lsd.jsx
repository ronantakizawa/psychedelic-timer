import React, { useState, useEffect} from 'react';


const Shroom = (props) => {

    const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };
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



const onTrigger = (event) =>
{
 var value = document.getElementById("dosage");
 var text = value.options[value.selectedIndex].text;
 if(text!="Select Dosage")
 {
    props.parentCallback("LSD");
    event.preventDefault();
 }
}

    const h3 = {

        display:"grid",
        padding:"10px",
        placeItems:"center",
        textAlign:"center",
        fontSize:"100px",
        fontWeight: "bold",
        opacity: "1",
    
     };

     const button = {

        display:"grid",
        padding:"10px",
        placeItems:"center",
        textAlign:"center",
        fontSize:"30px",
        fontWeight: "bold",
        color:"white",
        backgroundColor: isHover ? "rgb(167,112,229)" : "rgb(147,112,219)",
        borderColor: "rgb(147,112,219)",
     }

     const form = {

        width:"400px",
        size:"400px",
        padding:"10px"

     }

     const body = {
        display:"grid",
        placeItems:"center",
        placeItems:"center",
        textAlign:"center",
        homepageDisplay:props.dataLSD
     }

     const label = {

        textAlign:"middle",
        padding:"10px"
     }


        return (
            <>
            <div style = {body} data-testid="fader" className={fadeProp.fade}> 
            <h1 style={h3}>&#127752; LSD &#127752;</h1>
            <div className="form-group" style={form}>
            
            <h5 style={label}>Dosage</h5>
            <select className="form-select form-select-lg" id="dosage">
                    <option value="1">Select Dosage</option>
                    <option value="2">Microdose (0-50µg)</option>
                    <option value="3">Low Dose (50-100µg)</option>
                    <option value="4">Moderate Dose (100-150µg)</option>
                    <option value="5">High Dose (150+µg)</option>
            </select>
            </div>
            <br></br>
            <button className="btn btn-primary" 
            style={button}    
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}  
            onClick = {onTrigger}
                
            >
                        START
            </button>
            </div>
            </>

            
        )





    
    }



export default Shroom