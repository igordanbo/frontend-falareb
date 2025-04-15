import './TableItem.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { useState } from "react";

import ModalDanger from '../../ModalDanger';
import ModalAlert from '../../ModalAlert';

const TableItem = ({status, name, email, phone, address, onConfirmActionDanger, onConfirmActionAlert}) => {

    const [isModalDangerOpen, setIsModalDangerOpen] = useState(false);
    const [isModalAlertOpen, setIsModalAlertOpen] = useState(false);

    return (

        <div className="table-item">
            <div className="tag"
                 style={{
                    backgroundColor:
                      status === 'Concluído' ? '#10B981' : // verde
                      status === 'Em espera' ? '#FF4040' : // amarelo
                      status === 'Agendado' ? '#FF8E0C' : // azul
                      'transparent' // cor padrão se não for nenhum dos acima
                  }}
            ></div>
            <div className="item item-name">{name}</div>
            <div className="item item-email"><a href={`mailto:${email}`}>{email}</a></div>
            <div className="item item-phone"><a href={`https://wa.me/55${phone}`}>{phone}</a></div>
            <div className="item item-address"><a href={`https://www.google.com/maps?q=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">
 {address}
</a>
            </div>
            <div className="item item-actions">
                <button className="edit-btn" onClick={() => setIsModalAlertOpen(true)}><EditIcon /></button>
                <ModalAlert
                    isOpenAlert={isModalAlertOpen}
                    onCloseAlert={() => setIsModalAlertOpen(false)}
                    onConfirmAlert={() => {
                        onConfirmActionAlert();
                        setIsModalAlertOpen(false);
                    }}
                    titleAlert="Editar Usuário"
                    messageAlert="Tem certeza de que deseja editar este usuário? Você poderá alterar os dados posteriormente."
                    buttonTextAlert="Editar"
                />


                <button className="delete-btn" onClick={() => setIsModalDangerOpen(true)}><DeleteIcon /></button>
                <ModalDanger
                    isOpenDanger={isModalDangerOpen}
                    onCloseDanger={() => setIsModalDangerOpen(false)}
                    onConfirmDanger={() => {
                        onConfirmActionDanger();
                        setIsModalDangerOpen(false);
                    }}
                    titleDanger="Deletar Usuário"
                    messageDanger="Tem certeza de que deseja desativar sua conta? Todos os seus dados serão removidos permanentemente. Esta ação não pode ser desfeita."
                    buttonTextDanger="Deletar"
                />
            </div>
        </div>

    )

}

export default TableItem