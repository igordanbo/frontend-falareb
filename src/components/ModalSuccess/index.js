import './ModalSuccess.css'

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ModalSuccess = ({ isOpenSuccess, onCloseSuccess, onConfirmSuccess, titleSuccess, messageSuccess, buttonTextSuccess }) => {

    if (!isOpenSuccess) return null;

    return (
        <div className="modal">
            
            <div className="modal-content">
                <div className="modal-header-success">
                    <CheckCircleOutlineIcon />
                </div>
                <div className="modal-body">
                    <h2>{titleSuccess}</h2>
                    <p>{messageSuccess}</p>
                </div>
                <div className="modal-footer">
                    <button className="cancel-btn" onClick={onCloseSuccess}>
                        Cancelar
                    </button>

                    <button className="success-btn" onClick={onConfirmSuccess}>
                        {buttonTextSuccess}
                    </button>
                </div>
            </div>

        </div>
    )

}

export default ModalSuccess