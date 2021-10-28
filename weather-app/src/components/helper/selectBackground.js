import cloud from '../../styles/images/cloud.jpg'
import sunny from '../../styles/images/sunny.jpg'
import rain from '../../styles/images/rain.jpg'
import snow from '../../styles/images/snow.jpg'
import cloudy from '../../styles/images/cloudy.jpg'

export const selectBackground = (cloudsProp, rainProp, snowProp) => {
    if (cloudsProp === 'cloudy' && rainProp === false ) {
        return cloudy
    } else if (cloudsProp === 'some-clouds' && rainProp === false) {
        return cloud
    } else if (cloudsProp === 'clear' && rainProp === false) {
        return sunny
    } else if ((cloudsProp === "cloudy" || cloudsProp === "some-clouds") && rainProp === true) {
        return rain
    } else if (snowProp === true) {
        return snow
    }
}