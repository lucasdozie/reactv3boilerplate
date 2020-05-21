import React from 'react';
import './App.css';

import {Router} from "react-router-dom"
import history from './services/history';
import Routes from './routes/index';
//Routes
function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}
export default App;

// import logo from './logo.svg';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;