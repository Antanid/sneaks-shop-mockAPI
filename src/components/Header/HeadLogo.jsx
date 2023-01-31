import React from 'react'
import { Link } from 'react-router-dom'

const HeadLogo = ({logoImg, h3, p}) => {
  return (
    <Link to='/'>
    <div className=" d-flex align-center">
        <img
            src={logoImg}
            alt="logo"
        />
        <div>
            <h3>{h3}</h3>
            <p>{p}</p>
        </div>

    </div>
</Link>
  )
}

export default HeadLogo