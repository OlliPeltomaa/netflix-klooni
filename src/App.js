import './App.css';
import React, {useState} from 'react';
import Account from "./components/Account";
import MainView from './components/MainView';
import { AppContext } from "./helpers/Context";

function App() {

  const [appState, setAppState] = useState('account'); 

  return (
    <AppContext.Provider
      value={{
        appState,
        setAppState
      }}
    >
      {appState === 'account' && <Account/>}
      {appState === 'main' && <MainView/>}
    </AppContext.Provider>
  );
}

export default App;
