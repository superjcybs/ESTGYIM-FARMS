import React from 'react'

function Contact() {
  return (
    <div id='contact'>
      <h1>Contact Us via Email</h1>
      <form action="https://formspree.io/f/myyoonyo" method="POST">
        <input type='text' placeholder='Full Name' required />
        <input type='email' placeholder='Email' required />
        <textarea placeholder='Write Your Message Here...'></textarea>
        <input type='submit' value='Send' />
      </form>
    </div>

  )
}

export default Contact