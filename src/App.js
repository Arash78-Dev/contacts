
import { Route ,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Add from './component/Add';
import Edit from './component/Edit';



function App() {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route  path="/add" element={<Add/>}></Route>
        <Route  path="/edit:id" element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
