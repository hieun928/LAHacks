export default function videoThumbnailReducer(state=null,action)
{  
    let new_state = state;
    if (action.type === "update_thumbnail_url")
        new_state = action.payload;
    return new_state;
}