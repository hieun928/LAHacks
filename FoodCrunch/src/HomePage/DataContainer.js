import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import updateVideoThumbnail from '../actions/updateVideoThumbnail';



// fetch('https://www.googleapis.com/youtube/v3/videos?id=rdeQT7KkqM8&key=AIzaSyBGQpUixlm1DGWgv-odACbjTlWkCEgAxqI&part=snippet')

class DataContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = Object.assign({},this.props.videoInfo,{count : 0});
        this.state.loadingData = false;
    }

   componentWillUpdate(nextProps,nextState)
    {
        if ( (this.state.videoId === nextProps.videoInfo.videoId && this.state.hostName === nextProps.videoInfo.hostName && this.state.count === 1))
            return;
        this.state.loadingData = true;
        const url = `https://www.googleapis.com/youtube/v3/videos?id=${nextProps.videoInfo.videoId}&key=${this.props.youtubeDataApiKey}&part=snippet`;
        fetch(url).then((response) => response.json().then((data) => 
        {
            this.state.videoId = this.props.videoInfo.videoId;
            this.state.hostName = this.props.videoInfo.hostName;
            this.state.count = 1;
            this.props.updateVideoThumbnail(data.items[0].snippet.thumbnails.standard.url);
            this.props.updateVidTitle(data.items[0].snippet.title);
            fetch("http://localhost:8000/vision",{method : "POST",body : JSON.stringify({"payload" : data.items[0].snippet.thumbnails.standard.url})}).then(
                response => response.json().then(data => {
                    console.log("test " + data)
                    this.setState({loadingData : false});
                })
            )
           
        }
        ));
    }
    
    
    render()
    {
        if (this.state.loadingData)
        {
            console.log("loading...");
            return <div>loading...</div>;
        }
        else
        {
            console.log("stop loading");
            return <div/>
        }
    }
} 

function mapStateToProps(state)
{
    const vidInfo = {videoInfo : state.videoInfo, youtubeDataApiKey: state.youtubeDataApiKey};
    return vidInfo;
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({updateVideoThumbnail},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(DataContainer);






