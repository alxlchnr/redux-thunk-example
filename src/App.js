import 'babel-polyfill'
import React, {Component} from 'react';
import {fetchJoke} from './chuckNorrisActionCreator'
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

class Application extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>{this.props.joke}</h2>
                </div>
                <button onClick={this.props.onClick}>click</button>
            </div>
        );
    }
}

// Map Redux state to component props
function mapStateToProps(state) {
    console.log(state);
    return {
        joke: state.randomJokeReducer.joke || state.defaultReducer.greeting
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onClick: () => dispatch(fetchJoke())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
