export const getTimeFromWeather = (weather) => {
    const time = weather
    const timeTwo = time.substring(11)
    const colon = timeTwo.indexOf(':')
    const timeThree = timeTwo.slice(0, colon)
    const timeFour = timeTwo.slice(colon + 1)
    const timeSix = timeThree.length > 1 ? timeThree : `0${timeThree}`
    const timeFive = `${timeSix}${timeFour}`
    return timeFive
  }
  
  
  export const getSunriseTimeFromWeather = (weather) => {
    const time = weather
    const timeTwo = time.substring(0, 5)
    const colon = timeTwo.indexOf(':')
    const timeThree = timeTwo.slice(0, colon)
    const timeFour = timeTwo.slice(colon + 1)
    const timeSix = timeThree.length > 1 ? timeThree : `0${timeThree}`
    const timeFive = `${timeSix}${timeFour}`
    return timeFive
  }
  
  export const getSunsetTimeFromWeather = (weather) => {
    const time = weather
    const timeTwo = time.substring(0, 5)
    const colon = timeTwo.indexOf(':')
    const timeThree = timeTwo.slice(0, colon)
    const timeThreePointFive =  timeThree !== '12' ? Number(timeThree) + 12 : '00'
    const timeFour = timeTwo.slice(colon + 1, 5)
    const timeFive = `${timeThreePointFive.toString()}${timeFour.toString()}`
    return timeFive
  }
  
  export const getMoonriseMoonsetTimeFromWeather = (weather) => {
    const time = weather
    const lastChar = time.charAt(time.length - 1)
    const secondlastChar = time.charAt(time.length - 2)
    if (!lastChar === 'M') {
      return time
    } else if (secondlastChar === 'A') {
      const timeTwo = time.substring(0, 5)
      const colon = timeTwo.indexOf(':')
      const timeThree = timeTwo.slice(0, colon)
      const timeFour = timeTwo.slice(colon + 1)
      const timeSix = timeThree.length > 1 ? timeThree : `0${timeThree}`
      const timeFive = `${timeSix}${timeFour}`
      return timeFive
    } else if (secondlastChar === 'P') {
      const timeTwo = time.substring(0, 5)
      const colon = timeTwo.indexOf(':')
      const timeThree = timeTwo.slice(0, colon)
      const timeThreePointFive =  timeThree !== '12' ? Number(timeThree) + 12 : '00'
      const timeFour = timeTwo.slice(colon + 1, 5)
      const timeFive = `${timeThreePointFive.toString()}${timeFour.toString()}`
      return timeFive
    }
  }
  
  export const trimSunrise = (astro) => {
    const time = astro
    const timeNoAM = time.slice(0, 5)
    return timeNoAM
  }
  
  export const trimSunset = (astro) => {
    const time = astro
    const timeNoPM = time.slice(0, 5)
    const timeArray = timeNoPM.split(':')
    const timeHourString = timeArray[0]
    const timeHourNumber = Number(timeHourString)
    const time24 = timeHourNumber + 12
    const time24String = time24.toString()
    timeArray[0] = time24String
    const finalTimeNoPM = timeArray.join(':')
    return finalTimeNoPM
  }
  
  export const trimHourTime = (timeParam) => {
    const time = timeParam
    const justTime = time.slice(11, 13)
    return justTime
  }
  
  export const wholeNumTemp = (temp) => {
    const fullTemp = temp
    const tempShort = Math.round(fullTemp)
    return tempShort
  }
  
  export const windDirection = (wind) => {
    const windDir = wind
    const windShort = windDir.slice(0, 1)
    return windShort
  }
  
  export const windSpeed = (wind) => {
    const windSp = wind
    const windSpeedShort = Math.round(windSp)
    return windSpeedShort
  }