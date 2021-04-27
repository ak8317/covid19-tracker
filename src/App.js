import React, { useContext, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import DataTitle from './components/layout/DataTitle';
import DataBox from './components/layout/DataBox';
import DataSelect from './components/layout/DataSelect';
import DataContext from './context/dataContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chart from './components/chart/Chart';

const App = () => {
  const dataContext = useContext(DataContext);

  const { getData } = dataContext;

  useEffect(() => {
    getData();

    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <div className='container'>
            <Route
              exact
              path='/'
              render={(props) => (
                <>
                  <DataTitle />
                  <DataBox />
                  <DataSelect />
                </>
              )}
            />
            <Route exact path='/graphs' component={Chart} />
          </div>
        </Switch>
      </Router>
    </>
  );
};

export default App;
