import React from 'react'
import Paper from '@mui/material/Paper';
import '../style sheets/DonenessCharts.css';

function DonenessCharts() {
  return (
    <div>
     <Paper elevation={0} className="meat-doneness">
        <h2>Meat Doneness Temperatures</h2>
        <h4>Beef/Steak</h4>
         <p>Rare: 120–125°F</p>
         <p>Medium: Rare:	130–135°F</p>
         <p>Medium: 140–145°F</p>
         <p>Medium: Well	150–155°F</p>
         <p>Well Done: 160°F+</p>

        <h4>Chicken</h4>
          <p>Safe Internal Temperature: 165°F</p>
          <p>Dark meat remains juicier slightly above 165°F.</p>

        <h4>Fish</h4>
          <p>Fully Cooked: 145°F</p>
          <p>Fish should flake easily with a fork.</p>
      </Paper> 

      <Paper elevation={0} className="baked-goods-doneness">
        <h2>Baked Goods Doneness Signs</h2>
        <h4>Bread</h4>
         <p>Golden brown crust</p>
         <p>Hollow sound when tapped</p>
         <p>Internal temperature: around 190–210°F</p>
    
        <h4>Brownies</h4>
          <p>Slightly soft center for fudgy texture</p>
          <p>Inserted toothpick should come out with moist crumbs, not wet batter</p>


        <h4>Cake</h4>
          <p>Toothpick comes out clean or with a few crumbs</p>
          <p>Edges begin pulling slightly from pan</p>

        <h4>Cookies</h4> 
          <p>Centers may still look slightly soft</p> 
          <p>Continue setting as they cool</p> 
 
      </Paper> 
    </div>
  )
}

export default DonenessCharts



// Baked Goods Doneness Tooltips
// Bread
// Golden brown crust
// Hollow sound when tapped
// Internal temperature around 190–210°F
// Brownies
// Slightly soft center for fudgy texture
// Toothpick should have moist crumbs, not wet batter
// Cakes
// Toothpick comes out clean or with a few crumbs
// Edges begin pulling slightly from pan
// Cookies
// Centers may still look slightly soft
// Continue setting as they cool
// Vegetable Doneness Tooltips
// Roasted Vegetables
// Browning around edges
// Fork tender center
// Pasta
// Al Dente

// Firm with slight resistance in center.

// Rice
// Tender but not mushy
// Liquid fully absorbed