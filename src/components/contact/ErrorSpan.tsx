import React from "react";
import Error from "../svg/Error";

const ErrorSpan = ({ errorMessage }) => {
  return (
    <span className="absolute right-0 top-3 flex items-center gap-2">
      <p className="text-xs italic">{errorMessage}</p>
      <Error />
    </span>
  );
};

export default ErrorSpan;
