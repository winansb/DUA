import React from 'react'




export default class VideoPlayer extends React.Component {
    constructor(){
        super();
        this.videos = ["../Videos/driving_sim_place_holder.mp4","../Videos/testVid1","../Videos/testVid2.mp4","../Videos/testVid3.mp4"];
        this.state = {
            videoId: 0
        }
    }

    videoOne = () => {
        let id;
            id = 0;
        this.setState({
            videoId: id
        });
    }

    videoTwo = () => {
        let id;
            id = 1;
        this.setState({
            videoId: id
        });
    }

    videoThree = () => {
        let id;
            id = 2;
        this.setState({
            videoId: id
        });
    }

    videoFour = () => {
        let id;
            id = 3;
        this.setState({
            videoId: id
        });
    }

    render(){
        return (
            <div>
                <video disablePictureInPicture controls  controlsList = "nodownload noremoteplayback noplaybackrate"  className="fullScreen" ref="video">
                <source src={this.videos[this.state.videoId]} type="video/mp4" />
                </video>
{/*                <div className="container">
                    <button onClick={this.videoOne} type="button" className="btn btn-primary">VideoOne</button>
                    <button onClick={this.videoTwo} type="button" className="btn btn-primary">VideTwo</button>
                    <button onClick={this.videoThree} type="button" className="btn btn-primary">VideoThree</button>
                    <button onClick={this.videoFour} type="button" className="btn btn-primary">VideoFour</button>
                </div>*/}
            </div>
        )
    }
}