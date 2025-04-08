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
import Login from "./pages/Login";
import LayoutLogin from "./components/LayoutLogin";
import 'leaflet/dist/leaflet.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/solicitacoes" element={<Requests />} />
            <Route path="/admin/comunidades" element={<Communities />} />
            <Route path="/admin/usuarios" element={<Users />} />
            <Route path="/admin/relatorios" element={<Reports />} />
            <Route path="/admin/administracao" element={<Administration />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
          
          <Route path="/" element={<LayoutLogin />}>
            <Route index element={<Login />} />
          </Route>
   
        
        </Routes>
          

      </Router>
    </div>
  );
}

export default App;