import axios from "axios";
import { setApiKey } from "./auth";

const baseUrl = "http://api.weatherapi.com/v1/";

export const fetchLocation = async (formSubmit, apiKey) => {
  const config = {
    method: "get",
    url: `${baseUrl}forecast.json?key=${apiKey}&q=${formSubmit.location}&days=1&aqi=yes&alerts=yes&lang=${formSubmit.language}&hour=${formSubmit.time}`,
    headers: { api: `${setApiKey()}` },
  };
  try {
    const response = await axios(config);
    return response.data.location;
  } catch (err) {}
};
fetchLocation();

export const fetchCurrentCondition = async (formSubmit, apiKey) => {
  const config = {
    method: "get",
    url: `${baseUrl}forecast.json?key=${apiKey}&q=${formSubmit.location}&days=1&aqi=yes&alerts=yes&lang=${formSubmit.language}&hour=${formSubmit.time}`,
    headers: { api: `${setApiKey()}` },
  };
  try {
    const response = await axios(config);
    return response.data.current;
  } catch (err) {}
};
fetchCurrentCondition();

export const fetchForecast = async (formSubmit, apiKey) => {
  const config = {
    method: "get",
    url: `${baseUrl}forecast.json?key=${apiKey}&q=${formSubmit.location}&days=1&aqi=yes&alerts=yes&lang=${formSubmit.language}&hour=${formSubmit.time}`,
    headers: { api: `${setApiKey()}` },
  };
  try {
    const response = await axios(config);
    const forecastDay = response.data.forecast.forecastday;
    return forecastDay[0].day.condition.text;
  } catch (err) {}
};
fetchForecast();

export const fetchHour = async (formSubmit, apiKey) => {
  const config = {
    method: "get",
    url: `${baseUrl}forecast.json?key=${apiKey}&q=${formSubmit.location}&days=1&aqi=yes&alerts=yes&lang=${formSubmit.language}&hour=${formSubmit.time}`,
    headers: { api: `${setApiKey()}` },
  };
  try {
    const response = await axios(config);
    const forecastDay = response.data.forecast.forecastday;
    const hour = forecastDay[0].hour;
    return hour[0].condition.text;
  } catch (err) {}
};
fetchHour();

// edit below
// export const register = (data) => {
//   return makeAxiosRequest('/register', data)
// }

const makeAxiosRequest = async (url, data) => {
  const config = getAxiosRequestConfig(url, data);

  const response = await axios(config);
  return response.data;
};

export const getAxiosRequestConfig = (apiKey, formSubmit) => {
  const config = {
    method: "get",
    url: `${baseUrl}forecast.json?key=${apiKey}&q=${formSubmit.location}&days=1&aqi=yes&alerts=yes&lang=${formSubmit.language}&hour=${formSubmit.time}`,
    headers: { api: `${setApiKey()}` },
  };
  return config;
};
