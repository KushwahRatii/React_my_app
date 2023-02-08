import React from 'react'

const Contact = () => {
  return (
    <div className='Contact'>
        <main>
            <h1>Contact Us</h1>
            <form action="">
                <div>
                    <label>Name: </label>
                    <input type="text" required placeholder="abc" />
                    
                   <label>Email: </label>
                    <input type={'email'} required placeholder="abc@gmail.com" />
                
                   
                    <label>Message:</label>
                    <input type="text" required placeholder="Tell us about ur query..." />
                    
                </div>
                <button type='submit'></button>
            </form>
        </main>
    </div>
  )
}

export default Contact