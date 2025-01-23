import React, { useState } from "react";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade, Zoom } from "react-awesome-reveal";

const Contact = () => {
  const API = "http://localhost:8080/sendemail";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobtypes: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmailInfo = async () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill out all required fields.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.error) {
        toast.error(result.error, { position: toast.POSITION.TOP_RIGHT });
      } else {
        toast.success("Your email has been sent successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setFormData({ name: "", email: "", jobtypes: "", message: "" });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container" id="Contact">
      <Fade triggerOnce>
        <div className="contact-wrapper">
          <div className="contact-image">
            <img
              src="https://images.pexels.com/photos/5198239/pexels-photo-5198239.jpeg"
              alt="Contact"
            />
          </div>
          <div className="contact-form">
            <Zoom>
            <h2>Contact Me</h2>
            
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label>Name</label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label>Email</label>
              </div>
              <div className="form-group">
                <select
                  name="jobtypes"
                  value={formData.jobtypes}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose Job Type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Working Student">Working Student</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label>Your Message</label>
              </div>
              <button
                type="button"
                className="submit-btn"
                onClick={sendEmailInfo}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send"}
                <RiSendPlaneFill size={20} />
              </button>
            </form>
            </Zoom>
          </div>
        </div>
      </Fade>
      <ToastContainer draggable autoClose={5000} />
    </div>
  );
};

export default Contact;
