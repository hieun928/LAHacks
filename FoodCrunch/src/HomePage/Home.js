import React from 'react';

import SearchBar from './searchBar.js';
import DataContainer from './DataContainer';
import VideoThumbnail from './VideoThumbnail';

export default class Home extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {videoTitle : null};
        this.updateVideoTitle = this.updateVideoTitle.bind(this);
    }

    updateVideoTitle(newTitle)
    {
        this.state.videoTitle = newTitle;
    }

    render()
    {
        return (<div> 
                <div id="search" className="main"> </div> 
                {/*<VideoThumbnail/>*/}
                <SearchBar/>
                <DataContainer updateVidTitle={this.updateVideoTitle}/>
        </div>)
    }

}