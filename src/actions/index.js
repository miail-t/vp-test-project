import * as action from "../action-type";
import { getCountru } from "../servises";

export const addHistory = (history) => ({
  type: action.GET_HISTORY,
  history,
});

export const fetchRequestDetailProfile = () => ({
  type: action.FETCH_REQUEST_COUNTRY,
  isLoading: true,
});

export const fetchResolveDetailProfile = (country) => ({
  type: action.FETCH_RESOLVE_COUNTRY,
  isLoading: false,
  country,
});

export const fetchResolve = () => ({ type: action.FETCH_RESOLVE });

export const fetchCountry = () => (dispatch) => {
  dispatch(fetchRequestDetailProfile());
  return getCountru()
    .then((response) => {
      dispatch(fetchResolveDetailProfile(response.data.Valute));
    })
    .catch((error) => {
      dispatch(fetchResolve(error));
      throw error;
    });
};
