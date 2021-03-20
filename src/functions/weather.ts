import cheerio from 'cheerio'
import * as dotenv from 'dotenv'
import { Weather } from './dto/response/TodayWeather'
import { getRequest, postRequest } from '../api/sendRequest'

import { AxiosRequestConfig } from 'axios'
import { LocationParams } from './dto/response/GetLocation'
dotenv.config()


let weather: Weather = {};

async function getWeather(params: LocationParams) {
    const config: AxiosRequestConfig = {
        baseURL: "https://opendata.cwb.gov.tw/api",
        headers: {
            Authorization: process.env.authorizationCode
        },
        params
    }
    const response = (await getRequest("​/v1/rest/datastore/F-D0047-093", config)).data
    // FIXME　if not query anything
    // TODO classify the return value 

    return weather
}

/** Initial weather crawler
 * @param payload input what the location you want sorted 
 */
export async function WeatherInit(params: LocationParams) {
    await getWeather(params)
    return weather
}



