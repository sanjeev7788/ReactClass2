import React from "react"
import {Grid,Typography } from "@mui/material"
function ImageBox(){
  
    return(
    <Grid item lg={6} sx={{display:'flex',alignItems:'center', justifyContent:'center'}}>
    <Typography variant="h4" component="div"  sx={{color:'white'}}>
     <img src='bird.png' />
     <h4>Hash Tech</h4>
     </Typography>
    </Grid>
         
    )

}
export default ImageBox