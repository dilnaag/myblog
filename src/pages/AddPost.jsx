import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { NotFound } from "./NotFound";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CategContext } from '../Context/CategContext'
import { useState } from "react";
import { TextEditor } from "../components/TextEditor";
import { FileInput } from "../components/FileInput";
import Button from '@mui/material/Button';
import { uploadFile } from "../utility/uploadFile";
import { addPost } from "../utility/crudUtility";


export const AddPost = () => {
  const { user } = useContext(UserContext);
  const {categories}=useContext(CategContext)

  const [categ,setCateg]=useState(0)
  const [title,setTitle]=useState('')
  const [story,setStory]=useState('')
  const [image,setImage]=useState(null)

  if (!user) return <NotFound />;

  console.log(categ, title);

    const handelSubmit=async (e)=>{
        e.preventDefault()
        try{
          const photoUrl=await uploadFile(image)
          await addPost({
            title,
            category:categ,
            photoUrl,
            author:user.displayName,
            userId:user.uid,
            description:story,
            likes:[],
            likesCount:0
          })
        }catch(err){
          console.log(err);
        }
        
    }

  return (
    <div className="createPost">
      <h3>Create post</h3>

    <Box component="form" onSubmit={handelSubmit} sx={{ "& > :not(style)": { m: 1, width: "25ch" }, }}
    noValidate autoComplete="off" >

        <TextField
         id="outlined-basic"
         label="Post Title"
         autoFocus variant="outlined"
         value= {title}
         onChange={(e)=>setTitle(e.target.value)} 
        />
    <Box sx={{display:"flex", flexWrap:'wrap', gap:2}}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={categ}
             label="Category"
             onChange={(e)=>setCateg(e.target.value)}
            >
                <MenuItem value={0}>válassz...</MenuItem>
                {categories && categories.map(obj=>
                    <MenuItem key={obj.name} value={obj.name}>{obj.name}</MenuItem>
                    )}

            </Select>
        </FormControl>
    </Box>
        <FormControl sx={{display:"flex", width:'100%'}}>
            <TextEditor story={story} setStory={setStory}/>
        </FormControl>
        
        <FileInput setImage={setImage} />

        <Button type='submit' variant="contained"
         disabled={title.length==0 || categ==0 || story.length==0 || !image}
        >
            Contained
        </Button>

    </Box>
    </div>
  );
};
