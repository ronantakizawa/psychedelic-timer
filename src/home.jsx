/* eslint-disable no-undef */
import React,{ useState} from "react";
import Buttons from "./components/fader";
import Shroom from "./components/shroom";
import Timer from "./components/timer";
import Fader from "./components/fader";
import Chart from "./components/chart"

const Home= () => {


   //Info Hover
    const [showHover, setShowHover] = React.useState("none");

    const hover = () =>{
    setShowHover("underline")
    }

    const leave = () =>{
    setShowHover("none")
    }
    const newPage = () =>{

        var link= "https://tripsafe.org/shrooms/";
        window.open(link,"blank");
     }

     //FAQ Hover
     const [showHover2, setShowHover2] = React.useState("none");

     const hover2 = () =>{
        setShowHover2("underline");
     }

     const leave2 = () =>{
        setShowHover2("none");
     }

     const newPage2 = () =>{

        var link= "https://firesideproject.org/";
        window.open(link,"blank");
     }

   //Emergency Contacts Hover
     const [showHover3, setShowHover3] = React.useState("none");

     const hover3 = () =>{
        setShowHover3("underline");
     }

     const leave3 = () =>{
        setShowHover3("none");
     }

     const newPage3 = () =>{

        var link= "https://www.psycom.net/psilocybin-magic-mushrooms";
        window.open(link,"blank");
     }

     //Controls whether the shroom window will pop up
    const [showResults, setShowResults] = React.useState(true);

    const [showResults2, setShowResults2] = React.useState(false);
    
    //Controls whether fade animation will start
    var [data,setData] = React.useState(false);

    var [data2,setData2] = React.useState(true);


    //Fade Animation 
    const handleCallback = (childData) =>{
      console.log(childData);
        setData(true);
        setTimeout(() => setShowResults(false), 2000);
        setTimeout(() => setShowResults2(true), 2000);
        setData2(false);
    }

        const banner = {
            backgroundColor: "rgb(147,112,219)",
            padding:"0px",
            height:"180px"

         };
         const title = {
            display:"grid",
            placeItems:"center",
            color:"#FFFFFF",
            textAlign:"center",
            fontSize:"60px",
            fontWeight: "bold",
            position:"relative",
            bottom:"30px"

         }

         const subtitle = {
            display:"grid",
            placeItems:"center",
            color:"#FFFFFF",
            textAlign:"center",
            fontSize:"25px",
            position:"relative",
            bottom:"40px"
         }


        const button = {

            textAlign:"center",
            fontWeight: "bold",
            color:"white",
            backgroundColor: "rgb(147,112,219)",
            textDecoration:showHover,
            borderColor: "rgb(147,112,219)",
         }

         const button2 = {

            textAlign:"center",
            fontWeight: "bold",
            color:"white",
            backgroundColor: "rgb(147,112,219)",
            textDecoration:showHover3,
            borderColor: "rgb(147,112,219)",
         }

         const button3 = {

            textAlign:"center",
            fontWeight: "bold",
            color:"white",
            backgroundColor: "rgb(147,112,219)",
            textDecoration:showHover2,
            borderColor: "rgb(147,112,219)"
            
         }

         const nav = 
         {
            display: "flex",
            placeItems:"end",
            textAlign:"center",
            flexDirection: "row",
            fontSize:"20px",

         }


        

        
        return (
            <><div style={banner}>
                <nav style = {nav}>
                <button className="btn btn-primary" 
                    style={button}    
                    onMouseEnter={hover}
                    onMouseLeave={leave}  
                    onClick = {newPage}
                
                >
                        &#9432;
            </button>
            <button className="btn btn-primary" 
                    style={button2}    
                    onMouseEnter={hover3}
                    onMouseLeave={leave3}  
                    onClick = {newPage3}
                
                >
                        FAQ
            </button>
            <button className="btn btn-primary" 
                    style={button3}    
                    onMouseEnter={hover2}
                    onMouseLeave={leave2}  
                    onClick = {newPage2}
                
                >
                        Emergency Contacts
            </button>




                </nav>
                <br></br>
                <p style={title}>🕑 ShroomTimer 🕑</p>
                <p style={subtitle}>Ensuring Safe Usage of Psilocybin Mushrooms</p>
                <br></br>
            </div>
            { showResults ? <Shroom
                parentCallback = {handleCallback}
                data = {data}
                /> : null}
            { showResults2 ? <Timer
                data2={data2}
                /> : null}
            </>
        );
      }


export default Home;

