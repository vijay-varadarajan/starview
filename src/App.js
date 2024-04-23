import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import Course from './pages/Course';
import Test from './pages/Test'
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Register from './pages/Register';

function App() {

    const navigate = useNavigate();

    // Call redirectToCourse() inside the submitHandler function
    const loginSubmitHandler = (e) => {
      e.preventDefault();
      console.log('Submitted');
      navigate('/course');
    }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/test' element={<Test />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/login' element={<Login submitHandler={loginSubmitHandler} />} />
        <Route path='/signup' element={<Signup submitHandler={loginSubmitHandler} />} />
        <Route path='/register' element={<Register submitHandler={loginSubmitHandler} />} />
      </Routes>
    </div>
  );
}

export default App;
