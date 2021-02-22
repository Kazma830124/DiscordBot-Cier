/**
 * Please set the Payload as Array.
 * 
 * query: string (location)
 * 
 * language: string ("zh-TW")
 * 
 * locationType: string ("locale")
 */

export interface PostPayload{
    name:"getSunV3LocationSearchUrlConfig",
    params:{
        query:string  
        language:string
        locationType:string
    }
}