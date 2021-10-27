import { useState, useEffect } from 'react'
import axios from 'axios'
import LocationCard from './LocationCard'
import Api from './helper/Api'

const LocationList = () => {
    const [locations, setLocations] = useState([])
    const [formValue, setFormValue] = useState('')
    const [formSubmit, setFormSubmit] = useState('')

    useEffect(() => {
     async function fetchLocation() {
        const config = {
            method: 'get',
            url: `http://api.weatherapi.com/v1/current.json?key=8b928a9753d74262887160151212610&q=${formValue}`,
            headers: { 
                        'api': '8b928a9753d74262887160151212610'
             }
};
try {
const response = await axios(config)
setLocations(response.data)
console.log(response.data)
console.log(locations)
} catch (err) {}
}
fetchLocation()
}, [formSubmit])

const handleFormChange = (event) => {
    console.log(event.target.value)
    setFormValue(event.target.value)
 }

const handleSubmit = (event) => {
    event.preventDefault()
    setFormSubmit(formValue)
}


    return (
        <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleFormChange}></input>
        </form>
        <div>
            <ul>
                <li>
                    <p>{locations.location.name}</p>
                </li>
            </ul>
        </div>
        </>
    )
}

export default LocationList
