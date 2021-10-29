export const correctFormat = (incorrectFormat) => {
    const initialDate = incorrectFormat.split('-')
    const reversedArray = initialDate.reverse()
    const reversedString = reversedArray.join(',')
    const newDate = reversedString.replace(/,/g, ' ')
    return newDate
  }