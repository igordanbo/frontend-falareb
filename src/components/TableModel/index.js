import './TableModel.css';
import TableHeader from './TableHeader';
import TableItem from './TableItem';
import TableFooter from './TableFooter';
import EmptyItem from './EmptyItem';
import LoaderItem from './LoaderItem';
import Search from '../Search';

import React, { useEffect, useState } from 'react';

const TableModel = () => {

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');
  const [sortBy, setSortBy] = useState('asc');
    
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/produtos?page=${currentPage}`)
      .then(response => response.json())
      .then(data => {
        setUsers(data.data || []);
        setLastPage(data.last_page);
        setTotal(data.total);
        setLoading(false);
      }, [])
      .catch(error => console.error('Erro ao buscar dados', error)
    );
  }, [currentPage]);

  const usersFiltered = users
    .filter(user => {
      return(
        user.description?.toLowerCase().includes(search.toLowerCase()) ||
        user.address?.toLowerCase().includes(search.toLowerCase()) ||
        user.user?.name.toLowerCase().includes(search.toLowerCase()) ||
        user.user?.email.toLowerCase().includes(search.toLowerCase()) ||
        user.user?.phone.toLowerCase().includes(search.toLowerCase())
      )
    })
    .filter(user => 
      category ? user.category === category : true
    )
    .sort((a, b) => {
      if(sortBy === 'name'){
        return a.name.localeCompare(b.name);
      } else if(sortBy === 'data'){
        return new Date(a.date) - new Date(b.date);
      } else {
        return 0;
      }
    })


    return (
        <div className="table-container">
     
            <TableHeader 
              tableTitle="Listagem de Solicitações"
            >
              <Search
                valueSearch={search}
                actionOnChange={e => setSearch(e.target.value)}/>
              </TableHeader>

          
              {loading ? (
                <LoaderItem/>
              ) : users.length === 0 ? (
                <EmptyItem />
              ) : (
                
                usersFiltered.map(user => (
                  <TableItem
                    key={user.id} 
                    name={user.description}
                    address={user.address}
                    email={user.user?.email}
                    phone={user.user?.phone}
                  />
                ))
              )}
              
            <TableFooter 
              actionOnClickNext={() => setCurrentPage(p => Math.min(p + 1, lastPage))}
              actionOnClickPrev={() => setCurrentPage(p => Math.max(p - 1, 1))} 
              disabledNext={currentPage === lastPage} 
              disabledPrev={currentPage === 1} 
              currentPage={currentPage} 
              lastPage={lastPage} 
              dataLength={users.length} 
              dataTotal={total}
              />
          

        </div>
        
    );
    }

export default TableModel;