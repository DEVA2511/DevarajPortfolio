import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_j3bm2r4",
      "template_g34md4j",
      form.current,
      "18RRV2W_3NLMyhSjM"
    );
    e.target.reset();
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact Me</span>
      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>
              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">
                Devarajthangarasu2000@gmail.com
              </span>
              <a href="" className="contact_button">
                Write to me
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="uil uil-whatsapp contact_card-icon"></i>
              <h3 className="contact_card-title">WhatsApp</h3>
              <span className="contact_card-data">99-99-12-12-23-11</span>
              <a href="" className="contact_button">
                Write to me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="uil uil-facebook-messenger-alt contact_card-icon"></i>
              <h3 className="contact_card-title">Messanger</h3>
              <span className="contact_card-data">Link</span>
              <a href="Pest the link" className="contact_button">
                Write to me
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input
                tytpe="text"
                name="name"
                className="contact_form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact_form-div">
              <label className="contact_form-tag">Email</label>
              <input
                tytpe="email"
                name="email"
                className="contact_form-input"
                placeholder="Insert your Email"
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">Project</label>
              <textarea
                tytpe="text"
                name="project"
                className="contact_form-input"
                placeholder="Project Detials"
                cols={30}
                rows={10}
              />
            </div>
            <button className="button button--flex">Say Hello</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
