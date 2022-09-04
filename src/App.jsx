import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
