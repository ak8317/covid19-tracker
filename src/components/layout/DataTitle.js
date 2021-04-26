import React, { useContext } from 'react';
import Moment from 'react-moment';
import DataContext from '../../context/dataContext';

const DataTitle = () => {
  const dataContext = useContext(DataContext);

  const { currentState, loading } = dataContext;

  if (loading) {
    return <h2>Loading..</h2>;
  } else {
    return (
      <>
        <div
          className='all-center'
          style={{ marginBottom: '2rem', marginTop: '1rem' }}
        >
          <h2 className='text-center' style={{ fontWeight: 'bold' }}>
            {currentState.state && currentState.state === 'Total'
              ? 'India'
              : currentState.state}
          </h2>
          <Moment format='MMMM Do YYYY,h:mm:ss a'>
            {Date(currentState.lastupdatedtime)}
          </Moment>
        </div>
      </>
    );
  }
};

export default DataTitle;
