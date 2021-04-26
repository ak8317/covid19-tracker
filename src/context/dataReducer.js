import { GET_DATA, SET_CURRENT_STATE, SET_LOADING } from './types';

const dataReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        statesData: action.payload,
        loading: false,
      };
    case SET_CURRENT_STATE:
      //console.log(action.payload);

      return {
        ...state,
        currentState: state.statesData.filter(
          (el) => el.state === action.payload
        )[0],
        loading: false,
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
