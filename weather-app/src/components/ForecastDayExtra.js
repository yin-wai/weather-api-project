import React from 'react'

import { trimHourTime, wholeNumTemp, windDirection, windSpeed } from '../helper/GetTime'

const ForecastDayExtra = ({ hour }) => {

  console.log(hour)
  return (
    <>
      <div>
        <span>Hour</span>
        <span>Temp &#8451;</span>
        <span>Rain &#37;</span>
        <span>Wind Dir.</span>
        <span>Speed mph.</span>
      </div>
      {hour.map(specificHour => (
        <div key="{specificHour.time_epoch}" className="forecast-expanded-div">
          <span>{trimHourTime(specificHour.time)}</span>
          <span>{wholeNumTemp(specificHour.temp_c)}</span>
          <span>{specificHour.chance_of_rain}</span>
          <span>{windDirection(specificHour.wind_dir)}</span>
          <span>{windSpeed(specificHour.wind_mph)}</span>
        </div>
      ))}
    </>
  )
}

export default ForecastDayExtra