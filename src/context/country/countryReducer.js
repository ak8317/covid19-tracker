import {
  GET_COUNTRIES_DATA,
  SET_LOADING,
  CURRENT_COUNTRY,
  SET_BTN,
  CLEAR_BTN,
} from '../types';

const countryReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COUNTRIES_DATA:
      return {
        ...state,
        countriesData: payload,
        loading: false,
      };
    case CURRENT_COUNTRY:
      if (payload === 'Global') {
        return {
          ...state,
          currentCountry: state.countriesData.Global,
          loading: false,
        };
      } else {
        return {
          ...state,
          currentCountry: state.countriesData.Countries.filter(
            (country) => country.Country === payload
          )[0],
        };
      }
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
export default countryReducer;
