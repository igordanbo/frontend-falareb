import './AdminMainContainer.css';
const AdminMainContainer = (props) => {

    return (
        <div className="admin-main-container">
            <div className="admin-main-content">
                {props.children}
            </div>
        </div>
    )

}

export default AdminMainContainer;