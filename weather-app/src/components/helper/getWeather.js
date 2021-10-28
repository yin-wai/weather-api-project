export const getCloudiness = (clouds) => {
    if (clouds >= 80) {
        return "cloudy"
    } else if (clouds > 20) {
        return "some-clouds"
    } else {
        return 'clear'
    }
}

export const willItRain = (rain) => {
    if (rain === 0 ) {
        return 'no-rain'
    } else if (rain === 1 ) {
        return 'snow'
    }
}

export const willItSnow = (snow) => {
    if (snow === 0) {
        return 'no-snow'
    } else if (snow === 1) {
        return 'snow'
    }
}
