import React, { useState } from 'react'
import { correctFormat } from '../helper/SortForecast'

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
      <div>
        <div>
          <div><span><span>Date: {correctFormat(date)}</span><span>{day.condition.text.toLowerCase()} </span></span></div>
          <div><span><span>Average Temperature:</span><span>{day.avgtemp_c} &#8451;</span></span></div>
          <div><span><span>Average Humidity:</span><span>{day.avghumidity} g/kg</span></span></div>
          <div><span><span>Chance of rain:</span><span>{day.daily_chance_of_rain} &#37;</span></span></div>
          <div><span><span>Chance of snow:</span><span>{day.daily_chance_of_snow} &#37;</span></span></div>
        </div>
        <div>
          <span onClick={toggleDisplay}>{displayShowHide}</span>
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