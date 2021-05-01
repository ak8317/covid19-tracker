import React, { useContext, useEffect, useState } from 'react';
import CountryContext from '../../context/country/countryContext';
const SelectBox = () => {
  const countryContext = useContext(CountryContext);
  const [selected, setSelected] = useState('');
  const {
    countriesData,
    setCurrentCountry,
    setBtn,
    clearBtnState,
    btnState,
    currentCountry,
  } = countryContext;

  useEffect(() => {
    if (currentCountry.hasOwnProperty('Country') !== false) {
      setSelected(currentCountry.Country);
    }

    //eslint-disable-next-line
  }, [selected]);

  const onChange = (e) => {
    setSelected(e.target.value);
    setCurrentCountry(e.target.value);
    setBtn();
  };
  const clearBtn = () => {
    setSelected('');
    setCurrentCountry('Global');
    clearBtnState();
  };
  return (
    <div>
      <select
        className='form-select mt-10 block w-full border p-3 rounded'
        name='state'
        value={selected}
        id='state'
        onChange={onChange}
      >
        <option value='' disabled>
          Select a Country
        </option>
        {countriesData &&
          countriesData.Countries &&
          countriesData.Countries.map((el, i) => (
            <option key={i} value={el.Country}>
              {el.Country}
            </option>
          ))}
      </select>
      {btnState && (
        <button
          className='bg-blue-500 rounded p-3 mt-10 focus:outline-none hover:bg-blue-800'
          style={{ marginLeft: '1rem' }}
          onClick={clearBtn}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default SelectBox;
