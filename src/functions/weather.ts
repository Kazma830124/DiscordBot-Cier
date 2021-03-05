import cheerio from 'cheerio'
import axios from 'axios'
import * as dotenv from 'dotenv'
import { Weather } from './dto/result/TodayWeather';
import { GetWeatherConfiguration, getWeatherHeader } from './RequestConfiguration'
dotenv.config()
let url: string = "https://weather.com/zh-TW/weather/today/l/df8822545d71cf943910045c4d9ee7b098de072e14f47a43fca260a7cdd11fff";

const getWeatherConfiguration: GetWeatherConfiguration = {
    headers: getWeatherHeader,
    method: "GET",
    url: url
}
let weather: Weather;

function getWeather() {
    return axios(getWeatherConfiguration)
}


export function WeatherInit() {
    getWeather().then(res => {
        
    const $ = cheerio.load(res.data)
    const temperatureArray: Array<objectWeather> = $('[data-testid="wxData"] > [data-testid="TemperatureValue"]').get()
    weather.feelingTemperature = $('.TodayDetailsCard--feelsLikeTempValue--2aogo').text();
    weather.airQualityValue = $('[data-testid="DonutChartValue"]').text();  // 空氣品質評分
    weather.airQualityCategory = $('[data-testid="AirQualityCategory"]').text()  //空氣品質分類 
    weather.airQualityDescription = $('[data-testid="AirQualitySeverity"]').text() //空氣品質描述
    weather.highTemperature = temperatureArray[0].children[0].data
    weather.lowTemperature = temperatureArray[1].children[0].data
    weather.humidity = temperatureArray[2].children[0].data
    weather.UVLevel = $('[data-testid="UVIndexValue"]').text()
    
})

}
WeatherInit()

