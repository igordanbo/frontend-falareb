import './Filters.css'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Filters = () => {

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
                    <select className="custom-select">
                    <option>Agendado</option>
                    <option>Concluído</option>
                    <option>Cancelado</option>
                    </select>
                    <span className="status-indicator"></span>
                    <span className="arrow-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    </span>
                </div>

                <div className="checkbox-wrapper">
                    <label>
                        <input type="checkbox" />
                        <span className="checkbox"></span>
                    </label>
                    <div className="checkbox-color checkbox-color1"></div>
                </div>

                <div className="checkbox-wrapper">
                    <label>
                        <input type="checkbox" />
                        <span className="checkbox"></span>
                    </label>
                    <div className="checkbox-color checkbox-color2"></div>
                </div>

                <div className="checkbox-wrapper">
                    <label>
                        <input type="checkbox" />
                        <span className="checkbox"></span>
                    </label>
                    <div className="checkbox-color checkbox-color3"></div>
                </div>
            </div>
        </>
    )

}

export default Filters