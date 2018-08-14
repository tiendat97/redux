import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import { connect } from "react-redux";
import { getData } from "../actions/index";
import axios from "axios";

class App extends React.Component {
  componentDidMount() {
    const get_data = axios
      .get("http://localhost:8086/notes")
      .then(res => {
        return res.data;
        console.log(get_data);
      })
      .catch(error => {
        console.log(error);
      });
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
