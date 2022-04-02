import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Provider from './hoc/Provider';
import Dashboard from './pages/Dashboard';
import Protect from './components/utility/Protect';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Protect><Dashboard /></Protect>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
