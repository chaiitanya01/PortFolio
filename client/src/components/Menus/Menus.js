import "./Menus.css";
import profilePic from "../../assets/ck.jpeg";
import { Link } from "react-scroll";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { IoBookOutline } from "react-icons/io5";
import { SiAudiotechnica } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { FcClock } from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          
            <div className="navbar-profile-pic">
              <img
                src={profilePic}
                alt="profile pic"
              />
            </div>
        
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <IoHome size={20} color="white"/>
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout size={20} color="white" />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <IoBookOutline size={20} color="white" />
                    Education
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <SiAudiotechnica size={20} color="white" />
                    Tech Stack
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <GrProjects size={20} color="white" />
                    Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcClock size={20} color="white" />
                    Work Experince
                  </Link>
                </div>
              </div>
            </div>
          
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <IoHome size={20} color="white"/>
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout size={20} color="white" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <IoBookOutline size={20} color="white" />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <SiAudiotechnica size={20} color="white" />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GrProjects size={20} color="white" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcClock size={20} color="white" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
