import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Contacts from "./pages/contacts";

function App() {
  return (
    <>
      <h1>React Review </h1>
      <hr />
      <a href="/"> Counter </a> | <a href="/contacts"> Contacts </a>
      <hr />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
