import './App.css';
import Form from './Form';
import Answers from "./admin/Answers"
import Loader from './Loader';
import {Routes, Route} from "react-router-dom"
import Login from './admin/Login';
import Register from './admin/Register';

function App() {
  return (
    <div className="App">
      {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/admin" element={<Answers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
