import Hero from "./Hero";
import Preview from "./Preview";
import Form from "./Form";
import PropTypes from "prop-types";

function Main(props) {
  return (
    <main className="main">
          <Hero/>
          <Preview object={props.object}/>
          <Form changeCard = {props.changeCard}/>
    </main>
  )
}

Main.propTypes = {
    object: PropTypes.object,
    changeCard: PropTypes.func,
}

export default Main;