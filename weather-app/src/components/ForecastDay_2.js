import React, { useState } from 'react'
import { correctFormat } from '../helper/SortForecast'

// import ForecastDayExtra from './ForecastDayExtra'
import ForecastDayExtra_2 from './ForecastDayExtra_2'

const ForecastDay_2 = ({ day, date, hour }) => {
  const [displayExtra, setDisplayExtra] = useState(false)
  const toggleDisplay = () => {
    setDisplayExtra(!displayExtra)
  }
  const displayShowHide = displayExtra ? 'Expand' : 'Condense'

  return (
    <>
      <div>
          <div>
          <p>Date: {correctFormat(date)}</p><p>{day.condition.text.toLowerCase()}</p>
          <p>Average Temperature:</p><p>{day.avgtemp_c} &#8451;</p>
          <p>Average Humidity:</p><p>{day.avghumidity} g/kg</p>
          <p>Chance of rain:</p><p>{day.daily_chance_of_rain} &#37;</p>
          <p>Chance of snow:</p><p>{day.daily_chance_of_snow} &#37;</p>
          </div>
        </div>
        
        <div>
          <span onClick={toggleDisplay}>{displayShowHide}</span>
        </div>
        {!displayExtra ?
          <>
            <ForecastDayExtra_2 hour={hour}/>
          </>
          :
          <>
          </>
        }
    </>
  )
}

export default ForecastDay_2