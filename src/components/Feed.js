import React from "react";
import Form from "./Form";

export default function Feed(props) {
  return (
    <div className="feedContainer">
      <div className="searchContainer">
        <h2>{props.name}</h2>
        <Form
          handleInputChange={props.handleInputChange}
          onFormSubmit={props.onFormSubmit}
          buttonInput={props.buttonInput}
          name={props.name}
        />
      </div>
    </div>
  );
}
