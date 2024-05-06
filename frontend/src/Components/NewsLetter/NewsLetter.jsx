import React from 'react'
import "./NewsLetter.css"

function NewsLetter() {
  return (
    <div className="newsletter">
        <h1>Get Exclusive On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="newsletter-subscribe">
            <input type="email" placeholder='your email id' value="" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter