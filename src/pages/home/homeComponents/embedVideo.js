import React, { Component } from 'react';

class EmbedVideo extends Component {
    render() {
        return (
            <div className="youtube-video">
                <iframe src="https://www.youtube.com/embed/usZuHDDMDJ8?ecver=2" width="640" height="360" frameBorder="0" allowFullScreen className="embed-iframe" title="embed-iframe"></iframe>
            </div>
        )
    }
}

export default EmbedVideo;