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
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Terms from '../components/Terms';
import Privacy from '../components/Privacy';
import FAQ from '../components/FAQ';

function Homepage() {

    const [hackOfTheDay, setHackOfTheDay] = useState('')
    const [numberHack, setNumberHack] = useState(0)
    const [isTermsOpen, setIsTermsOpen] = useState(false)
    const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false)
    const [isFaqOpen, setIsFaqOpen] = useState(false)

    const navigate = useNavigate()
    const seconds = useRef(null);

    const handleProgress = (progress) => {
            if (progress.playedSeconds >= 120) {
                seconds.current.seekTo(10)
            }
    }

    const fetchHack = async () => {
        const response = await fetch(`http://localhost:3001/hacks`)
        const data = await response.json()
        setHackOfTheDay(data[0].hack)
           }

    useEffect(() => {
        fetchHack()
    }, [])
      
    return (
        <div className='homepage'>
            <div className='video-wrapper'>
                <ReactPlayer url="https://www.youtube.com/embed/hrqdOMz-meo?si=NrDh3ZzJ5wYaYFaq&amp;controls=0&amp;start=10&end=120"
                    playing={true} ref={seconds} volume={0} muted={true} width="100%" height="100%" controls={false} loop={true} onProgress={handleProgress} progressInterval={500}/>
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
                <Card variant="outlined" className="card recipes-button" onClick={() => navigate('/recipes')}>Recipes</Card>
                <Card variant="outlined" className="card tools-button" onClick={() => navigate('/tools')}>Tools and Tips</Card>
                <Card variant="outlined" className="card blogs-button" onClick={() => navigate('/blogs')}>Blogs</Card>
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
                    We'd love to hear from you! 
                    support@kitchenbot.com
                    <YouTubeIcon />
                    <LinkedInIcon />
                    <FacebookIcon />
                    </div>   
                </div>  
                <div className="homepage-footer-right">
                    <Link underline="hover" onClick={() => setIsTermsOpen(true)}>Terms & Conditions</Link>
                        <Dialog open={isTermsOpen} onClose={() => setIsTermsOpen(false)}>
                            <DialogTitle>Terms and Conditions</DialogTitle>
                            <Terms />
                        </Dialog>
                    <Link underline="hover" onClick={() => setIsPrivacyPolicyOpen(true)}>Privacy Policy</Link>
                            <Dialog open={isPrivacyPolicyOpen} onClose={() => setIsPrivacyPolicyOpen(false)}>
                            <DialogTitle>Privacy Policy</DialogTitle>
                            <Privacy />
                        </Dialog>
                    <Link underline="hover" onClick={() => setIsFaqOpen(true)}>FAQ</Link>
                        <Dialog open={isFaqOpen} onClose={() => setIsFaqOpen(false)}>
                            <DialogTitle>Frequently Asked Questions</DialogTitle>
                            <FAQ />
                        </Dialog>
                    </div> 
            </div>
        </div>
    )
}

export default Homepage
