import React, { useRef, useState } from 'react'
import '../style sheets/Homepage.css'
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import Chatbox from '../components/Chatbox'

function Homepage() {

    // const seconds = useRef(null);

    // const rewind = () => {
    //     seconds.current.seekTo(10);
    // };
    // onEnded={rewind}
    // ref={seconds}
    return (
        <div>
            <div className='video-wrapper'>
                <ReactPlayer url="https://www.youtube.com/embed/hrqdOMz-meo?si=NrDh3ZzJ5wYaYFaq&amp;controls=0&amp;start=10&end=120"
                    playing={true} volume={0} muted={true} width="100%" height="100%" controls={false} />
            </div>
            <div className="homepage-intro">
                <h2> SPICE UP YOUR KITCHEN</h2>
                <h1>with <span>KITCHEN BOT</span> as your guide!</h1>
                <FontAwesomeIcon icon={faRobot} />
                <p>Let's chat!</p>
            </div>
            <Chatbox />
        </div>
    )
}

export default Homepage
