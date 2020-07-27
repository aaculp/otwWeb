import React from "react";

function Form(props) {
  return (
    <form className="input" onSubmit={e => props.onFormSubmit(e)}>
      <input
        placeholder={props.name}
        onChange={e => props.handleInputChange(e)}
        value={props.butonInput}
      />
      <button>Submit</button>
    </form>
  );
}

export default Form;
