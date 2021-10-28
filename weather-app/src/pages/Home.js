import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
    const [locations, setLocations] = useState('')
    const [currentCondition, setCurrentCondition] = useState('')
    const [currentTemp, setCurrentTemp] = useState('')
    const [forecast, setForecast] = useState('')
    const [locationFormValue, setLocationFormValue] = useState('')
    const [formSubmit, setFormSubmit] = useState()
        
    const handleLocationChange = (event) => {
        setLocationFormValue(event.target.value)
      }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setFormSubmit(locationFormValue)
      }

    const handleFormReset = () => {
        setLocations('')
        setCurrentCondition('')
        setFormSubmit('')
        setLocationFormValue('')
        setCurrentTemp('')
        setForecast('')
      }

    useEffect(() => {
     async function fetchLocation() {
      const config = {
        method: 'get',
        url: `http://api.weatherapi.com/v1/forecast.json?key=8b928a9753d74262887160151212610&q=${formSubmit}&days=1&aqi=yes&alerts=yes&lang=eng&hour=20`,
        headers: { 
                'api': '8b928a9753d74262887160151212610'
             }
}
try {
const response = await axios(config)
const forecastDay = response.data.forecast.forecastday
setForecast(forecastDay[0].day.condition.text)
setLocations(response.data.location)
setCurrentCondition(response.data.current.condition.text)
setCurrentTemp(response.data.current.temp_c)
} catch (err) {}
}
fetchLocation()
}, [formSubmit])

    return (
        <>
        {!locations ?
        <div>
        <form onSubmit={handleSubmit}>
            <input name ='location' value={formSubmit.location} onChange={handleLocationChange}></input>
        </form>
        </div>
        :
        <div>
             <p>
               In {locations.name}, at the moment, the weather is {currentCondition.toLocaleLowerCase()} with a temperature of<span> </span>
               {currentTemp} degree celsius. The forecast for the rest of the day is {forecast.toLocaleLowerCase()}. 
             </p>
             <button onClick={handleFormReset}>search different location</button>
        </div>
        }
        </>
    )
}

export default Home
