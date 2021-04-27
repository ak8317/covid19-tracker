import { GET_DATA, SET_CURRENT_STATE, SET_LOADING } from './types';
import React, { useReducer } from 'react';
import DataContext from './dataContext';
import DataReducer from './dataReducer';
import axios from 'axios';

const DataState = (props) => {
  const initialState = {
    statesData: [],
    currentState: {},
    timeSeriesData: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(DataReducer, initialState);

  //get data
  const getData = async () => {
    setLoading();

    const res = await axios.get('https://api.covid19india.org/data.json');

    dispatch({
      type: GET_DATA,
      payload: res.data,
    });

    setCurrentState('Total');
  };

  //set currentState

  const setCurrentState = (state) => {
    setLoading();
    dispatch({
      type: SET_CURRENT_STATE,
      payload: state,
    });

    //console.log(state);
  };

  //set State

  //set loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };
  return (
    <DataContext.Provider
      value={{
        statesData: state.statesData,
        currentState: state.currentState,
        timeSeriesData: state.timeSeriesData,
        loading: state.loading,
        getData,
        setCurrentState,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
