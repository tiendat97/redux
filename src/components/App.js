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
      this.props.dispatch(saveTask(data))
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
