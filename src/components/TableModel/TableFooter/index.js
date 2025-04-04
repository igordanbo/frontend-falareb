import ButtonGray from '../../ButtonGray'
import './TableFooter.css'

const TableFooter = () => {

    return (
        <div className="footer-header">
            <div className="footer-buttons">
                <ButtonGray>
                    Anterior
                </ButtonGray>
                <ButtonGray>
                    Próxima
                </ButtonGray>
            </div>
            <div className="footer-infos">Página 1 de 10</div>
            <div className="footer-infos">Exibindo 10 de 210</div>
        </div>
    )

}

export default TableFooter