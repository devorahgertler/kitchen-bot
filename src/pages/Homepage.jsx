import React, { useEffect, useRef, useState } from 'react'
import '../style sheets/Homepage.css'
import ReactPlayer from 'react-player'
import Chatbox from '../components/Chatbox'
import robot from '../images/robot.png'
import hacks from '../JSONs/hacks.json'
import { FaceRetouchingOffSharp } from '@mui/icons-material'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import recipes from '../images/recipes.jpg'
import tools from '../images/tools.jpg'
import logo from '../images/logo'
import CopyrightIcon from '@mui/icons-material/Copyright';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

function Homepage() {

    const [hackOfTheDay, setHackOfTheDay] = useState('')
    const [numberHack, setNumberHack] = useState(0)

    const navigate = useNavigate()

    // const seconds = useRef(null);

    // const rewind = () => {
    //     seconds.current.seekTo(10);
    // };
    // onEnded={rewind}
    // ref={seconds}

    const fetchHack = async () => {
        const response = await fetch(`https://6981dcf3c9a606f5d4484951.mockapi.io/Hacks`)
        const data = await response.json()
        setHackOfTheDay(data[numberHack].tip)
           }

        //    useEffect (() => {
        //     const currentHour = new Date().getHours()
        //     if (currentHour === 24) {
        //         setNumberHack((prev) => prev + 1)
        //     } else {
        //         setNumberHack((prev) => prev + 2)
        //     }
        //    }, [])

        useEffect (() => {    
            const interval = setInterval(() => {
            setNumberHack((prev) => prev + 1);
        }, 86400000);
            return () => clearInterval(interval); 
       }, []
        )

        useEffect(() => {
            fetchHack()
        }, [numberHack])

    return (
        <div className='homepage'>
            <div className='video-wrapper'>
                <ReactPlayer url="https://www.youtube.com/embed/hrqdOMz-meo?si=NrDh3ZzJ5wYaYFaq&amp;controls=0&amp;start=10&end=120"
                    playing={true} volume={0} muted={true} width="100%" height="100%" controls={false} />
            </div>
            <div className="homepage-intro">
                <h1> SPICE UP YOUR KITCHEN</h1>
                <h1>with <span>KITCHEN BOT</span> as your guide!</h1>
                <img className='bot-icon' src={robot} alt='Kitchen Bot icon'></img>
                <p className='homepage-intro-bottom'>Let's chat!</p>
            </div>
            {<Chatbox />}
            <div className="homepage-middle">
                <h4>Cooking Hack of the Day:</h4>
                <p className="hack">{hackOfTheDay}</p>
            </div>
            <div>
                <h2>Explore recipes, guides, and more</h2>
            <Box className="box">
                <Card variant="outlined" className="card recipes-button" href="http://localhost:3000/recipes">Recipes</Card>
                <Card variant="outlined" className="card tools-button" href="http://localhost:3000/tools">Tools and Tips</Card>
                <Card variant="outlined" className="card demos-button" href="http://localhost:3000/demos">Demos</Card>
            </Box>           
            </div>
            <div className="homepage-footer">
                <div className="homepage-footer-left">
                 <img src={logo} alt="logo" />
                 <div>
                    <CopyrightIcon />
                    <p>2026. All rights reserved.</p>
                    </div>
                    <div>
                    <YouTubeIcon />
                    <LinkedInIcon />
                    <FacebookIcon />
                    </div>   
                </div>  
                <div className="homepage-footer-right">
                    
                    </div> 
            </div>
        </div>
    )
}

export default Homepage
