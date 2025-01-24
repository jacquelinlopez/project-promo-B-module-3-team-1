import PropTypes from "prop-types";

function InputButton(props) {
  return (
    <>
    <label htmlFor={props.forLabel} className="button">{props.textLabel}</label>
    <input className="addForm__hidden" type="file" name={props.nameInput} id={props.idInput}/>
    </>
  )
}

InputButton.propTypes = {
    forLabel: PropTypes.string,
    textLabel: PropTypes.string,
    nameInput: PropTypes.string,
    idInput: PropTypes.string,
}

export default InputButton