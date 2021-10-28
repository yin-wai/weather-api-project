import { useState, useEffect } from 'react'
import axios from 'axios'
// import Api from './helper/Api'

const Home2 = () => {
    const [locations, setLocations] = useState('')
    const [currentCondition, setCurrentCondition] = useState('')
    const [currentTemp, setCurrentTemp] = useState('')
    const [forecast, setForecast] = useState('')
    const [timeCondition, setTimeCondition] = useState('')
    // const [locationFormValue, setLocationFormValue] = useState('')
    // const [timeFormValue, setTimeFormValue] = useState('')
    // const [languageFormValue, setLanguageFormValue] = useState('eng')
    const [formSubmit, setFormSubmit] = useState({
      location: '',
      time: '',
      language: '',
    })
    const [finalFormSubmit, setFinalFormSubmit] = useState({
      location: '',
      time: '',
      language: '',
    })
    
    
    const handleLocationChange = (event) => {
       
        const { name, value } = event.target
    setFormSubmit({
      ...formSubmit,
      [name]: value,
    })
      }


    
    const handleSubmit = (event) => {
      console.log('formSubmitted')
        event.preventDefault()
        setFinalFormSubmit(formSubmit)
      }

    const handleFormReset = () => {
        setLocations('')
        setCurrentCondition('')
        // setLocationFormValue('')
        setCurrentTemp('')
        setForecast('')
        setFormSubmit('')
        // setFormSubmit.location('')
        // setFormSubmit.language('eng')
    }

useEffect(() => {
     async function fetchLocation() {
      const config = {
        method: 'get',
        url: `http://api.weatherapi.com/v1/forecast.json?key=8b928a9753d74262887160151212610&q=${finalFormSubmit.location}&days=1&aqi=yes&alerts=yes&lang=${finalFormSubmit.language}&hour=${finalFormSubmit.time}`,
        headers: { 
                'api': '8b928a9753d74262887160151212610'
             }
};
try {
const response = await axios(config)
const forecastDay = response.data.forecast.forecastday
const hour = forecastDay[0].hour

setTimeCondition(hour[0].condition.text)
setForecast(forecastDay[0].day.condition.text)
setLocations(response.data.location)
setCurrentCondition(response.data.current.condition.text)
setCurrentTemp(response.data.current.temp_c)
} catch (err) {}
}
fetchLocation()
}, [finalFormSubmit])

    return (
        <>
        {!locations ?
        <div>
        <form onSubmit={handleSubmit}>
            <input type='submit' value='Submit' onClick={handleSubmit}/>
            <input name ='location' value={formSubmit.location} placeholder='Choose your location' onChange={handleLocationChange} />
            <input name='time' value={formSubmit.time} placeholder='Choose your time' onChange={handleLocationChange} />
            <input name='language' value={formSubmit.language} placeholder='Choose your language' onChange={handleLocationChange} />
        </form>
        </div>
        :
        <div>
             <p>
               In {locations.name}, at the moment, the weather is {currentCondition.toLocaleLowerCase()} with a temperature of<span> </span>
               {currentTemp} degree celsius. The forecast for the rest of the day is {forecast.toLocaleLowerCase()}. 
               At {formSubmit.time} the forecast is {timeCondition.toLocaleLowerCase()}. 
             </p>
             <button onClick={handleFormReset}>search different location</button>
        </div>
        }
        </>
    )
}

export default Home2