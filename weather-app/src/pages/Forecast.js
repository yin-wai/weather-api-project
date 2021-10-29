import { useState, useEffect } from 'react'
import axios from 'axios'

const Forecast = () => {
    const [locations, setLocations] = useState('')
    const [formSubmit, setFormSubmit] = useState({
        location: '',
        time: '12',
        language: '',
        days: '',
      })
    const [finalFormSubmit, setFinalFormSubmit] = useState({
        location: '',
        time: '',
        language: 'eng',
        days: '1',
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
     async function fetchLocation() {
      const config = {
        method: 'get',
        url: `http://api.weatherapi.com/v1/forecast.json?key=8b928a9753d74262887160151212610&q=${finalFormSubmit.location}&days=${finalFormSubmit.day}&aqi=yes&alerts=yes&lang=${finalFormSubmit.language}`,
        headers: { 
                'api': '8b928a9753d74262887160151212610'
             }
};
try {
const response = await axios(config)
const forecastDay = response.data.forecast.forecastday
console.log('response.data.location', response.data.forecast)
setLocations(response.data)
} catch (err) {
    console.log('no weather')
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
            <input placeholder='Choose your location' onChange={handleLocationChange} />
            <input 
              onChange={handleLocationChange}
              onWheel={(event) => event.target.blur()}
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
            <p></p>
             <button onClick={handleFormReset}>Search another location</button>
        </div>
        }
       </div>
        </>
    )
}

export default Forecast
