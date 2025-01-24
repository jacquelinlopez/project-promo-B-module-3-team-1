import Button from "./Button";
import InputButton from "./InputButton";


function Form() {

    const handleChangeInput =(ev) =>{
        const input = ev.target.id;
        const value = ev.target.value;
    
      //   if (input === "name"){
      //     setName (value)
      //   } else if (input === "slogan"){
      //     setSlogan (value)
      //   }else if (input === "technologies"){
      //     setTechnologies (value)
      //   }else if (input === "repo"){
      //     setRepo (value)
      //   }else if (input === "demo"){
      //     setDemo (value)
      //   }else if (input === "desc"){
      //     setDesc (value)
      //   }else if (input === "autor"){
      //     setAutor (value)
      //   }else if (input === "job"){
      //     setJob (value)
      //   }
    }

  return (
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
          <InputButton forLabel="image" textLabel="Subir foto del proyecto" nameInput="image" idInput="image" />
          <InputButton forLabel="photo" textLabel="Subir foto de la autora" nameInput="photo" idInput="photo" />
          <Button text="Crear proyecto"/>
        </fieldset>
        
      </form>
  )
}

export default Form