import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import VideoThumbnail from './VideoThumbnail.js';
import updateVideoInfo from '../actions/updateVideoInfo.js';
import Container from './container';

class SearchBar extends React.Component
{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {url: '',
            enterKeyPressed: false,
            mapVisible: false,
            recVisible: false
        }
        console.log(this.state.enterKeyPressed);
        console.log("constructor run successfully");
    }

    handleKeyPressed(key)
    {
        this.setState({url: key});
    }

    _handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.setState( {
                enterKeyPressed: true
            })
            console.log(this.state.enterKeyPressed);
        }
    }

    handleSubmit(event)
    {
        event.preventDefault()
        const link = new URL(this.state.url);
        const protocol = link.protocol;
        const host = link.hostname;
        const path = link.pathname;
        const videoID = link.searchParams.get("v");
        this.props.updateVideoInfo(host,videoID);
    }
    
    toggle_map() {
        this.setState({
            mapVisible: true,
            recVisible: false
        });
    }

    toggle_rec() {
        this.setState({
            recVisible: true,
            mapVisible: false
        });
    }

    render() {
        return ( <div id="query">

            <VideoThumbnail />

            <form onSubmit={this.handleSubmit} method="post">
                    <input id="textbox" type="url" className="center" placeholder="YouTube URL" onChange={(event) => this.handleKeyPressed(event.target.value)} value={this.state.url} required/>
                </form>
            {/*<input id="textbox" type="text" className="center" onKeyPress={(event) => this._handleKeyPress(event)} />*/}

            { !(this.props.videoThumbnailUrl == null) ?
                <div id="MapRec">
                    <input id="mapBtn" type="button" className="button" value="Map" onClick={() => this.toggle_map()} />
                    <input id="recBtn" type="button" className="button" value="Recommendations" onClick={() => this.toggle_rec()} />

                    { (this.state.mapVisible) ?
                        <div id="map"> map </div>
                        :
                        <div> </div>
                    }
                    
                    { (this.state.recVisible) ?
                        <div id="rcmd"> <Container /> </div>
                        :
                        <div> </div>
                    }

                </div>
                : <div></div>
            }

        </div>)
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({updateVideoInfo},dispatch);
}

export default connect(state => state, mapDispatchToProps)(SearchBar);