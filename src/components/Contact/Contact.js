import React, { useState } from "react";

function Contact() {
  let [user, setUser] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [msg, setMsg] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact">
      <div className="overlay">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <h1>Contact Us</h1>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <input
                type="number"
                className="form-control"
                placeholder="PhoneNumber"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Type Of Quesion"
              />
            </div>
            <textarea
              placeholder="message"
              className="form-control"
              id="msg"
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <input
              value="Submit"
              type="submit"
              id="submit"
              className="form-control"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
