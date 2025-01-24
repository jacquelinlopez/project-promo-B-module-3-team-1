import "../styles/Landing.css";
import "../styles/App.css";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Intro from "./Intro";
import Card from "./Card";

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
          <a className="linkProject" href="#/">
            Nuevo Proyecto
          </a>
          <Card data={cardPreview}/>
          
        </main>
        <Footer/>
        </>

    )
}

export default Landing;