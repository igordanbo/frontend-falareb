import './Header.css';
import { Logout } from '@mui/icons-material';
import { useLocation } from "react-router-dom";
import Loader from '../Loader';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const AdminHeader = ({ isOpen, setIsOpen }) => {
    
    const location = useLocation();
    const pageTitle = location.pathname.replace("/", "") || "Home";

    return (
        <header className={`admin-header ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <div>
                <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
                <span className="page-name">{pageTitle}</span>
            </div>
       
            <div>Seja bem-vindo, <strong>Usuário</strong>.</div>
            <div className="right-area">
                <div><Loader /></div>
                <Logout className="logout"/>
            </div>
        </header>
    )
}

export default AdminHeader;