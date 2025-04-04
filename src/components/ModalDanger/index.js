import './ModalDanger.css'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const ModalDanger = ({ isOpenDanger, onCloseDanger, onConfirmDanger, titleDanger, messageDanger, buttonTextDanger }) => {

    if (!isOpenDanger) return null; 

    return (
        <div className="modal">
            
            <div className="modal-content">
                <div className="modal-header-danger">
                    <WarningAmberIcon />
                </div>
                <div className="modal-body">
                    <h2>{titleDanger}</h2>
                    <p>{messageDanger}</p>
                </div>
                <div className="modal-footer">
                    <button className="cancel-btn" onClick={onCloseDanger}>
                        Cancelar
                    </button>

                    <button className="danger-btn" onClick={onConfirmDanger}>
                        {buttonTextDanger}
                    </button>
                </div>
            </div>

        </div>
    )

}

export default ModalDanger