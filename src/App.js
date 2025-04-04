import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Communities from "./pages/Communities";
import Requests from "./pages/Requests";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Administration from "./pages/Administration";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/solicitacoes" element={<Requests />} />
            <Route path="/comunidades" element={<Communities />} />
            <Route path="/usuarios" element={<Users />} />
            <Route path="/relatorios" element={<Reports />} />
            <Route path="/administracao" element={<Administration />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;