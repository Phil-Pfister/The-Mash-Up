import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/ui/Header';
import SignUp from './pages/Signup';
{/*import Home from './pages/Home';*/}
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path="/signup" element={<SignUp/>} />
          {/*<Route exact path="/home" component={Home} />*/}
          {/* Add more routes as needed */}
        </Routes>
      </>
    </Router>
  );
}

export default App;