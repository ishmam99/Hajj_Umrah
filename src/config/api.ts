import axios from 'axios';
export default () => axios.create({
    baseURL: 'https://masjid.islamicdigitallane.com/api/v1',
    headers: {
        "Content-Type": "application/json",
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
    },
})