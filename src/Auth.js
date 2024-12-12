import React from "react";
import { Box, Grid,Typography,Button,Container,Paper,TextField,OutlinedInput,FormControl} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Auth(){

    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    
    const[userdata,setUserdata]=useState([]);

   const[showSingup,setShowSignUp]=useState(false)
   
    const navigate=useNavigate()
    function handleLogin(){


        const data={
          email:email,
          password:password
        }
        setUserdata(data)
      console.log(userdata)
      navigate('/login')

    }

    function handleSignup(){

        setShowSignUp(true)

        const data1={
            name:username,
            email:email,
            password:password
          }
          setUserdata(data1)
        console.log(userdata)

    }

 return(
  
    <Grid item lg={6} sx={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center', background:'#c9c4d2',padding:'40px',borderRadius:'10px'}}>
    <Typography>
       <h2>Login Form</h2> 
    </Typography >
     <Box sx={{display:'grid'}}>
       {
        showSingup&&<TextField   placeholder="username" name="username"  value={username} onChange={e=>setUsername(e.target.value)}/>
       } 
      <TextField   placeholder="email" name="email"  value={email} sx={{marginTop:'10px'}} onChange={e=>setEmail(e.target.value)}/>
      <TextField  placeholder="password" name="password" value={password} sx={{marginTop:'10px'}} onChange={e=>setPassword(e.target.value)}/> 
      </Box>  
      <Button sx={{display:'flex'}}>
      <Button variant="contained" onClick={e=>handleLogin()}>Login</Button>
      <Button variant="contained" sx={{marginLeft:'5px',background:'red'}}  onClick={e=>handleSignup()}>Signup</Button>
      </Button>

      <Typography>{userdata.email}</Typography>
    </Grid>
)


}
export default Auth