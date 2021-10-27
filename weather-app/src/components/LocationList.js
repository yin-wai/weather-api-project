import { useState, useEffect } from 'react'
import axios from 'axios'
import LocationCard from './LocationCard'

const LocationList = () => {
    const [locations, setLocations] = useState([
        {
            "name": "Paris",
            "region": "Ile-de-France",
            "country": "France",
            "lat": 48.87,
            "lon": 2.33,
            "tz_id": "Europe/Paris",
            "localtime_epoch": 1635338775,
            "localtime": "2021-10-27 14:46"
        }
    ])
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
console.log(locations)
}
fetchLocation()
}, [])
    return (
        <div>
            <ul>
            
                <li>
                    <p>{locations.location.name}</p>
                </li>
            
            </ul>
        </div>
    )
}

export default LocationList
