import cheerio from 'cheerio'
import * as dotenv from 'dotenv'
import { Weather } from './dto/result/TodayWeather'
import { getRequest, postRequest } from '../api/sendRequest'
import { PostLocationPayload } from './dto/request/PostPayload'
// dotenv.config()


let weather: Weather = {};

async function getLocation(payload: PostLocationPayload): Promise<string> {
    
    const response = (await postRequest("https://weather.com/api/v1/p/redux-dal", payload)).data
    // FIXME　if not query anything
    

    const url = "https://weather.com/zh-TW/weather/today/l/" + 
    return url
}
async function getWeather(url: string) {

    const request = await getRequest(url)
    const $ = cheerio.load(request.data)
    const temperatureArray: Array<objectWeather> = $('[data-testid="wxData"] > [data-testid="TemperatureValue"]').get()

    weather.feelingTemperature = $('.TodayDetailsCard--feelsLikeTempValue--2aogo').text()
    weather.airQualityValue = $('[data-testid="DonutChartValue"]').text();  // 空氣品質評分
    weather.airQualityCategory = $('[data-testid="AirQualityCategory"]').text()  //空氣品質分類 
    weather.airQualityDescription = $('[data-testid="AirQualitySeverity"]').text() //空氣品質描述
    weather.highTemperature = temperatureArray[0].children[0].data
    weather.lowTemperature = temperatureArray[1].children[0].data
    weather.humidity = temperatureArray[2].children[0].data
    weather.UVLevel = $('[data-testid="UVIndexValue"]').text()
    return weather
}

/** Initial weather crawler
 * @param payload input what the location you want sorted 
 */
export async function WeatherInit(payload: PostLocationPayload) {
    const url: string = await getLocation(payload)
    await getWeather(url)
    return weather
}



