import ButtonGray from '../../ButtonGray'
import './TableFooter.css'

const TableFooter = ({actionOnClickNext, actionOnClickPrev, disabledNext, disabledPrev, currentPage, lastPage, dataLength, dataTotal}) => {

    return (
        <div className="footer-header">
            <div className="footer-buttons">
                <ButtonGray
                    actionOnClick={actionOnClickPrev}
                    disabled={disabledPrev}>
                    Anterior
                </ButtonGray>
                <ButtonGray
                    actionOnClick={actionOnClickNext}
                    disabled={disabledNext}>
                    Próxima
                </ButtonGray>
            </div>
            <div className="footer-infos">Página {currentPage} de {lastPage}</div>
            <div className="footer-infos">Exibindo {dataLength} de {dataTotal}</div>
        </div>
    )

}

export default TableFooter