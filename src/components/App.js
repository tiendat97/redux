import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import { saveTask } from '../actions';

class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:8086/notes').then((res) => {
            const data = res.data;
            let i;
            for (i = 0; i < data.length; i++) {
                this.props.dispatch(
                    saveTask(data[i]._id, data[i].task_todo, data[i].completed)
                );
            }
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
