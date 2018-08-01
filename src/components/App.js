import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import axios from "axios";

class App extends React.Component {
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
  
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     persons: []
  //   };
  // }

  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
  //     const persons = res.data;
  //     this.setState({ persons });
  //   });
  // }

  

  // render() {
  //   return (
  //     <div>
  //       <table>
  //         <tr>
  //           <th>Name</th>
  //           <th>Id</th>
  //         </tr>
  //       </table>
  //       {this.state.persons.map(person => (
  //         <table>
  //           <tr>
  //             <td> {person.name} </td>
  //             <td> {person.id} </td>
  //           </tr>
  //         </table>
  //       ))}
  //     </div>
  //   );
  // }
}

export default App;
