import React from 'react'
import { logo } from '../images'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-body-secondary  d-md-flex align-items-center justify-content-between px-5 py-2'>
      <div className='d-flex align-items-center justify-content-center'>
        <img src={logo} width={100}/>
        <span className="d-none d-md-block "> Notify Me Now</span>
      </div>
      <div>
        <p>Copyright@2024</p>
      </div>
      <div>
        <ul className="list-unstyled d-flex align-items-center justify-content-center gap-3">
          <li >
            <Link to="/" className='footerli'>
            About
            </Link>
          </li>
          <li>
            <Link to="/" className='footerli' >
            Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/" className='footerli' >
            Licensing
            </Link>
          </li>
          <li>
            <Link to="/getus" className='footerli' >
            Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer