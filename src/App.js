import React from 'react';
import logo from './logo.svg';
import './App.css';
//No se va utilizar esta, había sido por prueba:
// import MyHookComponent from './components/MyHookComponent';
import VisorPeliculas from './components/peliculas/VisosrPeliculas.jsx';

function App() {
  return (
    <div className="App">
     <VisorPeliculas/>
    </div>
  );
}

export default App;
