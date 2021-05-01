import React, { useContext } from 'react';
import Title from './Title';
import Spinner from '../layout/Spinner';
import CountryContext from '../../context/country/countryContext';
import BoxCases from './BoxCases';
import SelectBox from './SelectBox';

const Index = () => {
  const countryContext = useContext(CountryContext);
  const { loading } = countryContext;

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Title />

      <BoxCases />
      <SelectBox />
    </>
  );
};

export default Index;
