import React from 'react'
import { useContext } from 'react'
import { CategContext } from '../Context/CategContext'
import { Stack, Typography } from '@mui/material'
import { SingleChip } from './SingleChip'

export const Categories = ({selectedCateg,setSelectedCateg}) => {
    const {categories}=useContext(CategContext)
    //console.log(categories);
  return (
    <Stack direction="row" spacing={1}>
        <Typography>
            Categories
        </Typography>
        {categories && categories.map(obj=>
            <SingleChip key={obj.name} name={obj.name}
                selectedCateg={selectedCateg}
                setSelectedCateg={setSelectedCateg}
            />
            )}
    </Stack>
  )
}
