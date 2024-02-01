// import axios from 'axios'
// const api = axios.create({
//   baseURL: 'https://masjid.islamicdigitallane.com/api/v1',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json'
//   }
// })

// export default api


import axios from 'axios';
export default () => axios.create({
    baseURL: 'https://masjid.islamicdigitallane.com/api/v1',
    headers: {
        "Content-Type": "application/json",
        // "Content-Type": "multipart/form-data",
        "Accept": "application/json",
    },
})