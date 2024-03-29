// const express = require('express');
// const twilio = require('twilio');
// const cors = require('cors'); // Import the cors middleware

// const app = express();
// const port = process.env.PORT || 3001;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors({
//     origin: 'http://localhost:3000', // Allow requests from this origin
//     optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
//   }));

// // Twilio configuration
// const twilioAccountSid = 'ACd5e5cd90dd417814c0600aad7fb8a222';
// const twilioAuthToken = '64c0f68a3d6fc5457ce7f5e415f0bf02';
// const twilioPhoneNumber = 'YOUR_TWILIO_PHONE_NUMBER';
// const twilioClient = twilio(twilioAccountSid, twilioAuthToken);

//

// app.post('/send-sms', (req, res) => {
//   const { to, message } = req.body;

//   twilioClient.messages.create({
//     body: message,
//     from: twilioPhoneNumber,
//     to: to,
//   })
//   .then(message => res.json({ success: true, message: 'SMS sent successfully', sid: message.sid }))
//   .catch(error => res.json({ success: false, message: error.message }));
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Create an instance of the Express application
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "notifymenow",
});

// Connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error("Connection to database failed:", error);
  } else {
    console.log("Connected to database");
  }
});

// Register route
app.post("/register", (req, res) => {
  // Insert the user data into the database
  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  connection.query(
    sql,
    [req.body.name, req.body.email, req.body.password],
    (queryError) => {
      if (queryError) {
        console.error(queryError);
        res.json({ success: false, message: "Registration failed" });
      } else {
        res.json({ success: true, message: "Registration successful" });
      }
    }
  );
});

// // Login route
app.post("/login", (req, res) => {
  // Retrieve the user data from the database based on the email
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  connection.query(
    sql,
    [req.body.email, req.body.password],
    (queryError, results) => {
      if (queryError) {
        console.error(queryError);
        res.json({ success: false, message: "Login failed" });
      } else if (results.length === 0) {
        // User not found
        res.json({ success: false, message: "Invalid email or password" });
      } else {
        res.json({ success: true, message: "Login successfully" });
      }
    }
  );
});

const emailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "muhqasim96@gmail.com",
    pass: "rdimxkfinyewwjuh",
  },
});

app.post("/send-email", (req, res) => {
  const { to, subject, text } = req.body;
  var recepients=[];
  
  if(to==="Frontend Team"){
   recepients = ['muhammadqasimbhatti4@gmail.com','imaraasim01@gmail.com'];
  }
  else if(to==="Backend Team"){
    recepients = ['asim.bhatti36@gmail.com','noshabbaasim@gmail.com'];
   }
   else if(to==="SEO Team"){
    recepients = ['javaria.kouser786@gmail.com','qasim@robx.ai'];
   }
   else if(to==="Marketing Team"){
    recepients = ['muhammadhassanmuneer1@gmail.com','asimraufbhatti123@gmail.com'];
   }

  const mailOptions = {
    from: "muhqasim96@gmail.com",
    to: recepients.join(','),
    subject: subject,
    text: text,
  };

  emailTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.json({ success: false, message: error.message });
    }
    res.json({ success: true, message: "Email sent successfully", info: info });
  });
});
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
