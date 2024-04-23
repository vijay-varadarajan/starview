import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Course from './pages/Course';
import Test from './pages/Test'
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/test' element={<Test />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
