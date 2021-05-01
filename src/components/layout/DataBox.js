import React, { useContext } from 'react';
import DataContext from '../../context/dataContext';

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

  const { currentState } = dataContext;

  const { confirmed, active, deaths, recovered } = currentState;

  return (
    <>
      <div className='grid md:grid-cols-4 gap-4'>
        <div className='shadow-md bg-blue-100 p-10 text-center rounded'>
          <div className='text-2xl text-blue-900 font-bold mb-4'>Confirmed</div>
          <div className='text-3xl mb-4 text-red-500'>
            {formatNumber(confirmed)}
          </div>
        </div>
        <div className='shadow-md bg-blue-100 p-10 text-center rounded'>
          <div className='text-2xl text-blue-900 font-bold mb-4'>Active </div>
          <div className='text-3xl mb-4 text-yellow-400'>
            {formatNumber(active)}
          </div>
        </div>
        <div className='shadow-md bg-blue-100 p-10 text-center rounded'>
          <div className='text-2xl text-blue-900 font-bold mb-4'>
            {' '}
            Recovered{' '}
          </div>
          <div className='text-3xl mb-4 text-green-400'>
            {formatNumber(recovered)}
          </div>
        </div>
        <div className='shadow-md bg-blue-100 p-10 text-center rounded'>
          <div className='text-2xl text-blue-900 font-bold mb-4'>Deaths</div>{' '}
          <div className='text-3xl mb-4 text-gray-400'>
            {formatNumber(deaths)}
          </div>
        </div>
      </div>
    </>
  );
};

export default DataBox;
