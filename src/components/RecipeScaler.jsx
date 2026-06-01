import React from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function RecipeScaler() {

    const quantityRegex = /\d+\s+\d+\/\d+|\d+\/\d+|\d*\.\d+|\d+/g;

    const unicodeFractions = {
        '¼': '1/4',
        '½': '1/2',
        '¾': '3/4',
        '⅓': '1/3',
        '⅔': '2/3',
        '⅛': '1/8',
        '⅜': '3/8',
        '⅝': '5/8',
        '⅞': '7/8',
    };

const [recipeInput, setRecipeInput] = useState('');
const [scaledRecipe, setScaledRecipe] = useState('');

    const normalizeUnicodeFractions = (str) => {
        return str.replace(
            /(\d*)([¼½¾⅓⅔⅛⅜⅝⅞])/g,
            (_, whole, fracChar) => {

                const frac =
                    unicodeFractions[fracChar];

                if (whole) {
                    return `${whole} ${frac}`;
                }

                return frac;
            }
        );
    };

    const getFormatType = (str) => {

        const cleaned = String(str).trim();

        if (cleaned.includes('/')) {
            return 'fraction';
        }
        if (cleaned.includes('.')) {
            return 'decimal';
        }
        return 'whole';
    };

    const parseQuantity = (str) => {

        const cleaned = String(str).trim();

        if (
            cleaned.includes(' ') &&
            cleaned.includes('/')
        ) {

            const [whole, frac] =
                cleaned.split(/\s+/);

            const [num, den] =
                frac.split('/');

            return (
                Number(whole) +
                Number(num) / Number(den)
            );
        }

        if (cleaned.includes('/')) {

            const [num, den] =
                cleaned.split('/');

            return Number(num) / Number(den);
        }

        return Number(cleaned);
    };

    const decimalToFraction = (num) => {

        const whole = Math.floor(num);

        const decimal = num - whole;

        const fractions = [
            { decimal: 0.125, text: '1/8' },
            { decimal: 0.25, text: '1/4' },
            { decimal: 0.333, text: '1/3' },
            { decimal: 0.5, text: '1/2' },
            { decimal: 0.666, text: '2/3' },
            { decimal: 0.75, text: '3/4' },
            { decimal: 0.875, text: '7/8' },
        ];

        if (decimal < 0.01) {
            return String(whole);
        }

        let closest = fractions[0];

        for (const fraction of fractions) {

            if (
                Math.abs(decimal - fraction.decimal) <
                Math.abs(decimal - closest.decimal)
            ) {
                closest = fraction;
            }
        }

        if (whole === 0) {
            return closest.text;
        }

        return `${whole} ${closest.text}`;
    };

    const formatScaledQuantity = (
        original,
        scaled
    ) => {

        const formatType =
            getFormatType(original);

        if (formatType === 'decimal') {

            return String(
                Number(scaled.toFixed(2))
            );
        }

        if (formatType === 'fraction') {
            return decimalToFraction(scaled);
        }

        return String(scaled);
    };

    const scaleRecipe = (
        recipe,
        multiplier
    ) => {

        const normalizedRecipe =
            normalizeUnicodeFractions(recipe);

        return normalizedRecipe.replace(
            quantityRegex,
            (match) => {

                const parsed =
                    parseQuantity(match);

                const scaled =
                    parsed * multiplier;

                return formatScaledQuantity(
                    match,
                    scaled
                ) 
            }
        );
    };

    const handleDouble = () => {
            setScaledRecipe(scaleRecipe(recipeInput, 2))

    }

    const handleHalve = () => {
        setScaledRecipe(scaleRecipe(recipeInput, 0.5))
    }
        

    return (
        <div> 
            <p>Paste your recipe here</p>
<TextField
          id="filled-multiline-flexible"
          multiline
          variant="filled"
          onChange={(e) => setRecipeInput(e.target.value)}
        />

      <Button variant="contained" onClick={handleDouble}>Double</Button>
      <Button variant="contained" onClick={handleHalve}>Halve</Button>

        <p>Converted recipe</p>
      <Paper sx={{ whiteSpace: 'pre-line' }}>{scaledRecipe}</Paper>
        </div>
    )
}

export default RecipeScaler;