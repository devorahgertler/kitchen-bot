import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Chip from '@mui/material/Chip';
import { useState } from 'react';

function MealBuilder() {

const [selectedSlice, setSelectedSlice] = useState(null);

  return (
    <div>
        <p>Meal Planning</p>
      <p>Building a balanced meal doesn't have to be complicated. Use the plate below as a simple guide: fill half your plate with vegetables, one quarter with protein, and one quarter with carbohydrates, then add a small amount of healthy fats or flavor boosters. Mix and match ingredients to create meals that fit your tastes, budget, and cooking style.</p>
      <PieChart
      series={[
        {
          data: [
            { id: 0, value: 50, label: 'Vegetables' },
            { id: 1, value: 25, label: 'Protein' },
            { id: 2, value: 25, label: 'Carb' },
          ],
          arcLabel: 'label',
           highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -20, color: 'black' }
        },
      ]}
      slotProps={{
    legend: {
      hidden: true,
    }
  }}
    tooltip={{ trigger: 'none' }}
      width={600}
      height={600}
      
    />
    {selectedSlice === 0 && <div>
        <Chip label="Asparagus" />
<Chip label="Broccoli" />
<Chip label="Brussels Sprouts" />
    </div>
    }
    </div>
  )
}

export default MealBuilder
