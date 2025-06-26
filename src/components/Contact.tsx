import React, { useEffect } from 'react'

const Contact: React.FC = () => {
    useEffect(()=>{
    
          let footer = document.querySelector(".footer") as HTMLElement;
          footer.style.paddingBottom = "20px"
    
          return ()=>{
            footer.style.paddingBottom = "220px"
          }
      },[])
  return (
    <>
    <div className='contact-us'>
        <div className='picture'>
            <img src="./asset 99.jpeg" alt="" />
        </div>
        <div className='form' onSubmit={(e)=>{
            e.preventDefault()
        }}>
            <h1>Contact Details</h1>
            <form action="">
                <label htmlFor="name">Full Name<span className='star'>*</span></label>
                <input type="text" name="name" id="name" placeholder='Jane Smith' required/>
                <label htmlFor="email">Email<span className='star'>*</span></label>
                <input type="email" name="email" id="email" placeholder='janeSmith@gmail.com' required/>
                <label htmlFor="textbox">Message</label>
                <textarea name="textbox" id="textbox" rows={6}></textarea>
                <button type="submit" className='submit-btn'>Submit</button>
            </form>
        </div>
    </div>
    <div className='more-contact'>
        <div>
           <h1>Our Email</h1>
           <p><a href="mailto:contact@ridemevot.com">contact@ridemevot.com</a></p> 
        </div>
        <div>
            <h1>Customer Support</h1>
            <p><a href="tel:(781) 555-1058">(781) 555-1058</a></p>
        </div>
    </div>
  </>
  )
}

export default Contact