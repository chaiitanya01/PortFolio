import './WorkExp.css'
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaDroplet } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";


const workexp = () => {
  return (
    <>
   <div className="work" id="experience">
    <div className="container work-exp">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Work Experience</h2>
      <hr />
      <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "rgb(184, 113, 247)", color: "#ffffff" }}
                contentArrowStyle={{ borderRight: "7px solid  rgb(101, 237, 101)" }}
                date="Latest Project"
                iconStyle={{ background: "rgb(33, 148, 7)", color: "#eff7ef" }}
                icon={<FaUserDoctor />}
                >
                <h3 className="vertical-timeline-element-title">Built a Doctor Appointment System</h3>
                <h4 className="vertical-timeline-element-subtitle whythis">Using The MERN Stack</h4>
                
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "rgb(249, 249, 81)", color: "#ffffff" }}
                contentArrowStyle={{ borderRight: "7px solid  rgb(101, 237, 101)" }}
                date="2nd Project"
                iconStyle={{ background: "rgb(247, 249, 250)", color: "#e8210f" }}
                icon={<FaDroplet />}
                >
                <h3 className="vertical-timeline-element-title">Built a Blood Bank WebApp</h3>
                <h4 className="vertical-timeline-element-subtitle sublord">Using The MERN Stack</h4>
                
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "rgb(126, 250, 246)", color: "#ffffff" }}
                contentArrowStyle={{ borderRight: "7px solid  rgb(101, 237, 101)" }}
                date="Starting of Development Journey"
                iconStyle={{ background: "rgb(195, 241, 69)", color: "#3e0850" }}
                icon={<FaHashtag />}
                >
                <h3 className="vertical-timeline-element-title">Learnt the Basics of Development</h3>
                <h4 className="vertical-timeline-element-subtitle rider">HTML,CSS,JS and MERN STACK</h4>
                
              </VerticalTimelineElement>
            </VerticalTimeline>
    </div>
   </div>
    </>
  )
}

export default workexp
