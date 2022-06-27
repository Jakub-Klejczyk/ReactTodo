import React from "react";
// import styles from "./Button.module.scss";

const Button = ({ children, addTask }) => (
  <button onClick={event => addTask(event)}>
    {children}
  </button>
);

export default Button;
