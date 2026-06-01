import React, {useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import RecipeScaler from "../components/RecipeScaler";
import IngredientSubstitutions from "../components/IngredientSubstitutions";

function Conversions () {

const createLiquidData = (tsp, tbsp, oz, cups, ml) => {
        return { tsp, tbsp, oz, cups, ml };
    }

    const liquidMeasurements = [
        createLiquidData('3 tsp', '1 tbsp', '0.5 fl oz', '1/16 cup', '15 mL'),
                createLiquidData('6 tsp', '2 tbsp', '1 fl oz', '1/8 cup', '30 mL'),
                createLiquidData('12 tsp', '4 tbsp', '2 fl oz', '1/4 cup', '60 mL'),
                                createLiquidData('16 tsp', '5 1/3 tbsp', '2.7 fl oz', '1/3 cup', '80 mL'),
                createLiquidData('24 tsp', '8 tbsp', '4 fl oz', '1/2 cup', '120 mL'),
                                createLiquidData('32 tsp', '10 2/3 tbsp', '5.3 fl oz', '2/3 cup', '160 mL'),
                createLiquidData('36 tsp', '12 tbsp', '6 fl oz', '3/4 cup', '180 mL'),

                createLiquidData('48 tsp', '16 tbsp', '8 fl oz', '1 cup', '240 mL'),

    ];

    const createSolidData = (tsp, tbsp, cups, lb, g) => {
        return { tsp, tbsp, cups, lb, g };
    }

       const solidMeasurements = [
        createSolidData('3 tsp', '1 tbsp', '1/16 cup', '0.03 lbs', '15 g'),
        createSolidData('6 tsp', '2 tbsp', '1/8 cup', '0.06 lbs', '30 g'),
                       createSolidData('12 tsp', '4 tbsp', '1/4 cup', '0.13 lbs', '60 g'),
                               createSolidData('16 tsp', '5 1/3 tbsp', '1/3 cup', '0.18 lbs', '80 g'),
        createSolidData('24 tsp', '8 tbsp', '1/2 cup', '0.26 lbs', '120 g'),
                createSolidData('32 tsp', '10 2/3 tbsp', '2/3 cup', '0.35 lbs', '160 g'),
        createSolidData('36 tsp', '12 tbsp', '3/4 cup', '0.40 lbs', '180 g'),
        createSolidData('48 tsp', '16 tbsp', '1 cup', '0.53 lbs', '240 g'),
    ];

const createTemperatureData = (f, c) => {
        return { f, c };
    }

    const temperatureMeasurements = [
        createTemperatureData('250 F', '120 C'),
        createTemperatureData('300 F', '150 C'),
        createTemperatureData('325 F', '165 C'),
                    createTemperatureData('350 F', '175 C'),
        createTemperatureData('375 F', '190 C'),
        createTemperatureData('400 F', '205 C'),
        createTemperatureData('425 F', '220 C'),
        createTemperatureData('450 F', '230 C'),
    ];

    return (
        <div>
          <div id="conversion-tables">
              <h1>Liquid Measurement Conversions</h1>
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Teaspoons</TableCell>
            <TableCell align="left">Tablespoons</TableCell>
            <TableCell align="left">Fluid Ounces</TableCell>
            <TableCell align="left">Cups</TableCell>
            <TableCell align="left">Milliliters</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {liquidMeasurements.map((liquidMeasurement) => (
            <TableRow
              key={liquidMeasurement.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {liquidMeasurement.name}
              </TableCell>
              <TableCell align="left">{liquidMeasurement.tsp}</TableCell>
              <TableCell align="left">{liquidMeasurement.tbsp}</TableCell>
              <TableCell align="left">{liquidMeasurement.oz}</TableCell>
              <TableCell align="left">{liquidMeasurement.cups}</TableCell>
                            <TableCell align="left">{liquidMeasurement.ml}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h4>Quick Tip</h4>
    <p>For the most accurate liquid measurements, use a clear liquid measuring cup with measurement lines and check it at eye level on a flat surface.</p>


    <h1>Solid Measurement Conversions</h1>
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Teaspoons</TableCell>
            <TableCell align="left">Tablespoons</TableCell>
            <TableCell align="left">Cups</TableCell>
            <TableCell align="left">Pounds</TableCell>
            <TableCell align="left">Grams</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {solidMeasurements.map((solidMeasurement) => (
            <TableRow
              key={solidMeasurement.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {solidMeasurement.name}
              </TableCell>
              <TableCell align="left">{solidMeasurement.tsp}</TableCell>
              <TableCell align="left">{solidMeasurement.tbsp}</TableCell>
              <TableCell align="left">{solidMeasurement.cups}</TableCell>
              <TableCell align="left">{solidMeasurement.lb}</TableCell>
                            <TableCell align="left">{solidMeasurement.g}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h4>Important Note</h4>
    <p>Solid ingredient measurements can vary depending on density, but these references work well for general kitchen conversions.</p>


    <h1>Temperature Conversions</h1>
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Fahrenheit</TableCell>
            <TableCell align="left">Celsius</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {temperatureMeasurements.map((temperatureMeasurement) => (
            <TableRow
              key={temperatureMeasurement.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {temperatureMeasurement.name}
              </TableCell>
              <TableCell align="left">{temperatureMeasurement.f}</TableCell>
              <TableCell align="left">{temperatureMeasurement.c}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h4>Quick Reference</h4>
    <p>Low heat: 250–325°F</p> 
    <p>Medium heat: 350–375°F</p>
    <p>High heat: 400°F+</p>
          </div>
            

<Divider />
<div id="recipe-scaler">
     <RecipeScaler />

</div>
<Divider />
<div id="ingredient-substitutions">
   <IngredientSubstitutions />
</div>
        </div>
    )
}

export default Conversions