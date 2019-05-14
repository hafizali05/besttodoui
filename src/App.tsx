import React from 'react';
import './App.css';
import Registration from './components/Registration';
import Logout from './components/Logout';

const App: React.FC = () => {
  return (
    <div>
      <header><h1>React typescript todo list</h1>
        <Logout/>     
      </header>
      <Registration/>
    </div>
  );
}

export default App;
 