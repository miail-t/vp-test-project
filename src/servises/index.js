import axios from "axios";

export const getCountru = () =>
  axios.get("https://www.cbr-xml-daily.ru/daily_json.js");
