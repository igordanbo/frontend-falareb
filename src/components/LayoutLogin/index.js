import './LayoutLogin.css'
import { Outlet } from "react-router-dom";


const LayoutLogin = ({titleMsg, descriptionMsg}) => {

    return (
        <div className="main-container">
            <div className="container-blue">
                <div className="container-logo">
                    <img src="/img/nova-azul.jpg" alt="Logo" />
                </div>
                <div className="container-msg">
                    <h1>{titleMsg}</h1>
                    <p>{descriptionMsg}</p>
                </div>
               <Outlet />
            </div>

        </div>

    )

}

export default LayoutLogin