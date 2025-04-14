import './Search.css'
import SearchIcon from '@mui/icons-material/Search';

const Search = ({valueSearch, actionOnChange}) => {

    return (
        <div className="search-box">
        <SearchIcon/>
        <input type="text" placeholder="Pesquisar" value={valueSearch} onChange={actionOnChange}/>
      </div>
    )

}

export default Search