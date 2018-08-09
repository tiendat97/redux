import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

class App extends React.Component {
  render(){
    return (
      <div>
        <AddTodo />
        <br />
        <Footer />
        <VisibleTodoList/>
      </div>
    );
  }
}

export default App;
