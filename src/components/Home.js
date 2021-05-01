import React, { useContext } from 'react';
import DataBox from './layout/DataBox';
import DataSelect from './layout/DataSelect';
import DataTitle from './layout/DataTitle';
import Spinner from './layout/Spinner';
import DataContext from '../context/dataContext';
const Home = () => {
  const dataContext = useContext(DataContext);

  const { loading } = dataContext;

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <DataTitle />
      <DataBox />
      <DataSelect />
    </>
  );
};

export default Home;
