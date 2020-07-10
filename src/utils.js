import {ISOStringProperties, MILLISECONDS_IN_SECOND} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const formatTime = (seconds) => {
  const formatedTime = new Date(seconds * MILLISECONDS_IN_SECOND).toISOString()
    .substr(ISOStringProperties.START_OF_HOURS, ISOStringProperties.LENGTH_OF_HH_MM_SS_SUBSTRING);

  return formatedTime;
};


