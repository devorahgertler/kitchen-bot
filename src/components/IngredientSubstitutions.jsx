import React, { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import '../style sheets/IngredientSubstitutions.css';

function IngredientSubstitutions() {

    const id = React.useId();

    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    const a11yProps = (index) => {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Dairy & Refrigerated Items" {...a11yProps(0)} />
                <Tab label="Baking Ingredients" {...a11yProps(1)} />
                <Tab label="Herbs & Spices" {...a11yProps(2)} />
                <Tab label="Oils, Sauces, & Condiments" {...a11yProps(3)} />
                <Tab label="Pantry Staples" {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0}>

                <div>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Butter</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Neutral oil</li>
                                    <li>Margarine oil</li>
                                    <li>Coconut oil</li>
                                    <li>Applesauce (baking)</li>
                                    <li>Mashed banana (baking)</li>
                                </div>
                                <p>Oil: use 3/4 amount</p>
                                <p>Margarine/coconut oil: 1:1</p>
                                <p>.Applesauce/banana: 1:1 in soft baked goods</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Buttermilk</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Milk + lemon juice</li>
                                    <li>Milk + vinegar</li>
                                    <li>Plain yogurt thinned with milk</li>
                                </div>
                                <p>1 cup milk + 1 tbsp acid</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Cream cheese</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Greek yogurt</li>
                                    <li>Blended cottage cheese</li>
                                </div>
                                <p>Usually 1:1</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Eggs</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Applesauce</li>
                                    <li>Mashed banana</li>
                                    <li>Greek yogurt</li>
                                </div>
                                <p>1 egg = 1/4 cup applesauce/banana/yogurt</p>
                            </div>
                            <p>*Egg replacements work best in pancakes, muffins, brownies, and quick breads. Recipes heavily dependent on eggs may not substitute as cleanly.</p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Heavy Cream</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Half-and-half + butter</li>
                                    <li>Milk +  butter</li>
                                    <li>Coconut cream</li>
                                </div>
                                <p>1 cup = 3/4 cup milk + 1/4 cup butter</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Milk</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Oat milk</li>
                                    <li>Soy milk</li>
                                    <li>Almond milk</li>
                                    <li>Coconut milk</li>
                                    <li>Water + butter</li>
                                    <li>Orange juice</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Ricotta</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Cottage cheese</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Sour cream</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Greek yogurt</li>
                                    <li>Plain yogurt</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Yogurt</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Sour cream</li>
                                    <li>Buttermilk</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>

                <div>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Baking Powder</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Baking soda + cream of tartar</li>
                                </div>
                                <p>1 tsp baking powder = 1/4 tsp baking soda + 1/2 tsp cream of tartar</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Baking Soda</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Baking powder</li>
                                </div>
                                <p>Use 3x amount</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Bread Flour</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>All-purpose flour</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Brown Sugar</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>White sugar + molasses</li>
                                </div>
                                <p>1 cup sugar + 1 tbsp molasses</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Cocoa Powder</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Melted dark chocolate</li>
                                    <li>Hot cocoa powder (less ideal)</li>
                                </div>
                                <p>3 tbsp cocoa ≈ 1 oz chocolate</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Corn Syrup</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Honey</li>
                                    <li>Maple syrup</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Cornstarch</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Flour</li>
                                    <li>Potato starch</li>
                                    <li>Tapioca starch</li>
                                </div>
                                <p>Flour: Use 2x amoount</p>
                                <p>Others: 1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Honey</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Maple syrup</li>
                                    <li>Brown sugar</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Lemon Juice</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Lime juice</li>
                                    <li>Vinegar</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Molasses</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Brown sugar</li>
                                    <li>Maple syrup</li>
                                    <li>Honey</li>
                                </div>
                                <p>Flavor may differ slightly.</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Shortening</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Butter</li>
                                    <li>Coconut oil</li>
                                    <li>Margarine</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Vanilla Extract</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Maple syrup</li>
                                    <li>Almond extract</li>
                                    <li>Vanilla sugar</li>

                                </div>
                                <p>Almond extract is stronger- use less.</p>
                                <p>1 tsp vanilla extract = 1.5 tsp vanilla sugar. Subtract 1.5 tsp of sugar from the recipe and add 1 tsp of liquid.</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Yeast</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Baking powder + lemon juice (limited use)</li>
                                </div>
                                <p>Best only for quick breads and emergency substitutions</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>

            </TabPanel>
            <TabPanel value={value} index={2}>

                <div>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Basil</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Oregano</li>
                                    <li>Italian seasoning</li>

                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Cayenne</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Hot sauce</li>
                                    <li>Chili powder</li>
                                    <li>Red pepper flakes</li>
                                </div>
                                <p>Use less if sensitive to spicy flavors.</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Cilantro</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Parsley</li>
                                    <li>Basil</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Cinnamon</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Nutmeg</li>
                                    <li>Allspice</li>
                                    <li>Pumpkin spice</li>

                                </div>
                                <p>Use slightly less</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Cumin</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Coriander</li>
                                    <li>Chili powder</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Fresh garlic</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Garlic powder</li>
                                    <li>Granulated garlic</li>
                                    <li>Frozen garlic cubes</li>

                                </div>
                                <p>1 clove = 1/4 tsp garlic powder</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Fresh herbs</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Dried Herbs</li>
                                </div>
                                <p>Use about 1/3 amoount</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Ginger</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Allspice</li>
                                    <li>Cinnamon</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Onion powder</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Grated powder</li>
                                    <li>Shallots</li>
                                    <li>Onion soup mix</li>

                                </div>
                                <p>1 tbsp onion powder ≈ 1/2 cup onion</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Paprika</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Chili powder</li>
                                    <li>Smoked paprika</li>
                                    <li>Cayenne</li>
                                </div>
                                <p>Cayenne is much hotter.</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Parsley</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Cilantro</li>
                                    <li>Chives</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Rosemary</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Thyme</li>
                                    <li>Sage</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Thyme</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Oregano</li>
                                    <li>Rosemary</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>

            </TabPanel>
            <TabPanel value={value} index={3}>

                <div>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">BBQ Sauce</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Ketchup + brown sugar + vinegar</li>
                                </div>
                                <p>Approximate replacement</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">BBQ Sauce</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Ketchup + brown sugar + vinegar</li>
                                </div>
                                <p>Approximate replacement</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Chicken Broth</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Vegetable broth</li>
                                    <li>Beef broth</li>
                                    <li>Water + bouillon</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Dijon Mustard</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Yellow mustard</li>
                                    <li>Spicy brown mustard</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Fish Sauce</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Soy sauce</li>
                                    <li>Worcestershire sauce</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Hot Sauce</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Chili flakes + vinegar, cayenne + vinegar</li>
                                </div>
                                <p>Adjust to taste</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Ketchup</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Tomato sauce + vinegar + sugar</li>
                                    <li>Diluted tomato paste</li>
                                </div>
                                <p>Approximate replacement</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Mayo</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Greek yogurt</li>
                                    <li>Sour cream</li>
                                    <li>Mashed avocado</li>

                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Olive oil</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Avocado oil</li>
                                    <li>Vegetable Oil</li>
                                    <li>Melted butter</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Peanut Butter</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Almond butter</li>
                                    <li>Sunflower seed butter</li>
                                    <li>Tahini</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Soy Sauce</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Teriyaki sauce</li>
                                    <li>Worcestershire sauce</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">White Vinegar</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Apple cider vinegar</li>
                                    <li>Rice vinegar</li>
                                    <li>Lemon juice</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">White Wine</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Chicken broth + vinegar</li>
                                    <li>Apple juice + vinegar</li>
                                </div>
                                <p>1:1</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Worcestershire Sauce</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Soy sauce + vinegar + spices</li>
                                </div>
                                <p>Approximate replacement</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Bread Crumbs</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Crushed crackers</li>
                                    <li>Crushed cereal</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Pasta</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Rice noodles</li>
                                    <li>Zucchini noodles</li>
                                    <li>Spaghetti squash</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                        >
                            <Typography component="span">Rice</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="substitution-details">
                                <div>
                                    <li>Couscous</li>
                                    <li>Quinoa</li>
                                    <li>Cauliflower rice</li>
                                </div>
                                <p>1:1 ratio</p>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                </div>
            </TabPanel>
        </div>
    )
};


export default IngredientSubstitutions