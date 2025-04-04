import './Header.css';
import { Logout } from '@mui/icons-material';
import { useLocation } from "react-router-dom";
import Loader from '../Loader';

const AdminHeader = () => {
    
    const location = useLocation();
    const pageTitle = location.pathname.replace("/", "") || "Home";

    return (
        <header className="admin-header">
            <span className="page-name">{pageTitle}</span>
            <div>Seja bem-vindo, <strong>Usuário</strong>.</div>
            <div className="right-area">
                <div><Loader /></div>
                <Logout className="logout"/>
            </div>
        </header>
    )
}

export default AdminHeader;