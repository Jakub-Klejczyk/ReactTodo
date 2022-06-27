import React from "react";
import ListItem from "./components/ListItem/ListIteam";

// const initialStateItems = [<ListItem>task2</ListItem>];
class App extends React.Component {
  /**
   * @var {{items: array<string>, inputValue: string}}
   */
  state = {
    items: [],
    inputValue: null
  };
  /**
   * handles input value change
   * @param {*} event 
   */
  handleInputChange(event)  {
    const { value } = event.target
    
    if(value) {
      this.setState({
        inputValue: value
      })
      return
    }

    return null
  }

  // @TODO handle this submit for form
  onSubmit = (event) => {
    // event is array, try to get each items and reset input value
  }

  addTask = (e) => {
    e.preventDefault();

    const { items, inputValue } = this.state
    
    if(inputValue === '' || !inputValue)
      return

    const newItem = {
      id: items.length + 1,
      name: inputValue,
      isCompleted: false,
    };

    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));

    this.setState({
      inputValue: ''
    })
  };

  render() {
    return (
      <div className="App">
        <h2>To-Do List</h2>
        <form>
          <input type="text" placeholder="Place a todo item" onInput={event => this.handleInputChange(event)}/>
          <p>
            {this.state.inputValue}
          </p>

          <button type="submit" onClick={event => this.addTask(event)}>save todo</button>
        </form>

        <section className="list-items">
          { this.state.items && this.state.items.map(item => (
            <div className="item" key={item.id}>
              <span>{item.name}</span>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default App;