import axios from "axios";
export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },

            headers: {
                'X-RapidAPI-Key': '93f1e1793bmshbf16805457faaa5p11cce6jsn88483e90112b',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        })
        return data
    } catch (err) {
        console.error(err)
    }
}

export const getWeatherData = async (lat, lng) => {
    try {
        const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
            params: {
                lon: lng, lat: lat,
            },
            headers: {
                'X-RapidAPI-Key': '93f1e1793bmshbf16805457faaa5p11cce6jsn88483e90112b',
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
            }
        })
        return data
    } catch (error) {
        console.error(error)
    }
}