import React from "react";

function Button(props) {
  const { children, ...res } = props;
  return <button {...res}>{children}</button>;
}

export default Button;
