import React, { useContext } from 'react';
import DataContext from '../../context/dataContext';
import Spinner from './Spinner';

const DataBox = () => {
  const dataContext = useContext(DataContext);

  const { currentState, loading } = dataContext;

  if (loading) {
    return <Spinner />;
  }

  const { confirmed, active, deaths, recovered } = currentState;

  return (
    <>
      <div className='grid-4'>
        <div className='col'>
          <span className='col-title'>Confirmed</span>
          <div className='cases'>{confirmed}</div>
        </div>
        <div className='col'>
          <span className='col-title'>Active </span>
          <div className='cases'>{active}</div>
        </div>
        <div className='col'>
          <span className='col-title'> Recovered </span>
          <div className='cases'>{recovered}</div>
        </div>
        <div className='col'>
          <span className='col-title'>Deaths</span>{' '}
          <div className='cases'>{deaths}</div>
        </div>
      </div>
    </>
  );
};

export default DataBox;
