import React, {useState, useContext} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import recipes from '../images/recipes.jpg';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import '../style sheets/Recipes.css'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import RecipeContext from "../contexts/RecipeContext";

function Recipe ({recipe}) {

    const navigate = useNavigate()

    const { setId } = useContext(RecipeContext)

    const handleClick = () => {
        setId(recipe.id)
        navigate(`/viewrecipe`)
    }  

    return (
        <Card className='recipe-card'>
            <CardHeader title={recipe.title} subheader={recipe.contributor}></CardHeader>
            <CardMedia
                component="img"
                image={recipe.image}
                alt='image of recipe'
            />
            <CardContent>
                <Stack direction="row" spacing={1}>
                    <Chip label={recipe.category} className='chip' sx={{
                        "& .MuiChip-label": {
                            fontSize: "12px"
                        }
                    }} ></Chip>
                    <Chip label={recipe.minutes + ' minutes'} className='chip' sx={{
                        "& .MuiChip-label": {
                            fontSize: "12px"
                        }
                    }}></Chip>
                    <Chip label={recipe.cuisine} className='chip' sx={{
                        "& .MuiChip-label": {
                            fontSize: "15px"
                        }
                    }}></Chip>
                </Stack>
                <Button size="small" onClick={handleClick}>View Recipe</Button>

            </CardContent>
        </Card>
    )
}

export default Recipe;