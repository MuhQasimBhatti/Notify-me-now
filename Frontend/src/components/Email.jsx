import React, { useState } from "react";
import axios from "axios";

const EmailForm = ({emailTo}) => {
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleSendEmail = async () => {
    try {
      const response = await axios.post("http://localhost:3001/send-email", {
        to: emailTo,
        subject,
        text,
      });
      if (response && response.data) {
        console.log(response.data);
      } else {
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.error(error.response ? error.response.data : "Unknown error");
    }
    setSubject("");
    setText("");

  };

  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
      <div
        className="d-flex flex-column p-5 rounded-3 gap-2 smsNemailForm"
      >
        <label>To:</label>
        <input
          type="email"
          value={emailTo}
          readOnly
          className="messageBox"
        />

        <label>Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="messageBox"
        />

        <label>Message:</label>
        <textarea
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="messageBox"
        />

        <button
          onClick={handleSendEmail}
          type="button"
          className="mt-3 custom-button rounded-5 "
          data-mdb-ripple-init
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default EmailForm;
