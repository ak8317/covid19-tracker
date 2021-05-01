import {
  GET_COUNTRIES_DATA,
  GET_COUNTRY,
  SET_LOADING,
  CURRENT_COUNTRY,
} from '../types';
import CountryContext from './countryContext';
import CountryReducer from './countryReducer';
import axios from 'axios';
import { useReducer } from 'react';

const CountryState = (props) => {
  const initialState = {
    countriesData: {},
    currentCountry: {},

    loading: false,
  };
  const [state, dispatch] = useReducer(CountryReducer, initialState);

  //get countries data
  const getCountriesData = async () => {
    setLoading();

    const res = await axios.get('https://api.covid19api.com/summary');

    dispatch({
      type: GET_COUNTRIES_DATA,
      payload: res.data,
    });

    setCurrentCountry('Global');
  };

  //set current Country
  const setCurrentCountry = (country) => {
    dispatch({
      type: CURRENT_COUNTRY,
      payload: country,
    });
  };

  //set loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  return (
    <CountryContext.Provider
      value={{
        countriesData: state.countriesData,
        currentCountry: state.currentCountry,
        loading: state.loading,
        getCountriesData,
        setCurrentCountry,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
