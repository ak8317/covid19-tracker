import React, { useContext } from 'react';
import Moment from 'react-moment';
import CountryContext from '../../context/country/countryContext';

const Title = () => {
  const countryContext = useContext(CountryContext);

  const { currentCountry } = countryContext;

  return (
    <div className='text-center'>
      <h2 className='text-3xl font-bold'>
        {currentCountry.hasOwnProperty('Country')
          ? currentCountry.Country
          : 'Global'}
      </h2>
      <div className='text-2xl mt-4 mb-10'>
        <Moment format='MMMM Do YYYY,h:mm:ss a'>
          {Date(currentCountry.Date)}
        </Moment>
      </div>
    </div>
  );
};

export default Title;
