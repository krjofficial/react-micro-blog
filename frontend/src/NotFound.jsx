import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Sorry!!</h2>
      <p>That Page cannot be Found</p>
        <Link to ="/">Back to HomePage</Link>
    </div>
  )
}

export default NotFound
