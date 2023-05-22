import './App.css';
import Home from './components/Home/Home';
import {  Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Edit from './components/Edit/Edit';

function App() {
  return (
   <Routes>
<Route path='/Home' element={<Home/>}></Route>
<Route path='/' element={<Login/>}></Route>
<Route path='/Register' element={<Register/>}></Route>
<Route path='/Edit/:id' element={<Edit/>}></Route>
   </Routes>
  );
}

export default App;
