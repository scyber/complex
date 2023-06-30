import logo from './logo.svg';
import './App.css';
//import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {Row, Container, Col, Button} from 'react-bootstrap'
import Fib from './Fib';
import OtherPage from './OtherPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='App-header'>Wellcome React</h1>
        <Container>
          <Fib />
        </Container>
      </header>
      </div>
  );
}

export default App;
