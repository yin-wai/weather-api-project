import { useState, useEffect } from 'react'
import axios from 'axios'
// import LocationCard from './LocationCard'
// import Api from './helper/Api'

const Home = () => {
    const [locations, setLocations] = useState('')
    const [currentCondition, setCurrentCondition] = useState('')
    const [currentTemp, setCurrentTemp] = useState('')
    const [formValue, setFormValue] = useState('')
    const [formSubmit, setFormSubmit] = useState('')
    const [forecast, setForecast] = useState('')
    const [time, setTime] = useState('20')
    const [selectedTime, setSelectedTime] = useState('')
    const [timeCondition, setTimeCondition] = useState('')
    const [language, setLanguage] = useState('eng')

    const handleLocationChange = (event) => {
        setFormValue(event.target.value)     
      }

     const handleTimeChange = (event) => {
        setTime(event.target.value)
        setSelectedTime(event.target.value)
      }

   const handleLangChange = (event) => {
        setLanguage(event.target.value)
      }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setFormSubmit(formValue)
      }

    const handleFormReset = () => {
        setLocations('')
        setCurrentCondition('')
        setFormSubmit('')
        setFormValue('')
        setCurrentTemp('')
        setForecast('')
        setTime('20')
        setLanguage('eng')
    }

    useEffect(() => {
     async function fetchLocation() {
      const config = {
        method: 'get',
        url: `http://api.weatherapi.com/v1/forecast.json?key=8b928a9753d74262887160151212610&q=${formSubmit}&days=1&aqi=yes&alerts=yes&lang=${language}&hour=${time}`,
        headers: { 
                'api': '8b928a9753d74262887160151212610'
             }
};
try {
const response = await axios(config)
console.log('response.data.location', response.data.location)
console.log('response.data.current.condition.text', response.data.current.condition.text)
console.log('response.data.forecast', response.data.forecast.forecastday)
const forecastDay = response.data.forecast.forecastday
setTime(forecastDay[0].hour)
setTimeCondition(forecastDay[0].hour.condition.text)
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
            <input onChange={handleLocationChange}></input>
            <input onChange={handleTimeChange}></input>
            <input onChange={handleLangChange}></input>
        </form>
        </div>
        :
        <div>
             <p>In {locations.name}, at the moment, the weather is {currentCondition.toLocaleLowerCase()} with a temperature of<span> </span>
             {currentTemp} degree celsius. The forecast for the rest of the day is {forecast.toLocaleLowerCase()}. At {selectedTime} the forecast is {timeCondition}. </p>
             <button onClick={handleFormReset}>search different location</button>
        </div>
        }
        </>
    )
}

export default Home
