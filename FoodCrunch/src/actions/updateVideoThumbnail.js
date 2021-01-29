export default function updateVideoThumbnail(thumbnailUrl)
{
    return {
        type: "update_thumbnail_url",
        payload : thumbnailUrl
    }
}