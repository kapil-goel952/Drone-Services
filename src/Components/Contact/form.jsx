import React, { useState } from 'react'


const form = () => {
    const [input,setinput]=useState('')

    const formHandler=(r)=>{
        r.preventDefault();
        console.log('form submitted by',input);
        
    }
  return (
    <div className='min-h-100 w-full bg-fuchsia-200 rounded-2xl p-10'>
        <form onSubmit={(r)=>{ 
            formHandler(r)
        }}>
            <input 
            type="text " 
            placeholder='enter your name' 
            className='border-2 rounded-xl border-amber-600'
            value={input}
            onChange={(inp)=>{
                setinput(inp.target.value)
            }}
            />
            <input type="submit" value='submit' className='border-2 border-amber-950 rounded-2xl w-30 hover:bg-amber-500 hover:text-black'/>
        </form>
    </div>
  )
}

export default form
