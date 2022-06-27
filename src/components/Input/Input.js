import React from "react";
import styles from "./Input.module.scss";

const Input = ({ label, name }) => (
  <input
    name={name}
    type="text"
    placeholder=""
    className={styles.input}
    required
  ></input>
);

export default Input;
