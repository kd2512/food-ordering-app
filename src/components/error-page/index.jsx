import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return <div>{error.data}</div>;
};

export default Error;
