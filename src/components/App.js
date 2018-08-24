import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Button from '../containers/Button';
import Loading from '../containers/Loading';
import NewsItem from '../containers/NewsItem';

class App extends React.Component {
    render() {
        return (
            <div>
                <AddTodo />
                <br />
                <Footer />
                <VisibleTodoList />
                <Button />
                <Loading />
                <NewsItem />
            </div>
        );
    }
}

export default App;
