import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/JS/Home';
import Login from './components/JS/Login';
import Header from './components/JS/Header';
import Register from './components/JS/Register';
import Orders from './components/JS/Orders';
import RequireAuth from './components/JS/RequireAuth';

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/orders' element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
