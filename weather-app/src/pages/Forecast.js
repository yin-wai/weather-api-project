import { useState, useEffect } from 'react'
import axios from 'axios'
import ForecastDay from '../components/ForecastDay'
import { trimSunrise, trimSunset } from '../helper/GetTime'

const Forecast = () => {
    const [locations, setLocations] = useState('')
    const [formSubmit, setFormSubmit] = useState({
        location: '',
        language: '',
        days: '',
      })
    const [finalFormSubmit, setFinalFormSubmit] = useState({
        location: '',
        language: 'eng',
        days: '',
    })
    const [currentCondition, setCurrentCondition] = useState('')
    const [forecastDay, setForecastDay] = useState('')
    const [forecasts, setForecasts] = useState([])
    
    const handleLocationChange = (event) => {
        const { name, value } = event.target
    setFormSubmit({
      ...formSubmit,
      [name]: value,
    })    
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        setFinalFormSubmit(formSubmit)
      }

    const handleFormReset = () => {
        setLocations('')
        setFormSubmit('')
        setCurrentCondition('')
    }

    useEffect(() => {
      console.log("reach")
     async function fetchLocation() {
      const config = {
        method: 'get',
        url: `http://api.weatherapi.com/v1/forecast.json?key=8b928a9753d74262887160151212610&q=${finalFormSubmit.location}&days=${finalFormSubmit.days}&lang=${finalFormSubmit.language}`,
        headers: { 
                'api': '8b928a9753d74262887160151212610'
             }
};
try {
  console.log("reach.try")
const response = await axios(config)
console.log(response)
const forecastDay = response.data.forecast.forecastday
setForecastDay(forecastDay[0])
setLocations(response.data.location)
setCurrentCondition(response.data.current.condition.text)
setForecasts(forecastDay)
// console.log(locations)
// console.log(forecastDay)
} catch (err) {
    console.log(err.response)
}
}
fetchLocation()
}, [finalFormSubmit])
    return (
        <>
        {/* <div className='forecast'> */}
        {!locations ?
        <div >
        <form onSubmit={handleSubmit} className="inline-block home-form">
          <div>
            <input placeholder='Choose your location' onChange={handleLocationChange} name="location" value={formSubmit.location} className="home-input click"/>
            <input 
              onChange={handleLocationChange}
              value={formSubmit.days}
              className="number-input main-text click"
              type="number"
              name="days"
              min="1"
              max="3"
            />
          </div>
          <div>
            <input type='submit' value='Submit' onClick={handleSubmit} style={{ position: 'absolute', left: '-9999px' }} />
          </div>
        </form>
        </div>
        :
        <div className='display-flex-row'>
            <div className='main-container'>
              <span id="heading" className="block"><span className='main-display-text'>The weather in {locations.name} is {currentCondition.toLowerCase()} </span></span>
              <span id="heading" className="forecast-text-astro flex-space-between"><span>Sunrise: {trimSunrise(forecastDay.astro.sunrise)}</span><span>Sunset: {trimSunset(forecastDay.astro.sunset)}</span></span>
              <button className="main-options-text block click" onClick={handleFormReset}>Search another location</button>
            </div>
            <div className="forecast-container">
              {forecasts.map(forecast => (
                <ForecastDay key={forecast.date} {...forecast} />
              ))}
            </div>
          </div>
          }
       
        </>
    )
}

export default Forecast
