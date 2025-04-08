import './NotFound.css';

const NotFound = () => {
    return (
        <div className="main-container">
            <div className="card-notfound">
            <div className="container-notfound">
                <div className="left-notfound">
                <div className="status-ind-notfound"></div>
                </div>
                <div className="right-notfound">
                <div className="text-wrap-notfound">
                    <p class="text-content-notfound">
                    <a className="text-link-notfound" href="/login">Ops...</a> não encontramos essa
                    página por aqui.
                    </p>
                    <p className="time-notfound">agora</p>
                </div>
                <div className="button-wrap-notfound">
                    <a className="primary-cta-notfound" href="/login">Fazer login</a>
                    <a className="secondary-cta-notfound" href="https://google.com">Sair</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default NotFound;