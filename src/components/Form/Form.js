import React from 'react';

export default function Form() {
  return (
    <>
    <form>
      <label>
        FullName:
        <input type="text"/>
      </label>
      <label>
        Email:
        <input type="email"/>
      </label>
      <label>
        Mobile-Number:
        <input type="phone"/>
      </label>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}
