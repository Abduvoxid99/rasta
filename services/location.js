export const fetchLocationName = async (lat, lng) => {
  return await fetch(
    'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' +
      lat +
      '&longitude=' +
      lng +
      '&localityLanguage=en'
  )
    .then((response) => response.json())
    .then((responseJson) => responseJson)
}
