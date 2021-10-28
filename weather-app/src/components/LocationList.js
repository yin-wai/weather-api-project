import { useState, useEffect } from 'react'
import axios from 'axios'
// import LocationCard from './LocationCard'
// import Api from './helper/Api'

const LocationList = () => {
    const [locations, setLocations] = useState('')
    const [currentCondition, setCurrentCondition] = useState('')
    const [currentTemp, setCurrentTemp] = useState('')
    const [formValue, setFormValue] = useState('')
    const [formSubmit, setFormSubmit] = useState('')

    const handleFormChange = (event) => {
        // console.log(event.target.value)
        setFormValue(event.target.value)
        
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
            <input onChange={handleFormChange}></input>
        </form>
        </div>
        :
        <div>
             <p>In {locations.name}, the condition is {currentCondition.toLocaleLowerCase()} with a temperature of<span> </span>
             {currentTemp} degree celsius. The forecast is {locations.forecast}</p>
             <button onClick={handleFormReset}>search different location</button>
        </div>
        }
        </>
    )
}

export default LocationList
