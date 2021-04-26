import React, { useContext } from 'react';
import DataContext from '../../context/dataContext';
import Spinner from './Spinner';

function formatNumber(value) {
  var val = Math.abs(value);
  if (val >= 10000000) {
    val = (val / 10000000).toFixed(1) + ' Cr';
  } else if (val >= 100000) {
    val = (val / 100000).toFixed(1) + ' Lac';
  } else if (val >= 1000) {
    val = (val / 1000).toFixed(1) + ' K';
  }
  return val;
}
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
          <div className='cases' style={{ color: '#ff3324' }}>
            {formatNumber(confirmed)}
          </div>
        </div>
        <div className='col'>
          <span className='col-title'>Active </span>
          <div className='cases' style={{ color: '#ffbf00' }}>
            {formatNumber(active)}
          </div>
        </div>
        <div className='col'>
          <span className='col-title'> Recovered </span>
          <div className='cases' style={{ color: '#1cb55d' }}>
            {formatNumber(recovered)}
          </div>
        </div>
        <div className='col'>
          <span className='col-title'>Deaths</span>{' '}
          <div className='cases' style={{ color: 'silver' }}>
            {formatNumber(deaths)}
          </div>
        </div>
      </div>
    </>
  );
};

export default DataBox;
