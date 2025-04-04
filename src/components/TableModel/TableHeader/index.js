import './TableHeader.css'
import SouthIcon from '@mui/icons-material/South';

const TableHeader = () => {

    return (
        <div className="table-header">
            <div className="header-item header-name">Nome <SouthIcon /></div>
            <div className="header-item header-email">Email <SouthIcon /></div>
            <div className="header-item header-phone">Telefone <SouthIcon /></div>
            <div className="header-item header-address">Endereço <SouthIcon /></div>
            <div className="header-item header-actions">Ações</div>
        </div>
    )

}

export default TableHeader