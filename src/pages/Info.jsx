import React from "react";
import CookingMethods from "../components/CookingMethods";
import DonenessCharts from "../components/DonenessCharts";
import MealBuilder from "../components/MealBuilder";
import Divider from '@mui/material/Divider';

function Info () {
    return (
        <div>
            <h2>Cooking Methods Guide</h2>
            <p>Understanding basic cooking methods can completely change the way food turns out. Different techniques affect texture, flavor, moisture, and cooking time — and knowing when to use each one makes recipes easier to follow and adapt.</p>
<CookingMethods /> 
<DonenessCharts /> 
<Divider /> 
<MealBuilder />  
   </div>
    )
}

export default Info