import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./Layout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<Index />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
