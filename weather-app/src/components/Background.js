import axios from 'axios'
import { useEffect } from 'react'

import { getCloudiness, willItRain } from "./helper/getWeather"
import { willItRain } from "./helper/getWeather"
import { willItSnow } from "./helper/getWeather"
import { selectBackground } from "./helper/SelectBackground"

const Background = () => {
    const [weather, setWeather] = useState('')
    const [formSubmit, setFormSubmit] = useState({
        location: '',
        time: '12',
        language: '',
      })

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
      setWeather(response.data)
      } catch (err) {
          console.log('data unavailable')
      }
      }
      fetchLocation()
      }, [])

      if (!weather) return null
      const cloudsProp = getCloudiness(weather.current.cloud)
      const rainProp = willItRain(weather.forecast.forecastday[0].day.daily_will_it_rain)
      const snowProp = willItSnow(weather.forecast.forecastday[0].day.daily_will_it_snow)
 
    return (
        <div id="screen">
        style={{
            backgroundImage:`url(${selectBackground(cloudsProp, rainProp, snowProp)})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            }}        
        </div>
    )
}

export default Background

