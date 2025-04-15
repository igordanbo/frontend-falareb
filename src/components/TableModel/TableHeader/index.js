import './TableHeader.css'
import SouthIcon from '@mui/icons-material/South';
import Filters from '../../Filters';

const TableHeader = ({tableTitle, children, handleCheckboxChange, statusFilter}) => {

    return (
        <>
            <div>
                <h2 className="table-title">{tableTitle}</h2>
                <div className="table-filters">
                    {children}
                </div>
            </div>
            <div className="table-header">
                <div className="header-item header-name">Nome <SouthIcon /></div>
                <div className="header-item header-email">Email <SouthIcon /></div>
                <div className="header-item header-phone">Telefone <SouthIcon /></div>
                <div className="header-item header-address">Endereço <SouthIcon /></div>
                <div className="header-item header-actions">Ações</div>
            </div>
        </>
    )

}

export default TableHeader