import { createSelector } from "reselect";

export const getCountry = (state) => state.country.country;
export const getHistory = (state) => state.history;

export const getArrCountry = createSelector(getCountry, (country) => {
  const key = Object.keys(country);

  const ArrCountry = key.map((elem) => {
    return country[elem];
  });

  return ArrCountry;
});
