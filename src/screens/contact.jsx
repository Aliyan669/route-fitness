import React from 'react';
import '../App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Contact() {
  return (
    <div className='app4'>
      <div className='part1'>
       <form action="">
        <label>
        <TextField sx={{margin:'20px 0'}} className='input'  label="Enter Name" variant="outlined" />
        </label>
        <label>
        <TextField sx={{margin:'20px 0'}}className='input'  label="Enter Email" variant="outlined" />
        </label> 
        <label>
          <textarea name="" id="" cols="50" rows="10" placeholder='Write Something'></textarea>
        </label>
       </form>
       <div>
       <Button variant="outlined">SUBMIT</Button>
       </div>
      </div>
      <div className='part2'>
        <img width="600px" height="400px" src="gallery2.jpg" />
      </div>
       
    </div>
  )
}
