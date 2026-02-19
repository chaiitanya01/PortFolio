import "./home.css";
import Typewriter from "typewriter-effect";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn"></div>

        <div className="container home-content">
          <div className="row">
            <div className="col-md-6">
              <h2>Hi,I am a </h2>
              <h1>
                <Typewriter
                  options={{
                    strings: ["Curious Engineer !"],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deletespeed: 40,
                    pauseFor: 1500,
                  }}
                />
              </h1>
              <div className="home-buttons">
                <a
                  className="btn btn-cv"
                  href="/Chaitanya_Resume.pdf"
                  download="Chaitanya_Resume.pdf"
                >
                  My Resume
                </a>
                <a
                  className="btn btn-cv btn-leetcode"
                  href="https://leetcode.com/u/Chaiitanya1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LeetCode
                </a>
              </div>
            </div>

            <div className="col-md-6 contact-box">
              <h3>Contact Me</h3>
              <p>
                <FaEnvelope size={30} />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=chaiitanya01@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  chaiitanya01@gmail.com
                </a>
              </p>

              <p>
                <FaPhoneAlt size={30} />{" "}
                <a href="tel:+917588468033" className="contact-link">
                  +91 7588468033
                </a>
              </p>

              <p>
                <FaLinkedin size={40} />{" "}
                <a
                  href="https://www.linkedin.com/in/chaitanya01"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  Linkedin
                </a>
              </p>

              <p>
                <FaGithub size={40} />{" "}
                <a
                  href="https://github.com/chaiitanya01"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
