export const getLocationHeader = {
    "accept": "*/*",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-length": 118,
    "content-type": "application/json",
    "origin": "https://weather.com",
    "referer": "https://weather.com/",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.151 Safari/537.36"
}

export const sortedWeatherHeader = {
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.142 Safari/537.36"
}

export interface SortedWeatherConfiguration {
    url: string,
    method: "GET",
    headers: {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.142 Safari/537.36"
    }
}
export interface GetLocationConfiguration {
    
}

