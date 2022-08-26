import Home from "./components/Home";
import Login from "./components/Login";
import "../src/App.css";
import { useState } from "react";
import { Routes, Route} from 'react-router-dom';



function App() {
  const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  console.log(userName)
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Login setUserName={setUserName} userName={userName} />}
        />
        <Route path="/home" element={<Home userName={userName} />} />
      </Routes>
    </div>
  );
}

export default App;
