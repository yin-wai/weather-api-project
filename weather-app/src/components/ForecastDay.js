import React, { useState } from 'react'
import { correctFormat } from './helperFunctions/sortForecast'

import ForecastDayExtra from './ForecastDayExtra'

const ForecastDay = ({ day, date, hour }) => {
  const [displayExtra, setDisplayExtra] = useState(false)
  const toggleDisplay = () => {
    setDisplayExtra(!displayExtra)
  }
  const displayShowHide = displayExtra ? 'Expand' : 'Condense'

  console.log(hour)
  return (
    <>
      <div className="forecast-inner-outer-container">
        <div className="forecast-inner-container">
          <div><span className="forecast-text"><span>Date: {correctFormat(date)}</span><span>{day.condition.text.toLowerCase()} </span></span></div>
          <div><span className="forecast-text"><span>Average Temperature:</span><span>{day.avgtemp_c} &#8451;</span></span></div>
          <div><span className="forecast-text"><span>Average Humidity:</span><span>{day.avghumidity} g/kg</span></span></div>
          <div><span className="forecast-text"><span>Chance of rain:</span><span>{day.daily_chance_of_rain} &#37;</span></span></div>
          <div><span className="forecast-text forecast-bottom"><span>Chance of snow:</span><span>{day.daily_chance_of_snow} &#37;</span></span></div>
        </div>
        <div className="forecast-expand">
          <span className="forecast-options-text inline-block click" onClick={toggleDisplay}>{displayShowHide}</span>
        </div>
        {!displayExtra ?
          <>
            <ForecastDayExtra hour={hour}/>
          </>
          :
          <>
          </>
        }
      </div>
    </>
  )
}

export default ForecastDay