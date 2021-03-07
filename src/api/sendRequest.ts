import axios from 'axios'

axios.defaults.headers.common['User-Agent'] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.142 Safari/537.36"


function axiosInstance(config?: object | object) {
    return axios.create(config)
}
export const getRequest = (url: string, config?: object) => axiosInstance(config).get(url)
export const postRequest = (url: string, data: Object, config?: object) => axiosInstance(config).post(url, data)

