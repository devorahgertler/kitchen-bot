import React from 'react'
import Paper from '@mui/material/Paper';
import '../style sheets/Tools.css'
import { useNavigate } from 'react-router-dom';


function Tools() {

    const navigate = useNavigate()

    return (
        <div className='options'>

            <div className='option'>
                <div>
                    <p>Tools</p>
                    <button onClick={() => navigate('/viewtools')}>View Tools and Gadgets</button>
                </div>
                <img src='https://res.cloudinary.com/dg9calr9u/image/upload/v1778656967/tools/pexels-mikebirdy-211760_bvd2tf.jpg' alt='Various kitchen tools' />
            </div>

            <div className='option'>
                <img src='https://res.cloudinary.com/dg9calr9u/image/upload/v1778658639/tools/monfocus-measuring-cup-2510243_ky5rhn.jpg' alt='Various kitchen tools' />
                <div>
                    <p>Converters</p>
                    <button onClick={() => navigate('/converters')}>Use Converters</button>
                </div>
            </div>

            <div className='option'>
                <div>
                    <p>Info</p>
                    <button onClick={() => navigate('/info')}>Get Info</button>
                </div>
                <img src='https://res.cloudinary.com/dg9calr9u/image/upload/v1778658827/tools/pexels-dpsinghbhullar-33904619_bogjkt.jpg' alt='Various kitchen tools' />
            </div>

            <div className='option'>
                <img src='https://res.cloudinary.com/dg9calr9u/image/upload/v1778658987/tools/pexels-yaroslav-shuraev-8844564_syjspz.jpg' alt='Various kitchen tools' />
                <div>
                    <p>Resources</p>
                    <button onClick={() => navigate('/resources')}>View Resources</button>
                </div>
            </div>

        </div>
    )
}

export default Tools