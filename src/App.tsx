import "./App.css";
import Landing from "./pages/Landing";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<Landing />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
