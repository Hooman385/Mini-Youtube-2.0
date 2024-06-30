import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {

    params: { maxResults: "50", part: 'snippet' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options)

        return data;

    } catch (error) {
        console.log(error)
    }

}


export const fetchData = async (url) => {
    const response = await axios.get(`${BASE_URL}/${url}`, options)

    return response;
}
