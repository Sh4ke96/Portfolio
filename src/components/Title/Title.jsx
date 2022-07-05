import React from "react";

function Title(props) {
  const { children, ...res } = props;
  return <h2 {...res}>{children}</h2>;
}

export default Title;
