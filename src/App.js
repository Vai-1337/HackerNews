import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Ask from './pages/Ask';
import Comments from './pages/Comments';
import HackerNews from './pages/HackerNews';
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import New from './pages/New';
import Past from './pages/Past';
import Show from './pages/Show';
import Submit from './pages/Submit';
import Menu from './components/Menu';
import './App.css';

const App = () => {

  return(
    <div className='app'>
      <Menu />
      <Routes >
        <Route path="/hackerNews" element={ <HackerNews /> } />
        <Route path="/new" element={ <New /> } />
        <Route path="/past" element={ <Past /> } />
        <Route path="/comments" element={ <Comments /> } />
        <Route path="/ask" element={ <Ask /> } />
        <Route path="/show" element={ <Show /> } />
        <Route path="/jobs" element={ <Jobs /> } />
        <Route path="/submit" element={ <Submit /> } />
        <Route path="/" element={ <Login /> } />
      </Routes>
    </div>
  )
}

export default App;

