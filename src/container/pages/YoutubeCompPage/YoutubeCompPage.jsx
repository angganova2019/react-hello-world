import React, { Component, Fragment } from 'react';
import YouTubeComp from '../../../component/YouTubeComp/YouTubeComp';

class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <p>YouTube Component</p>
                <hr />
                <YouTubeComp
                    time="7.12"
                    title="Tutorial React JS bagian 1"
                    desc="2x ditonton, 2 hari yang lalu" />
                <YouTubeComp
                    time="8.02"
                    title="Tutorial React JS bagian 2"
                    desc="200x ditonton, 10 hari yang lalu" />
                <YouTubeComp
                    time="5.04"
                    title="Tutorial React JS bagian 3"
                    desc="500x ditonton, 4 hari yang lalu" />
                <YouTubeComp
                    time="4.12"
                    title="Tutorial React JS bagian 4"
                    desc="1k ditonton, 14 hari yang lalu" />
                <YouTubeComp />
            </Fragment>
        )
    }
}

export default YoutubeCompPage;