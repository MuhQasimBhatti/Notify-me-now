import React, { useState } from 'react';
import axios from 'axios';

const SmsForm = () => {
  const [to, setTo] = useState('');
  const [message, setMessage] = useState('');

  const handleSendSMS = async () => {
    try {
      const response = await axios.post('http://localhost:3001/send-sms', { to, message });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
    <div
      className="d-flex flex-column p-5 rounded-3 gap-2 smsNemailForm"
    >
      <label>To:</label>
      <input
        type="text"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className='messageBox'
      />

      <label>Message:</label>
      <textarea
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className='messageBox'
      />

      <button
        onClick={handleSendSMS}
        type="button"
        className="mt-3 custom-button rounded-5 "
        data-mdb-ripple-init
      >
        Send Message
      </button>
    </div>
  </div>
  );
};

export default SmsForm;
