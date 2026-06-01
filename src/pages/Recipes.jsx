import React, { useEffect } from 'react'
import { useState } from 'react'
import Recipe from '../components/Recipe'
import '../style sheets/Recipes.css'
import { uuidv7 } from "uuidv7";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import Drawer from '@mui/material/Drawer';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Alert from '@mui/material/Alert';

function Recipes() {

    const [recipesToDisplay, setRecipesToDisplay] = useState([])
    const [openEndedSearch, setOpenEndedSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [categoryParams, setCategoryParams] = useState([])
    const [cuisineParams, setCuisineParams] = useState([])
    const [prepTimeParams, setPrepTimeParams] = useState(null)
    const [restrictionsParams, setRestrictionsParams] = useState([])
    const [isAlertDisplayed, setIsAlertDisplayed] = useState(false)

     const displayAll = async () => {
        setIsLoading(true)
                setIsAlertDisplayed(false)
        const response = await fetch('http://localhost:3001/recipes', { credentials: 'include' })
        const data = await response.json()
        setIsLoading(false)
        setRecipesToDisplay([...data])
    }

    useEffect(() => {
        displayAll()
    }, []
    )

    const handleOpenEndedSearch = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        setIsAlertDisplayed(false)
        try {
            const response = await fetch(`http://localhost:3001/opensearch`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ openEndedSearch })
            })
            const data = await response.json()
            setIsLoading(false)
            if (data.length > 0) {
                setRecipesToDisplay([...data])
            } else {
setIsAlertDisplayed(true)
setRecipesToDisplay([])
            }
        } catch (err) {
            console.log(err)
        }
        setOpenEndedSearch('')
    }

    const handleSearchCategoryFilters = (e) => {
        if (e.target.checked) {
            setCategoryParams([...categoryParams, e.target.value])
        }
        else {
            const itemToRemove = (item) => {
                return (item !== e.target.value)
            }
            const filteredArray = [...categoryParams].filter(itemToRemove)
            setCategoryParams(filteredArray)
        }
    }

    const handleSearchCuisineFilters = (e) => {
        if (e.target.checked) {
            setCuisineParams([...cuisineParams, e.target.value])
        }
        else {
            const itemToRemove = (item) => {
                return (item !== e.target.value)
            }
            const filteredArray = [...cuisineParams].filter(itemToRemove)
            setCuisineParams(filteredArray)
        }
    }

    const handleSearchPrepTimeFilters = (e) => {
        const value = Number(e.target.value);
        setPrepTimeParams(prev =>
            prev === value ? null : value
        );
    };

    const handleSearchRestrictionsFilters = (e) => {
        if (e.target.checked) {
            setRestrictionsParams([...restrictionsParams, e.target.value])
        }
        else {
            const itemToRemove = (item) => {
                return (item !== e.target.value)
            }
            const filteredArray = [...restrictionsParams].filter(itemToRemove)
            setRestrictionsParams(filteredArray)
        }
    }

    const handleAdvancedSearch = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true)
                    setIsAlertDisplayed(false)
            const response = await fetch(`http://localhost:3001/advancedsearch`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ categoryParams, cuisineParams, prepTimeParams, restrictionsParams })
            })
  setCategoryParams([]);
  setCuisineParams([]);
  setPrepTimeParams(null);
              setRestrictionsParams([]);
            const data = await response.json()
            setIsLoading(false)
            if (data.length > 0) {
                setRecipesToDisplay([...data])
            } else {
                setIsAlertDisplayed(true)
                setRecipesToDisplay([])           
                }
        } catch (err) {
            setIsLoading(false)
            console.log(err)
        }
    }

    return (
        <div>
            <form onSubmit={handleOpenEndedSearch}>
                <TextField id="outlined-basic" label="Search" variant="outlined" value={openEndedSearch} onChange={(e) => setOpenEndedSearch(e.target.value)} />
                <IconButton type="submit">
                    <SearchIcon />
                </IconButton>
            </form>
            {isAlertDisplayed && <Alert severity="error">Sorry, there are no recipes that meet your criteria.</Alert>}
            {isLoading && <CircularProgress aria-label="Loading…" />}
            <Drawer variant="permanent" className="drawer">
                <FormLabel component="legend">Category</FormLabel>
                <FormGroup>
                    <FormControlLabel control={<Checkbox value="appetizer" checked={categoryParams.includes('appetizer')}
onChange={handleSearchCategoryFilters} />} label="Appetizers" />
                    <FormControlLabel control={<Checkbox value="main" checked={categoryParams.includes('main')} onChange={handleSearchCategoryFilters} />} label="Mains" />
                    <FormControlLabel control={<Checkbox value="side" checked={categoryParams.includes('side')} onChange={handleSearchCategoryFilters} />} label="Sides" />
                    <FormControlLabel control={<Checkbox value="salad" checked={categoryParams.includes('salad')} onChange={handleSearchCategoryFilters} />} label="Salads" />
                    <FormControlLabel control={<Checkbox value="soup" checked={categoryParams.includes('soup')} onChange={handleSearchCategoryFilters} />} label="Soups" />
                    <FormControlLabel control={<Checkbox value="dessert" checked={categoryParams.includes('dessert')} onChange={handleSearchCategoryFilters} />} label="Desserts" />
                </FormGroup>
                <FormLabel component="legend">Cuisine</FormLabel>
                <FormGroup>
                    <FormControlLabel control={<Checkbox value="American" checked={cuisineParams.includes('American')} onChange={handleSearchCuisineFilters} />} label="American" />
                    <FormControlLabel control={<Checkbox value="Mediterranean" checked={cuisineParams.includes('Mediterranean')} onChange={handleSearchCuisineFilters} />} label="Mediterranean" />
                    <FormControlLabel control={<Checkbox value="Mexican" checked={cuisineParams.includes('Mexican')} onChange={handleSearchCuisineFilters} />} label="Mexican" />
                    <FormControlLabel control={<Checkbox value="Chinese" checked={cuisineParams.includes('Chinese')} onChange={handleSearchCuisineFilters} />} label="Chinese" />
                    <FormControlLabel control={<Checkbox value="Italian" checked={cuisineParams.includes('Italian')} onChange={handleSearchCuisineFilters} />} label="Italian" />
                    <FormControlLabel control={<Checkbox value="other" checked={cuisineParams.includes('other')} onChange={handleSearchCuisineFilters} />} label="Other" />
                </FormGroup>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Prep Time</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={prepTimeParams}
                    >
                        <FormControlLabel value={15} control={<Radio onClick={handleSearchPrepTimeFilters}
                        />} label="Up to 15 minutes" />
                        <FormControlLabel value={30} control={<Radio onClick={handleSearchPrepTimeFilters}
                        />} label="Up to 30 minutes" />
                        <FormControlLabel value={45} control={<Radio onClick={handleSearchPrepTimeFilters}
                        />} label="Up to 45 minutes" />
                        <FormControlLabel value={60} control={<Radio onClick={handleSearchPrepTimeFilters}
                        />} label="Up to 1 hour" />
                    </RadioGroup>
                </FormControl>
                <FormLabel component="legend">Restrictions</FormLabel>
                <FormGroup>
                    <FormControlLabel control={<Checkbox value="gluten" checked={restrictionsParams.includes('gluten')} onChange={handleSearchRestrictionsFilters} />} label="Gluten free" />
                    <FormControlLabel control={<Checkbox value="dairy" checked={restrictionsParams.includes('dairy')} onChange={handleSearchRestrictionsFilters} />} label="Dairy free" />
                    <FormControlLabel control={<Checkbox value="nut" checked={restrictionsParams.includes('nut')} onChange={handleSearchRestrictionsFilters} />} label="Nut free" />
                    <FormControlLabel control={<Checkbox value="sugar" checked={restrictionsParams.includes('sugar')} onChange={handleSearchRestrictionsFilters} />} label="Sugar free" />
                    <FormControlLabel control={<Checkbox value="vegetarian" checked={restrictionsParams.includes('vegetarian')} onChange={handleSearchRestrictionsFilters} />} label="Vegetarian" />
                </FormGroup>
                <Button size="small" onClick={handleAdvancedSearch}>Apply advanced search filters</Button>
            </Drawer>
            <div className='displayed-recipes'>
                {recipesToDisplay.map(recipe => <Recipe recipe={recipe} key={uuidv7()} />)}
            </div>
        </div>

    )
}

export default Recipes