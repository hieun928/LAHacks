export default function vidInfoReducer(state = {hostName : null, videoId: null},action)
{
    const new_state = Object.assign({},state);
    if (action.type == "update_vid_info")
    {
        new_state.hostName = action.payload.hostName;
        new_state.videoId = action.payload.videoId;
    }
    return new_state;
}