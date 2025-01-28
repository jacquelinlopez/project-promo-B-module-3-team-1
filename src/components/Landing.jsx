import "../styles/Landing.css";
import "../styles/App.css";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Intro from "./Intro";
import Preview from "./Preview";

function Landing (){

  const [cardPreview, setCardPreview] = useState({
      name: "",
      slogan: "",
      technologies:"",
      repo:"",
      demo:"",
      desc:"",
      autor:"",
      job:"",
    });
  

    return (
    <>
        <Header/>
        <main className="main">
          <Intro/>
         
          <Preview object={cardPreview}/>
          
        </main>
        <Footer/>
        </>

    )
}

export default Landing;