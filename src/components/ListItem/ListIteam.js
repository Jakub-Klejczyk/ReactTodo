import React from "react";
import styles from "./ListItem.module.scss";
import Button from "../Button/Button";

const ListItem = ({ children }) => (
  <div className={styles.contaier}>
    <p>{children}</p>
    <Button>DEL</Button>
    <Button>DONE</Button>
  </div>
);

export default ListItem;
