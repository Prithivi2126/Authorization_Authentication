import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Adminregister from './admin/Adminregister';
import Userregister from './user/Userregister';
import Authentication from './authentication/Authentication';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/admin' element={<Adminregister />}></Route>
      <Route path='/user' element={<Userregister />}></Route>
      <Route path='/authentication' element={<Authentication />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
