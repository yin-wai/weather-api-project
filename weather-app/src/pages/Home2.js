import { useState, useEffect } from 'react'
import axios from 'axios'
// import Api from './helper/Api'

const Home2 = () => {
    const [locations, setLocations] = useState('')
    const [currentCondition, setCurrentCondition] = useState('')
    const [currentTemp, setCurrentTemp] = useState('')
    const [forecast, setForecast] = useState('')
    const [timeCondition, setTimeCondition] = useState('')
    // const [locationFormValue, setLocationFormValue] = useState('')
    // const [timeFormValue, setTimeFormValue] = useState('')
    // const [languageFormValue, setLanguageFormValue] = useState('eng')
    const [formSubmit, setFormSubmit] = useState({
      location: '',
      time: '',
      language: '',
    })
    const [finalFormSubmit, setFinalFormSubmit] = useState({
      location: '',
      time: '',
      language: 'eng',
    })
    
    
    const handleLocationChange = (event) => {
       
        const { name, value } = event.target
    setFormSubmit({
      ...formSubmit,
      [name]: value,
    })
      }


    
    const handleSubmit = (event) => {
      console.log('formSubmitted')
        event.preventDefault()
        setFinalFormSubmit(formSubmit)
      }

    const handleFormReset = () => {
        setLocations('')
        setCurrentCondition('')
        // setLocationFormValue('')
        setCurrentTemp('')
        setForecast('')
        setFormSubmit('')
        // setFormSubmit.location('')
        // setFormSubmit.language('eng')
    }

useEffect(() => {
     async function fetchLocation() {
      const config = {
        method: 'get',
        url: `http://api.weatherapi.com/v1/forecast.json?key=8b928a9753d74262887160151212610&q=${finalFormSubmit.location}&days=1&aqi=yes&alerts=yes&lang=${finalFormSubmit.language}&hour=${finalFormSubmit.time}`,
        headers: { 
                'api': '8b928a9753d74262887160151212610'
             }
};
try {
const response = await axios(config)
const forecastDay = response.data.forecast.forecastday
const hour = forecastDay[0].hour

setTimeCondition(hour[0].condition.text)
setForecast(forecastDay[0].day.condition.text)
setLocations(response.data.location)
setCurrentCondition(response.data.current.condition.text)
setCurrentTemp(response.data.current.temp_c)
} catch (err) {}
}
fetchLocation()
}, [finalFormSubmit])

    return (
        <>
        {!locations ?
        <div>
        <form onSubmit={handleSubmit}>
            <input type='submit' value='Submit' onClick={handleSubmit}/>
            <input name ='location' value={formSubmit.location} placeholder='Choose your location' onChange={handleLocationChange} />
            <input name='time' value={formSubmit.time} placeholder='Choose your time' onChange={handleLocationChange} />
            <select name='language' value={formSubmit.language} placeholder='Choose your language' onChange={handleLocationChange}>
            <option value='bn'>Bengali</option>
            <option value='bg'>Bulgarian</option>
            <option value='zh'>Chinese Simplified</option>
            <option value='zh_tw'>Chinese Traditional</option>
            <option value='cs'>Czech</option>
            <option value='da'>Danish</option>
            <option value='nl'>Dutch</option>
            <option value='eng'>English</option>
            <option value='fi'>Finnish</option>
            <option value='fr'>French</option>
            <option value='de'>German</option>
            <option value='el'>Greek</option>
            <option value='hi'>Hindi</option>
            <option value='hu'>Hungarian</option>
            <option value='it'>Italian</option>
            <option value='ja'>Japanese</option>
            <option value='jv'>Javanese</option>
            <option value='ko'>Korean</option>
            <option value='zh_cmn'>Mandarin</option>
            <option value='mr'>Marathi</option>
            <option value='pl'>Polish</option>
            <option value='pt'>Portuguese</option>
            <option value='ro'>Romanian</option>
            <option value='ru'>Russian</option>
            <option value='sr'>Serbian</option>
            <option value='si'>Sinhalese</option>
            <option value='sk'>Slovak</option>
            <option value='es'>Spanish</option>
            <option value='sv'>Swedish</option>
            <option value='ta'>Tamil</option>
            <option value='te'>Telugu</option>
            <option value='tr'>Turkish</option>
            <option value='uk'>Ukrainian</option>
            <option value='ur'>Urdu</option>
            <option value='vi'>Vietnamese</option>
            <option value='zh_wuu'>Wu(Shanghainese)</option>
            <option value='zh_hsn'>Xiang</option>
            <option value='zh_yue'>Yue(Cantonese)</option>
            <option value='zu'>Zulu</option>
            </select>
        </form>
        </div>
        :
        <div>
             <p>
               In {locations.name}, at the moment, the weather is {currentCondition.toLocaleLowerCase()} with a temperature of<span> </span>
               {currentTemp} degree celsius. The forecast for the rest of the day is {forecast.toLocaleLowerCase()}. 
               At {formSubmit.time} the forecast is {timeCondition.toLocaleLowerCase()}. 
             </p>
             <button onClick={handleFormReset}>search different location</button>
        </div>
        }
        </>
    )
}

export default Home2