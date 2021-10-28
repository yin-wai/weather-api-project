import { useState, useEffect } from 'react'
import axios from 'axios'
// import LocationCard from './LocationCard'
// import Api from './helper/Api'

const Home = () => {
    const [locations, setLocations] = useState('')
    const [currentCondition, setCurrentCondition] = useState('')
    const [currentTemp, setCurrentTemp] = useState('')
    const [forecast, setForecast] = useState('')
    // const [timeCondition, setTimeCondition] = useState('')
    const [locationFormValue, setLocationFormValue] = useState('')
    // const [timeFormValue, setTimeFormValue] = useState('')
    // const [languageFormValue, setLanguageFormValue] = useState('eng')
    const [formSubmit, setFormSubmit] = useState({
      location: '',
      time: '',
      language: '',
    })
    // const [timeFormSubmit, setTimeFormSubmit] = useState('')
    // const [languageFormSubmit, setLanguageFormSubmit] = useState('')
    
    
    
    

    const handleLocationChange = (event) => {
        setLocationFormValue(event.target.value)
        const { name, value } = event.target
    setFormSubmit({
      ...formSubmit,
      [name]: value,
    })

      }

  //    const handleTimeChange = (event) => {
  //       setTimeFormValue(event.target.value)
  //     }

  //  const handleLangChange = (event) => {
  //       setLanguageFormValue(event.target.value)
  //     }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setFormSubmit(locationFormValue)
        // setTimeFormSubmit(timeFormValue)
        // setLanguageFormSubmit(languageFormValue)
      }

    const handleFormReset = () => {
        setLocations('')
        setCurrentCondition('')
        setFormSubmit('')
        setLocationFormValue('')
        setCurrentTemp('')
        setForecast('')
        // setLanguageFormValue('eng')
    }

    useEffect(() => {
     async function fetchLocation() {
      const config = {
        method: 'get',
        url: `http://api.weatherapi.com/v1/forecast.json?key=8b928a9753d74262887160151212610&q=${formSubmit}&days=1&aqi=yes&alerts=yes&lang=eng&hour=20`,
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

// const hour = forecastDay[0].hour
// setTimeCondition(hour[0].condition.text)

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
            {/* <input name='time' value={formSubmit.time} onChange={handleTimeChange}></input>
            <input name='language' value={formSubmit.language} onChange={handleLangChange}></input> */}
        </form>
        </div>
        :
        <div>
             <p>
               In {locations.name}, at the moment, the weather is {currentCondition.toLocaleLowerCase()} with a temperature of<span> </span>
               {currentTemp} degree celsius. The forecast for the rest of the day is {forecast.toLocaleLowerCase()}. 
               {/* At {timeFormValue} the forecast is {timeCondition}.  */}
             </p>
             <button onClick={handleFormReset}>search different location</button>
        </div>
        }
        </>
    )
}

export default Home
