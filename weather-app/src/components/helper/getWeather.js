export const getCloudiness = (clouds) => {
    if (clouds >= 80) {
        return "cloudy"
    } else if (clouds > 20) {
        return "some-clouds"
    } else {
        return 'clear'
    }
}

export const getRainlevel = (rainLevel) => {
    if (rainLevel >= 0) {
        return 'drizzile'
    }  else if (rainLevel >= 0.5) {
        return 'light-showers'
    }  else if (rainLevel >= 2) {
        return 'raining'
    } else {
        return 'heavy rain'
    }
}

export const willItRain = (rain) => {
    if (rain === 0 ) {
        return 'no-rain'
    } else if (rain === 1 ) {
        return 'rain'
    }
}

export const willItSnow = (snow) => {
    if (snow === 0) {
        return 'no-snow'
    } else if (snow === 1) {
        return 'snow'
    }
}

export const getWind = (wind) => {
    if (wind >= 50) {
        return "extremely windy"
    } else if (wind >= 30) {
        return "windy"
    } else if (wind >=15) {
        return "breezy"
    } else {
        return "no wind"
    }
}