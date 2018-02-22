import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Always from './components/always';
import Home from './components/home';
import About from './components/about';
import News from './components/news';
import Topics from './components/topics';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <br/>

                <Route component={Always}/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/news" component={News}/>
                    <Route path="/topics" component={Topics}/>
                </Switch>
            </div>
        );
    }
}

export default App;
