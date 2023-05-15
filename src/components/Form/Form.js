import React from 'react';

export default function Form() {
  return (
    <>
    <form>
        <input type="text" placeholder='enter your fullname' className='mt-2'/><br/>

        <input type="email" placeholder='enter your email' className='mt-2'/><br/>
  
        <input type="phone" placeholder='enter your phone number' className='mt-2' /><br/>

      <button type="submit" className='mt-2'>Submit</button>
    </form>
    </>
  )
}
