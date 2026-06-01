import React from 'react'
import { useContext, useEffect } from 'react';
import RecipeContext from '../contexts/RecipeContext';
import Chip from '@mui/material/Chip';
import { uuidv7 } from "uuidv7";

function ViewRecipe() {

    const { title, setTitle } = useContext(RecipeContext);
    const { id, setId } = useContext(RecipeContext);
    const { image, setImage } = useContext(RecipeContext);
    const { ingredients, setIngredients } = useContext(RecipeContext);
    const { directions, setDirections } = useContext(RecipeContext);
    const { hours, setHours } = useContext(RecipeContext);
    const { minutes, setMinutes } = useContext(RecipeContext);
    const { contributor, setContributor } = useContext(RecipeContext);
    const { notes, setNotes } = useContext(RecipeContext);
    const { category, setCategory } = useContext(RecipeContext);
    const { cuisine, setCuisine } = useContext(RecipeContext);

const getRecipeInfo = async () => {
        const response = await fetch(`http://localhost:3001/viewrecipe/${id}`)
        const data = await response.json()
        setTitle(data[0].title)
        setImage(data[0].image)
        setIngredients(data[0].ingredients)
        setDirections(data[0].directions)
        setHours(data[0].hours)
        setMinutes(data[0].minutes)
        setContributor(data[0].contributor)
        setNotes(data[0].notes)
        setCategory(data[0].category)
        setCuisine(data[0].cuisine)
    }

    useEffect(() => {
        getRecipeInfo()
    }, [])

    return (
        <div>
            <h1>{title}</h1>
            <h3>By {contributor}</h3>
            <img src={image}/>
            {hours > 0 && minutes === 0 && <p>Time: {hours} hours</p>}
            {hours > 0 && minutes > 0 && <p>Time: {hours} hours, {minutes} minutes</p>}
            {hours === 0 && minutes > 0 && <p>Time: {minutes} minutes</p>}
            <h3>Ingredients:</h3>
            <p>{ingredients.map (ingredient => <li key={uuidv7()}>{ingredient}</li>)}</p>
            <h3>Directions:</h3>
            <ol>{directions.map (direction => <li key={uuidv7()}>{direction}</li>)}</ol>
            <p>{notes}</p>
             <Chip label={category} className='chip' sx={{
                        "& .MuiChip-label": {
                            fontSize: "12px"
                        }
                    }} ></Chip>
                     <Chip label={cuisine} className='chip' sx={{
                        "& .MuiChip-label": {
                            fontSize: "15px"
                        }
                    }}></Chip>

        </div>
    )
}

export default ViewRecipe;