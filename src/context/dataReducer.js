import {
  GET_DATA,
  SET_CURRENT_STATE,
  SET_LOADING,
  CLEAR_BTN,
  SET_BTN,
} from './types';
import { monthConversion } from './monthConversion';

const dataReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        statesData: action.payload.statewise,
        timeSeriesData: monthConversion(action.payload['cases_time_series']),
        loading: false,
      };
    case SET_CURRENT_STATE:
      return {
        ...state,
        currentState: state.statesData.filter(
          (el) => el.state === action.payload
        )[0],
        loading: false,
      };
    case SET_BTN:
      return {
        ...state,
        btnState: true,
      };
    case CLEAR_BTN:
      return {
        ...state,
        btnState: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default dataReducer;
