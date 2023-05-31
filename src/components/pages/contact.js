import React, { useState } from "react";

export default function Contact() {
  const [validEmail, handleValidEmail] = useState("test@test.com");
  const [validName, handleValidName] = useState("name");
  const [validEmailText, handleValidEmailText] = useState("testing");

  function emailValidator(email) {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) || !email) {
      handleValidEmail(email);
    }
  }

  function nameValidator(name) {
    if (/[\w+]/i.test(name) || !name) {
      handleValidName(name);
    }
  }

  function emailTextValidator(emailText) {
    if (/[\w+]/i.test(emailText) || !emailText) {
      handleValidEmailText(emailText);
    }
  }

  return (
    <div className="hero fullscreen">
      <div className="hero-body">
        <div style={{ margin: `auto`, background: `white`, maxWidth: `800px` }}>
          <form
            className="frame p-0"
            method="post"
            action="mailto:daevidvo@gmail.com"
            encType="text/plain"
          >
            <div className="frame__body p-0">
              <div className="row p-0 level fill-height">
                <div className="col">
                  <div className="space xlarge"></div>
                  <div className="padded">
                    <h1 className="u-text-center u-font-alt">Contact Me</h1>
                    <div className="divider"></div>
                    <p className="u-text-center">
                      Let's get the conversation started! If you're interested
                      in learning more about my skills and experience, please
                      fill out the contact form below. I'd be happy to chat with
                      you about how I can help you achieve your goals.
                    </p>
                    <div className="divider"></div>

                    <div className="form-group">
                      <label className="form-group-label">
                        <span className="icon">
                          <i className="fa-wrapper fa fa-user"></i>
                        </span>
                      </label>
                      <input
                        type="text"
                        className={
                          validName
                            ? "form-group-input"
                            : "form-group-input input-error"
                        }
                        placeholder="Enter your name"
                        onBlur={(event) => nameValidator(event.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-group-label">
                        <span className="icon">
                          <i className="fa-wrapper fa fa-envelope"></i>
                        </span>
                      </label>
                      <input
                        type="email"
                        className={
                          validEmail
                            ? "form-group-input"
                            : "form-group-input input-error"
                        }
                        placeholder="Enter your email"
                        onBlur={(event) => emailValidator(event.target.value)}
                      />
                    </div>

                    <textarea
                      className={
                        validEmailText ? "" : "bg-red-100 border-red-500"
                      }
                      placeholder="Enter your message here"
                      onBlur={(event) => emailTextValidator(event.target.value)}
                    ></textarea>

                    <div className="space"></div>

                    <div className="btn-group u-pull-right col-12">
                      <input
                        className="btn-link outline mb-2"
                        type="submit"
                        value="Send"
                      />
                    </div>
                  </div>
                  <div className="space xlarge"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
