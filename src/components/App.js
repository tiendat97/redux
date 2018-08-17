import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import GetData from '../containers/GetData';
class App extends React.Component {
    renderGetData(){
        <GetData/>; 
    }
   
    render() {
        return (
            <div>
                {this.renderGetData()}
                <AddTodo />
                <br />
                <Footer />
                <VisibleTodoList />
            </div>
        );
    }
}

export default connect()(App);
