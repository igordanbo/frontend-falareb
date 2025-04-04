import './ModalAlert.css'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const ModalAlert = ({ isOpenAlert, onCloseAlert, onConfirmAlert, titleAlert, messageAlert, buttonTextAlert }) => {

    if (!isOpenAlert) return null;

    return (
        <div className={`modal ${isOpenAlert ? "modal-open" : "modal-closed"}`}>
            
            <div className="modal-content">
                <div className="modal-header-alert">
                    <WarningAmberIcon />
                </div>
                <div className="modal-body">
                    <h2>{titleAlert}</h2>
                    <p>{messageAlert}</p>
                </div>
                <div className="modal-footer">
                    <button className="cancel-btn" onClick={onCloseAlert}>
                        Cancelar
                    </button>

                    <button className="alert-btn" onClick={onConfirmAlert}>
                        {buttonTextAlert}
                    </button>
                </div>
            </div>

        </div>
    )

}

export default ModalAlert