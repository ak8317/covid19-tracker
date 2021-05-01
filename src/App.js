import React, { useContext, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import DataContext from './context/dataContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chart from './components/chart/Chart';
import Home from './components/Home';
import CountryContext from './context/country/countryContext';
import Country from './components/country';
import './assets/output.css';
const App = () => {
  const dataContext = useContext(DataContext);
  const countryContext = useContext(CountryContext);

  const { getData } = dataContext;
  const { getCountriesData } = countryContext;

  useEffect(() => {
    getData();
    getCountriesData();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <div className='container'>
            <Route exact path='/' component={Home} />
            <Route exact path='/countries' component={Country} />
            <Route exact path='/graphs' component={Chart} />
          </div>
        </Switch>
      </Router>
    </>
  );
};

export default App;
