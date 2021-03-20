
/**
 *  中央氣象局開放平台API  一般天氣預報-今明 36 小時天氣預報
 *  @link 參數說明參考 https://opendata.cwb.gov.tw/opendatadoc/CWB_Opendata_API_V1.2.pdf
 */
export interface LocationParams {
    locationId:number
    locationName?:Array<string>
    limit?:number
    offset?:number 
    format?:string
    elementName?:Array<string>
    timeFrom?:string   // format: yyyy-MM-ddThh:mm:ss
    timeTo?:string

}
