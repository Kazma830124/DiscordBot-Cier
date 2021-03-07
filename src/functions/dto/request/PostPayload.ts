/**
 * Json Post Payload
 * 
 * set the Payload type with Array.
 * 
 * @param query string (location)
 * 
 * @param language string ("zh-TW")
 * 
 * @param locationType string ("locale")
 */

export interface PostLocationPayload{
    name:"getSunV3LocationSearchUrlConfig",
    params:{
        query:string  
        language:string
        locationType:string
    }
}