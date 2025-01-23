import "../styles/app.css";
import logoCompany from '../images/laptop-code-solid.svg';
import logoSponsor from '../images/adalab.png';
import { useState } from "react";
function App() {
  
  const [name, setName] = useState ("");
  const [slogan, setSlogan] = useState ("");
  const [technologies, setTechnologies] = useState ("");
  const [repo, setRepo] = useState ("");
  const [demo, setDemo] = useState ("");
  const [desc, setDesc] = useState ("");
  const [autor, setAutor] = useState ("");
  const [job, setJob] = useState ("");

  // const [image, setImage] = useState ("");
  // const [photo, setPhoto] = useState ("");
  
  const handleChangeInput =(ev) =>{
    const input = ev.target.id;
    const value = ev.target.value;

    if (input === "name"){
      setName (value)
    } else if (input === "slogan"){
      setSlogan (value)
    }else if (input === "technologies"){
      setTechnologies (value)
    }else if (input === "repo"){
      setRepo (value)
    }else if (input === "demo"){
      setDemo (value)
    }else if (input === "desc"){
      setDesc (value)
    }else if (input === "autor"){
      setAutor (value)
    }else if (input === "job"){
      setJob (value)
    }
  }


  return (
  <div className="container">

    <header className="header">
      <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
      <img className="header__companyLogo" src={logoCompany} alt="Logo proyectos molones"/>
      <h1 className="header__title">Proyectos molones</h1>
      </a>
     <img className="logoSponsor" src={logoSponsor} alt="Logo Adalab"/>
    </header>

    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
        <a className="button--link" href="./">Ver proyectos</a>
      </section>

      <section className="preview">
        <div className="projectImage"></div>
        <article className="card">
          <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

          <div className="card__author">
            <div className="card__authorPhoto"></div>
            <p className="card__job">
              {job || "Full Stack Developer"}
            </p>
            <h3 className="card__name">{autor || "Anacleta Pérez"}</h3>
          </div>
      
          <div className="card__project">            
            <h3 className="card__name">{name || "Mi primera web en React"}</h3>
            <p className="card__slogan">{slogan || "No lo entiendo, pero lo hago" }</p>
            <h3 className="card__descriptionTitle">Descripción proyecto</h3>
            <p className="card__description">{desc || "Aprendiendo a hacer una web usando React"}</p>

            <div className="card__technicalInfo">
              <p className="card__technologies">{technologies || "JavaSricpt y React"}</p>
          
              <a className="icon icon__www" href={demo} title="Haz click para ver el proyecto online" target="_blank">
                Web link
              </a>
              <a className="icon icon__github" href={repo} title="Haz click para ver el código del proyecto" target="_blank">
                GitHub link
              </a>
            </div>
          </div>
        </article>
      </section>
      <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
          <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onChange={handleChangeInput}/>
          <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={handleChangeInput}/>
          <div className="addForm__2col">
            <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" onChange={handleChangeInput}/>
            <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleChangeInput}/>
          </div>         
          <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onChange={handleChangeInput}/>
          <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleChangeInput}></textarea>
        </fieldset>

        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleChangeInput}/>
          <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" onChange={handleChangeInput}/>
        </fieldset>

        <fieldset className="addForm__group--upload">
          <label htmlFor="image" className="button">Subir foto del proyecto</label>
          <input className="addForm__hidden" type="file" name="image" id="image"/>
          <label htmlFor="photo" className="button">Subir foto de la autora</label>
          <input className="addForm__hidden" type="file" name="photo" id="photo"/>
          <button className="button--large">Guardar proyecto</button>
        </fieldset>
        
      </form>
    </main>

    <footer className="footer">
      <img className="logoSponsor" src={logoSponsor} alt="Logo Adalab"/>
    </footer>

  </div>
        
    
  )
}

export default App