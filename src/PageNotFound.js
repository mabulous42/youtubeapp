import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
        <h1 className=''>Page Not Found</h1>
        <Link to={"/"}>Click here to go back to the home page</Link>
    </>
  )
}

export default PageNotFound