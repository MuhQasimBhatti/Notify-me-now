import React from 'react';
import { call, fb, ig, ln, location, mail, tw } from '../images';

export default function App() {
  return (
    <section>
    <div className="container">
    <div className="contactInfo">
      <div>
        <h2>Contact Info</h2>
        <ul className="info">
          <li>
            <span>
              <img src={location} alt="Location" />
            </span>
            <span>
              184 Ippokratous Street<br />
              Athens, Gr<br />
              11472
            </span>
          </li>
          <li>
            <span>
              <img src={mail} alt="Mail" />
            </span>
            <span>
              <a href="mailto: nassosanagn@gmail.com">notifymenow@gmail.com</a>
            </span>
          </li>
          <li>
            <span>
              <img src={call} alt="Call" />
            </span>
            <span>702-279-3488</span>
          </li>
        </ul>
      </div>
      <ul className="sci">
        <li>
          <a href="https://www.facebook.com/">
            <img src={fb} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <img src={ig} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <img src={tw} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">
            <img src={ln} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </div>
    <div className="contactForm">
      <h2>Send a Message</h2>
      <div className="formBox">
        <div className="inputBox w50">
          <input type="text" name="" required />
          <span>First Name</span>
        </div>
        <div className="inputBox w50">
          <input type="text" required />
          <span>Last Name</span>
        </div>
        <div className="inputBox w50">
          <input type="email" required />
          <span>Email Address</span>
        </div>
        <div className="inputBox w50">
          <input type="text" required />
          <span>Mobile Number</span>
        </div>
        <div className="inputBox w100">
          <textarea required></textarea>
          <span>Write your message here...</span>
        </div>
        <div className="inputBox w100">
          <input type="submit" value="Send" />
        </div>
      </div>
    </div>
  </div>
  </section>
    // <div className=' d-flex justify-content-center align-items-center ' style={{height:"100vh"}}>
    // <form id='form' className='text-center shadow-lg bg-light-subtle  rounded-3 p-4 ' style={{ width: '100%', maxWidth: '300px' }}>
    //   <h2>Contact us</h2>

    //   <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

    //   <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

    //   <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

    //   <MDBTextArea wrapperClass='mb-4' label='Message' />

    //   <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

    //   <MDBBtn color='primary' block className='my-4'>
    //     Send
    //   </MDBBtn>
    // </form>
    // </div>
  );
}