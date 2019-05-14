import React from 'react';
import Registration from './components/Registration';
import Logout from './components/Logout';
import Login from './components/Login';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <header><h1>React typescript todo list</h1>
          <Logout />
        </header>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Registration} />
        {/* <Route exact path="/" component= {Registration} />>
      <Route exact path="/" component= {Registration} />> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
