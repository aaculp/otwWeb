import React from "react";

function Form(props) {
  return (
    <form className="input" onSubmit={e => props.onFormSubmit(e)}>
      <input
        onChange={e => props.handleInputChange(e)}
        value={props.name.toUpperCase()}
      />
      <button>Submit</button>
    </form>
  );
}

export default Form;
