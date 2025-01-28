import "../styles/app.css";
import { useState } from "react";
import Header from "./Header";
import MainAdd from "./MainAdd";
import Footer from "./Footer";
import { Value } from "sass";

function App() {
  
  const [card, setCard] = useState({
    name: "",
    slogan: "",
    technologies:"",
    repo:"",
    demo:"",
    desc:"",
    autor:"",
    job:"",
  })

  

  // const [image, setImage] = useState ("");
  // const [photo, setPhoto] = useState ("");
  
  const changeCard = (key, value) => {
    if (key === "name"){
      setCard({...card, name: value})
    } else if (key === "slogan"){
      setCard({...card, slogan: value})
    } else if (key === "technologies"){
      setCard({...card, technologies: value})
    } else if (key === "repo"){
      setCard({...card, repo: value})
    } else if (key === "demo"){
      setCard({...card, demo: value})
    } else if (key === "desc"){
      setCard({...card, desc: value})
    } else if (key === "autor"){
      setCard({...card, autor: value})
    } else if (key === "job"){
      setCard({...card, job: value})
    }
  }

  return (
  <div className="container">

    <Header/>

    <MainAdd object={card} changeCard = {changeCard}/>

    <Footer/>

  </div>
        
    
  )
}

export default App