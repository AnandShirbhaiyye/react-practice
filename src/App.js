import { BrowserRouter, Routes, Route } from "react-router-dom";
import Props from './components/Props/Props';
import State from './components/State/State';
import Map from "./components/Map/Map";

import './App.css';
import Form from "./components/Form/Form";
import Score from "./components/Score/Score";

function App() {
  return (
    <>
    <h1 className='text-center'>Hello Anand...{10+10}</h1> <hr/>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Props/>} />
        <Route path="/state" element={<State/>} />
        <Route path="/map" element={<Map />} />
        <Route path="/form" element={<Form />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
