import React, { useContext } from 'react';
import CountryContext from '../../context/country/countryContext';

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

const BoxCases = () => {
  const countryContext = useContext(CountryContext);
  const { currentCountry, countriesData } = countryContext;

  return (
    <div className='grid md:grid-cols-3 gap-4'>
      <div className='shadow-md bg-blue-100 p-10 text-center rounded'>
        <h3 className='text-3xl text-blue-900 font-bold mb-4'>Cases</h3>
        <div className='text-2xl mb-4'>
          New:{' '}
          <span className='font-bold'>
            {formatNumber(currentCountry.NewConfirmed)}
          </span>
        </div>
        <div className='text-2xl mb-4'>
          Total:{' '}
          <span className='font-bold'>
            {formatNumber(currentCountry.TotalConfirmed)}
          </span>
        </div>
      </div>
      <div className='shadow-md bg-blue-100 p-10 text-center rounded'>
        <h3 className='text-3xl text-blue-900 font-bold mb-4'>Recovered</h3>
        <div className='text-2xl mb-4'>
          New:
          <span style={{ fontWeight: 'bold' }}>
            {formatNumber(currentCountry.NewRecovered)}
          </span>
        </div>
        <div className='text-2xl mb-4'>
          Total:{' '}
          <span style={{ fontWeight: 'bold' }}>
            {formatNumber(currentCountry.TotalRecovered)}
          </span>
        </div>
      </div>
      <div className='shadow-md bg-blue-100 p-10 text-center rounded'>
        <h3 className='text-3xl text-blue-900 font-bold mb-4'>Deaths</h3>
        <div className='text-2xl mb-4'>
          New:{' '}
          <span style={{ fontWeight: 'bold' }}>
            {formatNumber(currentCountry.NewDeaths)}
          </span>
        </div>
        <div className='text-2xl mb-4'>
          Total:{' '}
          <span style={{ fontWeight: 'bold' }}>
            {formatNumber(currentCountry.TotalDeaths)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BoxCases;
