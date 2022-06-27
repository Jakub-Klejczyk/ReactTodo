import React from "react";
import styles from "./Input.module.scss";

const Input = ({ label, name }) => (
  <input
    name={name}
    type="text"
    placeholder=""
    className={styles.input}
    onInput={event => event.target.value}
    required
  ></input>
);

export default Input;
