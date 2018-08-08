import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import axios from 'axios';

class App extends React.Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8086/notes`)
      .then(res => {
        const tasks = res.data;
        this.setState({ tasks });
      })
  }

  render() {
    return (
      <div>
        <AddTodo />
        <br />
        <Footer />
        <VisibleTodoList/>
        <ul>
        {this.state.tasks.map(task => <li>{task.task_todo}</li> )}
        </ul>
      </div>
    );
  }
}

export default App;
