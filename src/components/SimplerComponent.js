import React from "react";

const SimplerComponent = props => {
  return(
    <div onClick={e => props.handleClick(e)}>I am just happy</div>
  )
}

export default SimplerComponent;