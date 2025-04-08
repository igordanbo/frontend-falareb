import './inputLogin.css'

const InputLogin = ({labelContent, labelFor, inputId, inputName, inputPlaceholder, inputType}) => {

    return (
        <div className="container-input">
            <label htmlFor={labelFor}>{labelContent}</label>
            <input type={inputType} id={inputId} name={inputName} placeholder={inputPlaceholder} required />
        </div>
    )

}

export default InputLogin