import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const user = null;

  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          {!user? (
            <Route path="/login" element={<LoginScreen />} />
          ):(
            <Route exact path="/" element={<HomeScreen />} />
          )}
          
        </Routes>
      </BrowserRouter>
    
     
    </div>
  );
}

export default App;
