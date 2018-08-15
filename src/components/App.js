import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import { connect } from "react-redux";
import axios from "axios";
import { saveTask } from '../actions'

class App extends React.Component {
  componentDidMount(){
    axios.get(`http://localhost:8086/notes`).then(res =>{
      const data = res.data;
      var i;
      for (i = 0; i < data.length; i++) {
        this.props.dispatch(saveTask(data[i].id,data[i].task_todo,data[i].completed))
      }
    })
  }

  render() {
    return (
      <div>
        <AddTodo />
        <br />
        <Footer />
        <VisibleTodoList />
      </div>
    );
  }
}

export default connect()(App);
