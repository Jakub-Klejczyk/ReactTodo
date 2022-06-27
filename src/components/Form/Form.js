import React from "react";
  import Input from "../Input/Input";
import Button from "../Button/Button";

const Form = ({ submitFn }) => (
  <form onSubmit={(event) => submitFn(event)}>
    <Input name="name" />
    <Button>Add task</Button>
  </form>
);

export default Form;
