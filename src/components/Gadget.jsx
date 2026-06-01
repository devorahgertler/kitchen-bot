import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import '../style sheets/Gadgets.css';
import Button from '@mui/material/Button';

function Gadget ({gadget}) {
    return (
        <div>
        <Card className='gadget-card'>
            <CardContent>
            <CardHeader title={gadget.title} subheader={gadget.intro}></CardHeader>
            <p>Best for: {gadget.best_for}</p>
            <p>{gadget.why}</p>
           <a href={gadget.link} target="_blank"> <Button variant="contained">Buy Now</Button></a>
            <p>${gadget.price}</p>
            </CardContent>

        </Card>
        </div>
    )
}

export default Gadget;