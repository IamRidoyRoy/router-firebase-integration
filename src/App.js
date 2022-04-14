import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/JS/Home';
import Login from './components/JS/Login';
import Header from './components/JS/Header';

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
