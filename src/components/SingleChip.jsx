import * as React from 'react';
import Chip from '@mui/material/Chip';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';

export const SingleChip=({name,selectedCateg,setSelectedCateg})=> {
    const [selected,setSelected]=useState(false)

    const handelClick=()=>{
        //console.log(name);
        if(selectedCateg.indexOf(name)==-1){
            setSelected(true)
            setSelectedCateg((prev)=>[...prev,name])
        }else{
            setSelected(false)
            setSelectedCateg(selectedCateg.filter(item=>item!=name))
        }
    }

  return (
      
      <Chip
        label={name}
        variant="outlined"
        clickable
        icon={selected? <DoneIcon/> :<RadioButtonUncheckedIcon/>}
        onClick={handelClick}
      />

  );
}