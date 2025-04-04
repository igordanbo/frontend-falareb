import './SideBar.css';

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import GridViewIcon from '@mui/icons-material/GridView';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import KeyIcon from '@mui/icons-material/Key';




const SideBar = ({ isOpen, setIsOpen }) => {

    const location = useLocation();

    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        
            <div className="logo">
                <img src="/img/LOGO.png" alt="logo"></img>
            </div>
            
            <p className="list-title">Visão Geral</p>
        
            <Link to="/" className={location.pathname === "/" ? "active menu-item" : "menu-item"}><GridViewIcon /> Dashboard</Link>

            <Link to="/solicitacoes" className={location.pathname === "/solicitacoes" ? "active menu-item" : "menu-item"}><ChecklistIcon /> Solicitações</Link>

            <Link to="/comunidades" className={location.pathname === "/comunidades" ? "active menu-item" : "menu-item"}><WorkspacesIcon /> Comunidades</Link>

            <Link to="/usuarios" className={location.pathname === "/usuarios" ? "active menu-item" : "menu-item"}><PeopleOutlineIcon /> Usuários</Link>

            <p className="list-title">Vizualização de dados</p>

            <Link to="/relatorios" className={location.pathname === "/relatorios" ? "active menu-item" : "menu-item"}><ReceiptLongIcon /> Relatórios</Link>
            
            <p className="list-title">Acesso</p>

            <Link to="/administracao" className={location.pathname === "/administracao" ? "active menu-item" : "menu-item"}><KeyIcon /> Administração</Link>
        
        
     </div>
    )
}

export default SideBar;

