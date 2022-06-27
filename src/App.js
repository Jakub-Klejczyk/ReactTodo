import React from "react";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import ListItem from "./components/ListItem/ListIteam";
import Form from "./components/Form/Form";

const initialStateItems = [<ListItem>task2</ListItem>];

class App extends React.Component {
  state = {
    items: [...initialStateItems],
  };
  addTask = (e) => {
    e.preventDefault();

    const newItem = {
      children: e.target[0].value,
    };

    this.setState((prevState) => ({
      items: [...prevState, newItem],
    }));

    e.target.reset();
  };

  render() {
    return (
      <div className="App">
        <h2>To-Do List</h2>
        <Form submitFn={this.addItem} />
        <ListItem items={this.state.items}>task1</ListItem>
      </div>
    );
  }
}

export default App;
