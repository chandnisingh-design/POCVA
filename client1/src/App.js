import React, { useEffect, useState} from 'react';
import './App.css';
import ChatWindow from './ChatWindow';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  const [isDarkMode, setIsDarkMode] = useState("dark-theme");
  const toggleTheme=()=> {
   if (isDarkMode==="dark-theme"){
    setIsDarkMode("light-theme")
   }else{
    setIsDarkMode("dark-theme")
   }
  }

  useEffect(() => {
    document.body.className =isDarkMode;
  }, [isDarkMode]);


  return (
    <Provider store={store}>
    <div className="App">
    
    <button className="togglebtn" onClick={toggleTheme}>Toggle theme</button>
   
      <ChatWindow></ChatWindow>
    </div>
    </Provider>
  );
}

export default App;

