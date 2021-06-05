import Menu from './menu/Menu';
import './App.css';

import {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './view/Content';
import Home from './components/content/Home';



function App() {
  
 
    return (
        <div className="App" >
            < Router >
                < Menu />
                <Content />
            </Router>
            <Home/>
        </div>
    );
}

export default App