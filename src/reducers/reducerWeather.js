import { FETCH_WEATHER } from "../actions/index";

const reducerWeather = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log("Action Recived", action.payload.data);
      return [action.payload.data, ...state];
    default:
      return state;
  }
};

export { reducerWeather };
