import React, { useContext } from 'react';
import Moment from 'react-moment';
import DataContext from '../../context/dataContext';

const DataTitle = () => {
  const dataContext = useContext(DataContext);

  const { currentState } = dataContext;

  return (
    <div className='text-center'>
      <h2 className='text-3xl font-bold'>
        {currentState.state && currentState.state === 'Total'
          ? 'India'
          : currentState.state}
      </h2>
      <div className='text-2xl mt-4 mb-10'>
        <Moment format='MMMM Do YYYY,h:mm:ss a'>
          {Date(currentState.lastupdatedtime)}
        </Moment>
      </div>
    </div>
  );
};

export default DataTitle;
