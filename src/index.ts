import cheerio from 'cheerio'
import request from 'request'
import { Weather } from './dto/TodayWeather'
import dc from 'discord.js'

let url: string = "https://weather.com/zh-TW/weather/today/l/df8822545d71cf943910045c4d9ee7b098de072e14f47a43fca260a7cdd11fff";
const requestConfigure = {
    url: url,
    method: "GET",
    headers: {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.142 Safari/537.36"
    }
};

let weather: Weather = {};

const start = () => {
    try {
        request(requestConfigure, (error, response, body) => {
            if (error != null) {
                throw error
            }
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

            const $ = cheerio.load(body)
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
    } catch (err) {

        console.error('error:', err); // Print the error if one occurred
    }
}
start()

