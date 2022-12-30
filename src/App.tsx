import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useMyQueryQuery } from './gql/graphql';

function App() {
  const { data } = useMyQueryQuery()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>Welcome to Garden Eyes!</p> <p>{JSON.stringify(data)}</p> Test
        </div>
      </header>
    </div>
  );
}

export default App;
