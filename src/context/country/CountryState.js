import {
  GET_COUNTRIES_DATA,
  SET_LOADING,
  CURRENT_COUNTRY,
  SET_BTN,
  CLEAR_BTN,
} from '../types';
import CountryContext from './countryContext';
import CountryReducer from './countryReducer';
import axios from 'axios';
import { useReducer } from 'react';

const CountryState = (props) => {
  const initialState = {
    countriesData: {},
    currentCountry: {},
    btnState: false,
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
  //set btn
  const setBtn = () => {
    dispatch({
      type: SET_BTN,
    });
  };
  const clearBtnState = () => {
    dispatch({
      type: CLEAR_BTN,
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
        btnState: state.btnState,
        getCountriesData,
        setCurrentCountry,
        setBtn,
        clearBtnState,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
