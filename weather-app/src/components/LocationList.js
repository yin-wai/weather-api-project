import { useState, useEffect } from 'react'
import axios from 'axios'

const LocationList = () => {
    const [locations, setLocations] = useState([])
    console.log(locations)
    useEffect(() => {
     async function fetchLocation() {

        const config = {
            method: 'get',
            url: 'http://api.weatherapi.com/v1/current.json?key=8b928a9753d74262887160151212610&q=paris',
            headers: { 
                        'api': '8b928a9753d74262887160151212610'
             }
};

const response = await axios(config)
setLocations(response.data)
console.log(response.data)
}
fetchLocation()
}, [])
    return (
        <div>
            <ul>
                {locations.map((l) => (
                <li key={l.location.name}>{l.location}</li>
                ))}
            </ul>
        </div>
    )
}

export default LocationList
