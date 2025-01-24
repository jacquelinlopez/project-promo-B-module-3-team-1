import "../styles/app.css";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

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
  
  


  return (
  <div className="container">

    <Header/>

    <Main object={card} />

    <Footer/>

  </div>
        
    
  )
}

export default App