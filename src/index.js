import React from 'react';
import ReactDOM from 'react-dom';
import ExampleRoute from './components/ExampleRoute';
// require('bootstrap');
class App extends React.Component {

    render() {
        
        return (
           <ExampleRoute />
        )
    }
}



ReactDOM.render(<App/>, document.getElementById("main"));