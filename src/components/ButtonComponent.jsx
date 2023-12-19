import React from "react";

const ButtonComponent = (props) => (
  <>
    <button style={props.style} className={props.className}>
      {props.content}
    </button>
  </>
);

export default ButtonComponent;
