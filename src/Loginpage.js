import { Typography,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useEffect, useState } from "react"

function Loginpage(){

   const[data,setData] =useState([])

    useEffect(()=>{
       
       async function fetchApi(){
       try{
       const response= await fetch("https://jsonplaceholder.typicode.com/todos");
       const apidata= await response.json();
       setData(apidata);

       }catch(err){
           
           console.log(err)
       }
       
    }
     fetchApi()   

    },[])

    return(
      
      <TableContainer component={Paper} sx={{background:'#301b52' ,color:'white'}}>
      <Table aria-label="simple table" sx={{width:'50%',alignContent:'space-around',justifyContent:'center'}}>
        <TableHead>
        
          <TableRow >
            <TableCell sx={{color:'white'}}>ID</TableCell>
            <TableCell sx={{color:'white'}}>Title</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody >
          {data.map((data) => (
            <TableRow key={data.id} >
              <TableCell sx={{color:'white'}}>{data.id}</TableCell>
              <TableCell sx={{color:'white'}}>{data.title}</TableCell>
                          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>





    )
}
export default Loginpage