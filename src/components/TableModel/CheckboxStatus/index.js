import './CheckboxStatus.css';

const CheckboxStatus = ({checkedConcluido, onChangeConcluido, checkedAgendado, onChangeAgendado, checkedEmEspera, onChangeEmEspera}) => {

    return (

        <>
        <div class="container-cb">
            <label className="custom-cb">
                <div class="center">
                    <input
                        name=""
                        type="checkbox"
                        checked={checkedConcluido}
                        onChange={onChangeConcluido} />
                </div>
                <span
                    class="checkmark checkmark-color1"></span>
            </label>

            <label className="custom-cb">
                <div class="center">
                    <input
                        name=""
                        type="checkbox"
                        checked={checkedAgendado}
                        onChange={onChangeAgendado}
                        />
                </div>
                <span
                    class="checkmark checkmark-color2"></span>
            </label>

            <label className="custom-cb">
                <div class="center">
                    <input
                        name=""
                        type="checkbox"
                        checked={checkedEmEspera}
                        onChange={onChangeEmEspera}
                         />
                </div>
                <span
                    class="checkmark checkmark-color3"></span>
            </label>


        </div>
        
        </>

    )

}

export default CheckboxStatus;