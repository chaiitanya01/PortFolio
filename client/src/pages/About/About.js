import "./About.css";
import ProfilePic from "../../assets/ck.jpeg";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12  about-img">
            <img src={ProfilePic} alt="profile-pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              Hi, I’m Chaitanya Kulkarni, A Passionate Developer From G. S. Moze College Of Engineering, Balewadi. I Enjoy Building Real-World Projects, Understanding How Systems Work, And Improving Them With Better UI, Features, And Modern Tech Like AI. I Believe In Learning By Doing And Growing One Project At A Time. 🚀 Curious Mind. Strong Fundamentals. Always Improving.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;