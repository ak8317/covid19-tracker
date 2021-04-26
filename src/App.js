import React, { useContext, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import DataTitle from './components/layout/DataTitle';
import DataBox from './components/layout/DataBox';
import DataSelect from './components/layout/DataSelect';
import DataContext from './context/dataContext';

const App = () => {
  const dataContext = useContext(DataContext);

  const { getData } = dataContext;

  useEffect(() => {
    getData();

    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <div className='container'>
        <DataTitle />
        <DataBox />
        <DataSelect />
      </div>
    </>
  );
};

export default App;
