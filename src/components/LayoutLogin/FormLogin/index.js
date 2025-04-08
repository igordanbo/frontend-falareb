import './SubmitLogin.css'

const SubmitLogin = ({titleForm}) => {

    return (
        <div className="container-form">
            <div className="pre-title-login">
                <img src="/img/nova-azul.jpg" alt="Logo" className="img-mobile"/>
                Bem vindo ao <span className="app-name">Fala Rebouças</span>
            </div>
            <div className="title-login">
                <h2>{titleForm}</h2>
            </div>
            
       </div>
    )

}

export default SubmitLogin