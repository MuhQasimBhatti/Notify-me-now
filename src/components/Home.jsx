import React from "react";
import {
  Feedback,
  landingPage1,
  landingPage2,
  landingPage3,
  landingPage4,
} from "../images";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
    <div className="landingPage p-sm-3 p-md-5">
      <div className="d-lg-flex" style={{ paddingTop: "4rem", gap: "10rem" }}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1 className="fs-sm-3 fs-md-1" >
            Ease Your Conversations with Notify Me Now
          </h1>
          <p className="me-1" style={{ fontSize: "20px" }}>
            Your premier destination for efficient group messaging and email
            services. Streamline your communication with ease by sending
            messages and emails to multiple groups simultaneously. Stay
            connected and informed with our intuitive platform designed to keep
            you in sync with your networks. Simplify your outreach and elevate
            your communication game with NotifyMeNow. Sign up today and start
            broadcasting your messages hassle-free!
          </p>
        </div>
        <div className="text-center">
          <img src={landingPage1} className="image-fluid w-100" />
        </div>
      </div>

      <div className="text-center " style={{ marginTop: "4rem" }}>
        <h2 className="" style={{ fontWeight: "bold" }}>
          Send Timely Alerts and Notifications with the ClickSend SMS Gateway
        </h2>
        <p className="" style={{ fontSize: "20px" }}>
          When life is unpredictable, don't leave your customers, staff or
          suppliers in the dark - rely on SMS alerts or a text message
          notification system to keep everyone informed.
        </p>
        <p style={{ fontSize: "20px" }}>
          No matter the amount of planning that has gone into an event or task,
          change is unavoidable. Wild weather may force an event to be
          rescheduled or cancelled at the last minute. A technical fault may
          affect an essential service. Traffic issues might result in service
          disruptions for local public transport routes. Staff illness may
          require last minute changes to rosters.
        </p>
        <p style={{ fontSize: "20px" }}>
          When plans change, people need to know - and sooner rather than later.
          The perfect way to alert people to circumstantial changes instantly is
          via an SMS Notification System.
        </p>
      </div>

      <div className="text-center " style={{ marginTop: "4rem" }}>
        <h2 className="" style={{ fontWeight: "bold" }}>
          When to Send Text Message Notifications
        </h2>
        <div
          className="d-lg-flex align-items-center justify-content-around gap-5"
          style={{ margin: "40px" }}
        >
          <p style={{ fontSize: "20px", textAlign: "start" }}>
            No matter how well organised you are, when managing people, there
            will always be times when rosters need to change. Simplify your
            rostering and people management communication through the ClickSend
            SMS alerts tool.
            <br /> Changes in rostering and room availabilities? Keep your
            campus or school moving seamlessly with SMS alerts. Find out more
            about how the education industry is using the ClickSend suite of
            communication tools.
          </p>
          <img src={landingPage2} className="w-100"></img>
        </div>

        <div
          className="d-lg-flex align-items-center justify-content-around gap-5"
          style={{ margin: "40px" }}
        >
          <img src={landingPage3} className="w-100"></img>
          <p style={{ fontSize: "20px", textAlign: "start" }}>
            When IT processes fail, systems can descend into chaos very quickly.
            That's why it's important for notifications to reach the right staff
            members immediately.
            <br /> Automate your IT SMS notifications to send whenever a script
            fails and never miss an important outage (or worse: be alerted to it
            by your customers).
          </p>
        </div>

        <div
          className="d-lg-flex align-items-center justify-content-around gap-5"
          style={{ margin: "40px" }}
        >
          <p style={{ fontSize: "20px", textAlign: "start" }}>
            If your clients or suppliers need to be alerted to events that occur
            regularly, our SMS API is a great tool for automating triggered SMS
            notifications.
            <br />
            Banks use SMS to communicate to customers about their low balance,
            fluctuations in interest rates, deposits, withdrawals or even
            fraudulent activity on their account.
          </p>
          <img src={landingPage4} className="w-100"></img>
        </div>
      </div>

      <div className="d-lg-flex  align-items-center justify-content-around gap-5 p-5 " style={{marginTop:'30px', boxShadow:'2px 2px 8px rgba(0, 0, 0, 0.2)'}}>
        <div >
        <h3>Let's Get Started</h3>
        <p>
          Try and see for yourself - there are so many ways that text message
          alerts and SMS & Email notifications can make your business more
          efficient.
        </p>
        <Link to="/login" className="btn btn-primary me-2">
          Start Sending
        </Link>
        </div>
        <img src={Feedback} className="w-100"/>
      </div>
    </div>
    {/* <Footer/> */}
    </div>
  );
};

export default Home;
