import './AdminMainContainer.css';
const AdminMainContainer = ({children, isOpen, setIsOpen }) => {

    return (
        <div className={`admin-main-container ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <div className="admin-main-content">
                {children}
            </div>
        </div>
    )

}

export default AdminMainContainer;