import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path='/'  element={<Home />}/>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='signin' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
