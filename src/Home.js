import { Box, Grid,Typography,Button,Container,Paper,TextField,OutlinedInput,FormControl} from "@mui/material";
import { useEffect, useState } from "react";
import Auth from "./Auth";
import ImageBox from "./ImageBox";
export default function Home(){

  const[toggle,setToggle]=useState('none')

  const showmenu=false;

  function handleMenu(){

    if(showmenu==false){
     
      setToggle('grid')
    }else{
    
      setToggle('none')
    }
}


return(
   
   <Grid container sx={{background:'#301b52',padding:'15px',border:'1px solid red', height:'100vh'}}>
    <Grid item lg={4}>
    <Typography variant="h6" component="div" sx={{color:'white'}} >
      My Logo
    </Typography>
    </Grid>
    
    <Grid item lg={4} >
              <Box sx={{display:{xs:toggle,lg:'flex'}, color:'white'}} >
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
              </Box>
    </Grid>

    <Grid item lg={4} >
              <Button color="inherit" variant="outlined" sx={{display:{xs:'none',lg:'grid'},color:'white' ,float:'right'}}>
                Login
              </Button>
              <Button sx={{display:{lg:'none', xs:'grid'}, justifyContent:'end'}} onClick={e=>handleMenu()}>MENU</Button>

          </Grid>
    
    <Container sx={{background:'#301b52',height:'70vh',marginTop:'40px',display:'flex',flexDirection:{xs:'column', lg:'row'},alignItems:'center',justifyContent:'center'}}>
    <ImageBox />
     <Auth />
    </Container>  
</Grid>
    




 ) 
}