import { useState, useEffect } from 'react'
import axios from 'axios'
// import LocationCard from './LocationCard'
// import Api from './helper/Api'

const LocationList = () => {
    const [locations, setLocations] = useState('')
    const [formValue, setFormValue] = useState('')
    const [formSubmit, setFormSubmit] = useState('')

    const handleFormChange = (event) => {
        console.log(event.target.value)
        setFormValue(event.target.value)
     }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setFormSubmit(formValue)
    }

    useEffect(() => {
     async function fetchLocation() {
        const config = {
            method: 'get',
            url: `http://api.weatherapi.com/v1/current.json?key=8b928a9753d74262887160151212610&q=${formSubmit}`,
            headers: { 
                        'api': '8b928a9753d74262887160151212610'
             }
};
try {
const response = await axios(config)
setLocations(response.data)
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
             <p>{locations.location.name}</p>
        </div>
        }
        </>
    )
}

export default LocationList
