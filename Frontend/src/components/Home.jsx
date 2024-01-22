import React from "react";
import {
  Feedback,
  hero2,
  hero3,
  landingPage1,
  landingPage2,
  landingPage3,
  landingPage4,
  landingPage5,
  landingPage6,
} from "../images";
import { Link } from "react-router-dom";
import Footer from "./Footer"
const Home = () => {
  return (
    <div className="landingPage">
      <div style={{ padding:"7% 10%",}}>
        <div className="d-lg-flex" style={{ paddingTop: "4rem", gap: "10rem", paddingLeft:"1rem" , paddingRight:"1rem"}}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="heroHeading">
              Ease Your Conversations with Notify Me Now
            </h1>
            <p className="me-1" style={{color:"#6f2836",fontSize:"20px"}}>
              Your premier destination for efficient group messaging and email
              services. Streamline your communication with ease by sending
              messages and emails to multiple groups simultaneously. Stay
              connected and informed with our intuitive platform designed to
              keep you in sync with your networks. Simplify your outreach and
              elevate your communication game with NotifyMeNow. Sign up today
              and start broadcasting your messages hassle-free!
            </p>
          </div>
          <div className="text-center ">
            <img src={hero3} className="heroImage image-fluid"  />
          </div>
        </div>

        <div className="text-center " style={{ marginTop: "4rem" }}>
          <h2 className="" style={{ fontWeight: "bold",color:"#FD7F27", }}>
            Send Timely Alerts and Notifications with the SMS and Email Services
          </h2>
          <p className="" >
            When life is unpredictable, don't leave your customers, staff or
            suppliers in the dark - rely on Email alerts or a text message
            notification system to keep everyone informed.
          </p>
          <p >
            No matter the amount of planning that has gone into an event or
            task, change is unavoidable. Wild weather may force an event to be
            rescheduled or cancelled at the last minute. A technical fault may
            affect an essential service. Traffic issues might result in service
            disruptions for local public transport routes. Staff illness may
            require last minute changes to rosters.
          </p>
          <p >
            When plans change, people need to know - and sooner rather than
            later. The perfect way to alert people to circumstantial changes
            instantly is via an SMS Notification System.
          </p>
        </div>

        <div className="text-center " style={{ marginTop: "4rem" }}>
      <h2 className="" style={{ fontWeight: "bold", color: "#FD7F27" }}>
        When to Send Text Message Notifications
      </h2>

      <div className="row mt-4">
        {/* First Column */}
        <div className="col-lg-4 col-md-6 mb-4 p-5">
          <img src={landingPage2} className="w-100 rounded-3" alt="Your Image" />
          <p className="mt-3 text-center ">
            No matter how well organised you are, when managing people, there
            will always be times when rosters need to change. Simplify your
            rostering and people management communication through the
            ClickSend SMS alerts tool.
          </p>
        </div>

        {/* Second Column */}
        <div className="col-lg-4 col-md-6 mb-4 p-5">
          <img src={landingPage3} className="w-100 rounded-3" alt="Your Image" />
          <p className="mt-3 text-center ">
            Automate your IT SMS notifications to send whenever a
            script fails and never miss an important outage (or worse: be
            alerted to it by your customers).
          </p>
        </div>

        {/* Third Column */}
        <div className="col-lg-4 mb-4 p-5">
          <img src={landingPage4} className="w-100 rounded-3" alt="Your Image" />
          <p className="mt-3 text-center ">
            If your clients or suppliers need to be alerted to events that
            occur regularly, our SMS API is a great tool for automating
            triggered SMS notifications.
          </p>
        </div>
      </div>
    </div>
        <div className="text-center " style={{ marginTop: "4rem" }}>
          <h2 className="text-capitalize " style={{ fontWeight: "bold",color:"#FD7F27", }}>
            What we offers for email services
          </h2>
          <div
            className="d-lg-flex align-items-center justify-content-around gap-5"
            style={{ margin: "1rem" }}
          >
            <p style={{textAlign: "start" }}>
              Email API by developers, for Developers Integrate in minutes with
              our email API and trust your emails reach the inbox Send reliably
              at scale with SMTP service—no servers required. Expedite
              troubleshooting with searchable email activity feed and additional
              history. Increase delivery rates with Email Validation API.
              Collaborate across teams and measure success with an intuitive
              user interface. And more!
            </p>
            <img src={landingPage5} className="w-50 rounded-3"></img>
          </div>

          <div
            className="d-lg-flex align-items-center justify-content-around gap-5"
            style={{ margin: "1rem" }}
          >
            <img src={landingPage6} className="w-50 d-lg-block d-none rounded-3 "></img>
            <p style={{textAlign: "start" }}>
              Intuitive email marketing campaigns Build meaningful connections
              with smart email marketing Create emails with HTML code, a
              drag-and-drop editor, or a combination of both. Engage contacts
              with approachable, time-saving automation. Grow your list with
              branded sign-up forms embedded on your website. Send pixel-perfect
              emails with integrated testing. And more!
            </p>
            <img src={landingPage6} className="w-50 d-lg-none rounded-3" alt="Your Image" />

          </div>
        </div>

        <div
          className="d-flex flex-lg-row flex-column  align-items-center justify-content-around gap-5 p-5 "
          style={{
            marginTop: "30px",
            boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div>
            <h3>Let's Get Started</h3>
            <p>
              Try and see for yourself - there are so many ways that text
              message alerts and SMS & Email notifications can make your
              business more efficient.
            </p>
            <Link to="/login" className="btn btn-primary me-2">
              Start Sending
            </Link>
          </div>
          <img src={Feedback} className="w-100" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
