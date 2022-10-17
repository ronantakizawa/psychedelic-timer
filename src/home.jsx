/* eslint-disable no-undef */
import React from "react";
import Start from "./components/start";
import Shrooms from "./components/shrooms";
import ShroomsTimer from "./components/shroomstimer";
import LSD from "./components/lsd";
import LSDTimer from "./components/lsdtimer";
import DMT from "./components/dmt";

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

        var link= "https://tripsafe.org";
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

        var link= "https://psychable.com/psychedelics/frequently-asked-questions-about-psychedelics/";
        window.open(link,"blank");
     }

     //Source code hover

     const [showHover4, setShowHover4] = React.useState("none");

     const hover4 = () =>{
        setShowHover4("underline");
     }

     const leave4 = () =>{
        setShowHover4("none");
     }
     const newPage4 = () =>{

      var link= "https://github.com/ronantakizawa/psychedelic-timer";
      window.open(link,"blank");
   }

     //Controls whether the shroom window will pop up
    const [showResults, setShowResults] = React.useState(true);

    const [showResultsLSD, setShowResultsLSD] = React.useState(false);

    const [showResultsShrooms, setShowResultsShrooms] = React.useState(false);

    const [showResultsDMT, setShowResultsDMT] = React.useState(false);

    
    
    
    const [showResultsLSDTimer, setShowResultsLSDTimer] = React.useState(false);

    const [showResultsShroomsTimer, setShowResultsShroomsTimer] = React.useState(false);


    
    //Controls whether fade animation will start
    var [data,setData] = React.useState(false);

    var [dataLSD,setDataLSD] = React.useState(true);

    var [dataShrooms,setDataShrooms] = React.useState(true);




    var [dataLSDTimer,setDataLSDTimer] = React.useState(true);

    var [dataShroomsTimer,setDataShroomsTimer] = React.useState(true);



    //Fade Animation 
    const handleCallback = (childData) =>{
        if(childData==="LSD")
        {
         setData(true);
         setTimeout(() => setShowResults(false), 2000);
         setTimeout(() => setShowResultsLSD(true), 2000);
         setDataLSD(false);
        }
        else if(childData==="Shrooms")
        {
         setData(true);
         setTimeout(() => setShowResults(false), 2000);
         setTimeout(() => setShowResultsShrooms(true), 2000);
         setDataShrooms(false);
        }
        else if(childData==="DMT")
        {
         setData(true);
         setTimeout(() => setShowResults(false), 2000);
         setTimeout(() => setShowResultsDMT(true), 2000);
         setDataDMT(false);
        }
    }
    const handleCallback2 = (childData) =>{

      console.log(childData);

      if(childData==="LSD")
        {
         setDataLSD(true);
         setTimeout(() => setShowResultsLSD(false), 2000);
         setTimeout(() => setShowResultsLSDTimer(true), 2000);
         setDataLSDTimer(false);
        }
        else if(childData==="Shrooms")
        {
         setDataShrooms(true);
         setTimeout(() => setShowResultsShrooms(false), 2000);
         setTimeout(() => setShowResultsShroomsTimer(true), 2000);
         setDataShroomsTimer(false);
         
        }
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
            bottom:"30px",
            overflow:"hidden",
            whiteSpace:"nowrap"

         }

         const subtitle = {
            display:"grid",
            placeItems:"center",
            color:"#FFFFFF",
            textAlign:"center",
            fontSize:"25px",
            position:"relative",
            bottom:"40px",
            overflow:"hidden",
            whiteSpace:"nowrap"
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
         const button4 = {

            textAlign:"center",
            fontWeight: "bold",
            color:"white",
            backgroundColor: "rgb(147,112,219)",
            textDecoration:showHover4,
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
            <button className="btn btn-primary" 
                    style={button4}    
                    onMouseEnter={hover4}
                    onMouseLeave={leave4}  
                    onClick = {newPage4}
                
                >
                        Source Code
            </button>




                </nav>
                <br></br>
                <p style={title}>🕑 Psychedelic Timer 🕑</p>
                <p style={subtitle}>Ensuring Safe Usage of Psychoactive Substances</p>
                <br></br>
            </div>
            { showResults ? <Start
                parentCallback = {handleCallback}
                data = {data}
                /> : null}
            { showResultsLSD ? <LSD
                parentCallback = {handleCallback2}
                dataLSD = {dataLSD}
                /> : null}
            { showResultsShrooms ? <Shrooms
                parentCallback = {handleCallback2}
                dataShrooms = {dataShrooms}
                /> : null}
            { showResultsDMT ? <DMT
                parentCallback = {handleCallback}
                dataDMT = {dataDMT}
                /> : null}
            { showResultsLSDTimer ? <LSDTimer
                dataLSDTimer = {dataLSDTimer}
                /> : null}
            { showResultsShroomsTimer ? <ShroomsTimer
                dataShroomsTimer = {dataShroomsTimer}
                /> : null}
            
            </>
        );
      }


export default Home;

