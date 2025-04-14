import './ButtonGray.css'

const ButtonGray = ({children, actionOnClick, disabled}) => {

    return (
        <button className="gray-btn" onClick={actionOnClick} disabled={disabled}>
            {children}
        </button>
    )

}

export default ButtonGray