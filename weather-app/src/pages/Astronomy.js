import { useState, useEffect } from 'react'
import axios from 'axios'

// import Api from './helper/Api'

const Astronomy = () => {
    const [locations, setLocations] = useState('')
    const [locationFormValue, setLocationFormValue] = useState('')
    const [formSubmit, setFormSubmit] = useState('')
    
    const handleLocationChange = (event) => {
        setLocationFormValue(event.target.value)     
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        setFormSubmit(locationFormValue)
      }

    const handleFormReset = () => {
        setLocations('')
        setFormSubmit('')
        setLocationFormValue('')
    }

    useEffect(() => {
     async function fetchLocation() {
      const config = {
        method: 'get',
        url: `http://api.weatherapi.com/v1/astronomy.json?key=8b928a9753d74262887160151212610&q=${formSubmit}`,
        headers: { 
                'api': '8b928a9753d74262887160151212610'
             }
};
try {
const response = await axios(config)
console.log('response.data.location', response.data.location)
setLocations(response.data)
} catch (err) {}
}
fetchLocation()
}, [formSubmit])

    return (
        <>
        <div className='astronomy'>
        {!locations ?
        <div >
        <form onSubmit={handleSubmit}>
            <input placeholder='Choose your location' onChange={handleLocationChange}></input>
        </form>
        </div>
        :
        <div className='astronomy-result'>
             <p>
               In {locations.location.name}, the sun will rise at {locations.astronomy.astro.sunrise.toLowerCase()} and set at {locations.astronomy.astro.sunset.toLowerCase()}. The moon will rise at {locations.astronomy.astro.moonrise.toLowerCase()} and set at {locations.astronomy.astro.moonset.toLowerCase()}. 
               The moon cylce is in its {locations.astronomy.astro.moon_phase.toLowerCase()}.
             </p>
             <button onClick={handleFormReset}>Search another location</button>
        </div>
        }
       </div>
        </>
    )
}

export default Astronomy