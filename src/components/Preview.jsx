import Card from "./Card";
import PropTypes from "prop-types";

function Preview(props) {
  return (
    <section className="preview">
        <div className="projectImage"></div>
        <Card data={props.object}/>
    </section>
  )
}


Preview.propTypes = {
    object: PropTypes.object,
}

export default Preview