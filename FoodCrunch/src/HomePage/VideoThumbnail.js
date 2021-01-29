import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class VideoThumbnail extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        if (this.props.videoThumbnailUrl != null )
            return <img id="videoThumbnail" src={this.props.videoThumbnailUrl}/> 
        else 
            return <div />
    }
}


function mapStateToProps(state)
{
    return {videoThumbnailUrl : state.videoThumbnailUrl}
}


export default connect(mapStateToProps)(VideoThumbnail);