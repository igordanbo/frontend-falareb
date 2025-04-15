import './TableModel.css';
import TableHeader from './TableHeader';
import TableItem from './TableItem';
import TableFooter from './TableFooter';
import EmptyItem from './EmptyItem';
import LoaderItem from './LoaderItem';
import Search from '../Search';
import CheckboxStatus from './CheckboxStatus';
import Filters from '../Filters';

import React, { useEffect, useState } from 'react';

const TableModel = () => {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState([]);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [sortBy, setSortBy] = useState('data');
    
  useEffect(() => {
    setLoading(true);
  
    const params = new URLSearchParams();
  
    params.append('page', currentPage);
    if (search) params.append('search', search);
    if (category) params.append('category', category);
    if (sortBy) params.append('order_by', sortBy);
    if (statusFilter.length > 0) params.append('status', statusFilter.join(','));
  
    fetch(`http://127.0.0.1:8000/api/produtos?${params.toString()}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data.data || []);
        setTotal(data.total);
        setLastPage(data.last_page);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
      });
  
  }, [currentPage, search, category, sortBy, statusFilter]);
   
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCurrentPage(1);
  }

  const handleCheckboxChange = (status) => {
    setStatusFilter(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status) // desmarca
        : [...prev, status]              // marca
    );
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setCurrentPage(1);
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };


    return (
        <div className="table-container">
     
            <TableHeader 
              tableTitle="Listagem de Solicitações"
            >

            <Filters 
              valueSelect={category} 
              onChangeSelect={handleCategoryChange}
            />

            <CheckboxStatus 
              checkedConcluido={statusFilter.includes('Concluído')}
              onChangeConcluido={() => handleCheckboxChange('Concluído')}

              checkedAgendado={statusFilter.includes('Agendado')}
              onChangeAgendado={() => handleCheckboxChange('Agendado')}

              checkedEmEspera={statusFilter.includes('Em Espera')}
              onChangeEmEspera={() => handleCheckboxChange('Em Espera')}
            />
  
            <Search
              valueSearch={search}
              actionOnChange={handleSearchChange}
            />
                
            </TableHeader>

          
            {loading ? (
                <LoaderItem/>
              ) : products.length === 0 ? (
                <EmptyItem />
              ) : (
                
                products.map(product => (
                  <TableItem
                    key={product.id} 
                    status={product.status}
                    name={product.description}
                    address={product.address}
                    email={product.user?.email}
                    phone={product.user?.phone}
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
              dataLength={products.length} 
              dataTotal={total}
            />
          

        </div>
        
    );
    }

export default TableModel;