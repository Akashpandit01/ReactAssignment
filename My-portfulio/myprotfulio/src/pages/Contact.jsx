// src/pages/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contact container fade-in">
      <div className="section-heading">
        <h2>Contact</h2>
        <p>Feel free to reach out for opportunities, collaborations, or just to say hi.</p>
      </div>

      <div className="row g-4 contact-row">

        {/* LEFT CARD */}
        <div className="col-md-5">
          <div className="contact-card card-2d">
            <h3>Contact Details</h3>

            <p><strong>Email:</strong> akashpandit3052@gmail.com</p>
            <p><strong>Phone:</strong> +91-8550959295</p>
            <p><strong>Location:</strong> Pune, Maharashtra, India</p>

            <div className="contact-socials">
              <a href="https://linkedin.com" target="_blank">LinkedIn</a>
              <a href="https://github.com" target="_blank">GitHub</a>
            </div>
          </div>
        </div>

        {/* RIGHT CARD — BEAUTIFUL QUICK MESSAGE */}
        <div className="col-md-7">
          <div className="contact-card message-card shadow-lg">
            <h3 className="contact-title">Quick Message</h3>

            <form ref={formRef} onSubmit={handleSubmit}>

              <div className="floating-group">
                <input type="text" name="user_name" required />
                <label>Name</label>
              </div>

              <div className="floating-group">
                <input type="email" name="user_email" required />
                <label>Email</label>
              </div>

              <div className="floating-group">
                <textarea rows="4" name="message" required></textarea>
                <label>Message</label>
              </div>

              <button type="submit" className="btn btn-primary send-btn">
                Send Message
              </button>
            </form>

            {status && <p className="status-text mt-3">{status}</p>}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
