import "./Education.css";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Education = () => {
  return (
    <>
      <div className="education education-timeline" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase maingame">
          Education
        </h2>
        <hr />
        
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(174, 248, 248)", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(101, 237, 101)" }}
          date="2023 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#e6e5f5" }}
          icon={<IoSchool />}
          >
          <h3 className="vertical-timeline-element-title">Bachelor of Engineering In Computer Engineering</h3>
          <h4 className="vertical-timeline-element-subtitle">GS Moze College Of Engineering</h4>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(174, 248, 248)", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(101, 237, 101)" }}
          date="2021 - 2023"
          iconStyle={{ background: "rgb(43, 222, 99)", color: "#e6e5f5" }}
          icon={<FaSchool />}
          >
          <h3 className="vertical-timeline-element-title">Higher Secondary Education</h3>
          <h4 className="vertical-timeline-element-subtitle">Mhalasakant College,Akurdi</h4>
          
        </VerticalTimelineElement>
      </VerticalTimeline>
          </div>

          
    </>
  );
};
export default Education;

