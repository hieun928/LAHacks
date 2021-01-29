export default function updateVideoInfo(host, vidId)
{
    return {
        type: "update_vid_info",
        payload : {
            hostName : host,
            videoId : vidId 
        }
    }
}