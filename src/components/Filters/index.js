import './Filters.css'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Filters = ({valueSelect, onChangeSelect}) => {

    return (
        <>
            <div className="container-filters">
                <div className="filter-box">
                    <div className="date-container">
                        <div className="calendar-icon">
                            <CalendarTodayIcon />
                        </div>
                        <input type="date" className="date-input" />
                    </div>
                </div>
                
                <div className="select-wrapper">
                    <select 
                        className="custom-select"
                        value={valueSelect} 
                        onChange={onChangeSelect}
                    >
                        <option value="">Todas as categorias</option>
                        <option value="São Paulo">São Paulo</option>
                        
                    </select>
                    <span className="arrow-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </div>


            </div>
        </>
    )

}

export default Filters