import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "./client"

const getKey = ()=> Math.random().toString(32).substring(2);


function TodoItem({ item, onCheck }) {
  const handleChange = () => {
    console.log(item)
    onCheck(item);
  };

  return (
    <label className="panel-block">
      <input
        type="checkbox"
        checked={item.done}
        onChange={handleChange}
      />
      {item.text}
      
    </label>
  );
}

function Todo() {

  const [items, setItems] = React.useState([
    { key: getKey(), text: 'Learn JavaScript', done: false },
    { key: getKey(), text: 'Learn React', done: false },
    { key: getKey(), text: 'Get some good sleep', done: false },
  ]);
  const handleCheck = checked => {
  const newItems = items.map(item => {
    if (item.key === checked.key) {
      item.done = !item.done;
    }
    return item;
  });
  setItems(newItems);
  };

    return (
    <div className="panel">
      <div className="panel-heading">
          ⚛️ React ToDo
      </div>
        {items.map(item => (
            <TodoItem

    item={item}
    onCheck={handleCheck}
  />
      ))}
  <div className="panel-block">
    {items.length} items
  </div>
    </div>
  );
}

function App() {
  return (
    <div className="container is-fluid">
      <Todo />
    </div>
  );
}

export default App;
