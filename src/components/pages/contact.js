import React, { useState } from "react";

export default function Contact() {

    const [validEmail, handleValidEmail] = useState('')

  return (
    <div className="hero fullscreen">
      <div className="hero-body">
        <div style={{ margin: `auto`, background: `white`, maxWidth: `800px`}}>
          <form className="frame p-0" method="post" action="mailto:daevidvo@gmail.com" encType="text/plain">
            <div className="frame__body p-0">
              <div className="row p-0 level fill-height">
                <div className="col">
                  <div className="space xlarge"></div>
                  <div className="padded">
                    <h1 className="u-text-center u-font-alt">Contact Me</h1>
                    <div className="divider"></div>
                    <p className="u-text-center">
                      Let's get the conversation started! If you're interested in learning more about my skills and experience, please fill out the contact form below. I'd be happy to chat with you about how I can help you achieve your goals.
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
                        className="form-group-input"
                        id="nameInputField"
                        placeholder="Enter your name"
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
                        className={validEmail === null ? 'form-group-input' : 'form-group-input input-error'}
                        id="emailInputField"
                        placeholder="Enter your email"
                        onChange={e => useState(e.target.value)}
                      />
                    </div>

                    <textarea id="messageInputField" placeholder="Enter your message here"></textarea>

                    <div className="space"></div>

                    <div className="btn-group u-pull-right col-12" >
                      <input className="btn-link outline mb-2" type="submit" value="Send"/>
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
