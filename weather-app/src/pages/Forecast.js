import { useState, useEffect } from 'react'
import axios from 'axios'

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
// const forecastDay = response.data.forecast.forecastday
// console.log('response.data.location', response.data.forecast)
setLocations(response.data.location)
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
        <div className='forecast'>
        {!locations ?
        <div >
        <form onSubmit={handleSubmit}>
          <div>
            <input placeholder='Choose your location' onChange={handleLocationChange} name="location" value={formSubmit.location}/>
            <input 
              onChange={handleLocationChange}
              // onWheel={(event) => event.target.blur()}
              value={formSubmit.days}
              type="number"
              name="days"
              min="1"
              max="3"
            />
          </div>
          <div>
            <input type='submit' value='Submit' onClick={handleSubmit}/>
          </div>
        </form>
        </div>
        :
        <div className='forecast-result'>
          <div className="display-flex-row">
            <div className="main-container">
              <span id="heading" className="block"><span className="main-display-text">The weather in {weather.location.name} is {weather.current.condition.text.toLowerCase()} </span></span>
              <span id="heading" className="forecast-text-astro flex-space-between"><span>Sunrise: {trimSunrise(weather.forecast.forecastday[0].astro.sunrise)}</span><span>Sunset: {trimSunset(weather.forecast.forecastday[0].astro.sunset)}</span></span>
              <span className="main-options-text block click" onClick={resetForm}>New search</span>
            </div>
            <div className="forecast-container">
              {forecasts.map(forecast => (
                <ForecastDay key={forecast.date} {...forecast} />
              ))}
            </div>
          </div>
             <button onClick={handleFormReset}>Search another location</button>
        </div>
        }
       </div>
        </>
    )
}

export default Forecast
