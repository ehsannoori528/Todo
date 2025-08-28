import React from 'react'

export default function addTodo() {
  return (


<div className='flex flex-col min-h-screen justify-center items-center'>
    <input
    className='border w-60 rounded'
    type="text" />
    <button className='bg-blue-600 p-2' type='submit'>Submit</button>
</div>
    
  );
}
