import React from 'react'
import './header.css'

function Header() {
  return (
    <div className="headerNavbar">
      <div className="leftSide">
        <span className="logoContainer">E-Commerce</span>
      </div>
      <div className="rightSide">
        <div className='cart'>
        <svg
          width="17"
          height="11"
          viewBox="0 0 17 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.40007 0.200043C0.958227 0.200043 0.599976 0.558294 0.599976 1.00013C0.599976 1.44197 0.958227 1.80009 1.40007 1.80009H2.83606L3.01043 2.72995L4.02573 9.91212C4.08145 10.3067 4.41923 10.6001 4.8178 10.6001H14.7716C15.1697 10.6001 15.5073 10.3073 15.5636 9.91319L16.5921 2.71319C16.6249 2.48363 16.5565 2.25112 16.4046 2.07595C16.2526 1.90064 16.032 1.80006 15.8002 1.80006H4.46398L4.28639 0.852641C4.21541 0.474298 3.88501 0.200012 3.50008 0.200012L1.40007 0.200043ZM5.51264 9.00016L4.72098 3.40027H14.8774L14.0775 9.00016H5.51264Z"
            fill="#100E3A"
          />
        </svg>

        </div>
        <div className='cartWheel'>
          <svg
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.19995 2.00019C3.19995 2.88384 2.48355 3.6001 1.59991 3.6001C0.716263 3.6001 0 2.88384 0 2.00019C0 1.11655 0.716263 0.400146 1.59991 0.400146C2.48355 0.400146 3.19995 1.11655 3.19995 2.00019Z"
              fill="#100E3A"
            />
          </svg>
          <svg
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.19995 2.00019C3.19995 2.88384 2.48355 3.6001 1.59991 3.6001C0.716263 3.6001 0 2.88384 0 2.00019C0 1.11655 0.716263 0.400146 1.59991 0.400146C2.48355 0.400146 3.19995 1.11655 3.19995 2.00019Z"
              fill="#100E3A"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Header