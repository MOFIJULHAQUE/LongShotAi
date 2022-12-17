import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Main from "./components/main/Main";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<Home />} />
          <Route path="/user" element={<Home />} />
          <Route path="/order" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
