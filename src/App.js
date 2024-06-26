import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Adminregister from './admin/Adminregister';
import Userregister from './user/Userregister';
import Authentication from './authentication/Authentication';
import Userdetails from './user/Userdetails';
import Admindetails from './user/Admindetails';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/admin' element={<Adminregister />}></Route>
      <Route path='/user' element={<Userregister />}></Route>
      <Route path='/authentication' element={<Authentication />}></Route>
      <Route path='/userdetails' element={<Userdetails />}></Route>
      <Route path='/admindetails' element={<Admindetails />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
