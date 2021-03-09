import React from 'react';
import { Header } from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import AppRouter from './router/AppRouter';
import './App.scss';

function App() {
  return (
    <>
      <div className="app-content">
        <Header />
        <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;
