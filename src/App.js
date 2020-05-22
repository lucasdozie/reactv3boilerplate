import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/index'
let {store, persistor} = configureStore()
import './App.css';

import {Router} from "react-router-dom"
import history from './services/history';
import Routes from './routes/index';
//Routes
const RootComponent = () => (
  <Router history={history}>
    <Routes />
  </Router>
)
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
}
export default App;