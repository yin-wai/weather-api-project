import axios from 'axios'
import { useEffect } from 'react'

import { selectBackground } from "./helper/SelectBackground"

const Background = () => {
    const [weather, setWeather] = useState('')

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
      }, [])

    return (
        <div id="screen">
        style={{backgroundImage:`url(${selectBackground()})`}}        
        </div>
    )
}

