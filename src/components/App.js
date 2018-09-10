import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Loading from '../containers/Loading';

class App extends React.Component {
    render() {
        return (
            <div>
                <AddTodo />
                <br />
                <Footer />
                <VisibleTodoList />
                <Loading />
            </div>
        );
    }
}

export default App;