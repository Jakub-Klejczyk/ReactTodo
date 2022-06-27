import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, addTask }) => (
  <button className={styles.button} onClick={addTask}>
    {children}
  </button>
);

export default Button;
