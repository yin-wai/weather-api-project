import React from 'react'

import { trimHourTime, wholeNumTemp, windDirection, windSpeed } from './helperFunctions/getTime'

const ForecastDayExtra = ({ hour }) => {

  console.log(hour)
  return (
    <>
      <div className="forecast-exapanded-title-div">
        <span className="forecast-expanded-title">Hour</span>
        <span className="forecast-expanded-title">Temp &#8451;</span>
        <span className="forecast-expanded-title">Rain &#37;</span>
        <span className="forecast-expanded-title">Wind Dir.</span>
        <span className="forecast-expanded-title">Speed mph.</span>
      </div>
      {hour.map(specificHour => (
        <div key="{specificHour.time_epoch}" className="forecast-expanded-div">
          <span className="forecast-expanded">{trimHourTime(specificHour.time)}</span>
          <span className="forecast-expanded">{wholeNumTemp(specificHour.temp_c)}</span>
          <span className="forecast-expanded">{specificHour.chance_of_rain}</span>
          <span className="forecast-expanded">{windDirection(specificHour.wind_dir)}</span>
          <span className="forecast-expanded">{windSpeed(specificHour.wind_mph)}</span>
        </div>
      ))}
    </>
  )
}

export default ForecastDayExtra