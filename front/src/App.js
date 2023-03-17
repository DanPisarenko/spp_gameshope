import './App.css';
import {Link, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Main from './components/Main';
import Catolog from './components/Catolog';
function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/ctl" element={<Catolog/>}/>

      </Routes>
    </main>
    </div>
  );
}

export default App;
