import Hero from "./Hero";
import Preview from "./Preview";
import Form from "./Form";
import PropTypes from "prop-types";

function Main(props) {
  return (
    <main className="main">
          <Hero/>
          <Preview object={props.object}/>
          <Form/>
    </main>
  )
}

Main.propTypes = {
    object: PropTypes.object,
}

export default Main;