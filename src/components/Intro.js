import "../styles/Intro.scss";
import Logoitem from "../components/assets/images/triple-moon.svg";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { SiGooglescholar } from "react-icons/si";
import { MdTipsAndUpdates } from "react-icons/md";
import { motion as m } from "framer-motion";
import Updates from "./Update";
import { useState } from "react";
const Intro = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <m.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="container">
        <div id="west" className="column">
          <div className="introBox">
            <img className="triplemoon" src={Logoitem} alt="hecate" />
            <div className="text-zone">
              <h1 className="name">Nazia Tasnim</h1>
              <h3>Graduate Student</h3>
              <h3> Researcher / Reader / Retaliator</h3>
              <p>
                I am an incoming PhD student at <b>Boston University</b>. Prior
                to joining the graduate program, I have worked as a{" "}
                <i>Research Scientist (contr.)</i> at the{" "}
                <b>Wikimedia Foundation</b> - mentored by Dr. Isaac Johnson and
                Dr. Martin Gerlach. Following my graduation, I have also spent
                some time working as a <i>Machine learning Engineer</i> at Giga
                Tech Ltd., as well as a <i>Research Assistant</i> at BRAC
                University.
              </p>

              <p>
                My current research interest include{" "}
                <b>Natural Language Processing</b>, <b>Computer Vision</b>,{" "}
                <b>Information Extraction</b> and <b>AI for good</b>. In recent
                days, I have been heavily active in creating LLM resources for
                my native language Bangla.
              </p>

              <p>
                In my free time I care about <b>plants</b>, <b>pottery</b> and{" "}
                <b>pop-culture</b>.
              </p>
              {/* request CV */}
              <p>
                <a
                  href="mailto: nimzia@bu.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  <b>Get in touch directly for collab!</b>
                </a>
                <br />
              </p>
            </div>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                width: "max-content",
                alignItems: "center",
                paddingLeft: "45%",
                marginTop: "10%",
              }}
            >
              <m.li
                whileHover={{ scale: 1.1 }}
                style={{
                  display: "inline",
                  padding: "2%",
                  cursor: "pointer",
                }}
              >
                <a
                  href="https://www.linkedin.com/in/nazianim-blu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiLinkedinLine
                    color="#7e0fff"
                    size={"3vmin"}
                    title={"Linkedin"}
                  />
                </a>
              </m.li>
              <m.li
                whileHover={{ scale: 1.1 }}
                style={{
                  display: "inline",
                  padding: "2%",
                  cursor: "pointer",
                }}
              >
                <a
                  href="https://github.com/appledora"
                  target="_blank"
                  rel="noreferrer"
                  // title="Github"
                >
                  <RiGithubLine
                    color="#7e0fff"
                    size={"3vmin"}
                    title={"Github"}
                  />
                </a>
              </m.li>
              <m.li
                whileHover={{ scale: 1.1 }}
                style={{
                  display: "inline",
                  padding: "2%",
                  cursor: "pointer",
                }}
              >
                <a
                  href="https://scholar.google.com/citations?user=_9JYPbsAAAAJ&hl=en"
                  rel="noreferrer"
                  target="_blank"
                  title="GoogleScholar"
                >
                  <SiGooglescholar
                    color="#7e0fff"
                    size={"3vmin"}
                    title={"Scholars"}
                  />
                </a>
              </m.li>
            </ul>
            <m.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => toggle()}
              style={{
                float: "right",
                zIndex: "999",
                position: "absolute",
                bottom: "0",
                right: "0",
                margin: "1%",
                cursor: "pointer",
                color: "#ff0fbe",
              }}
            >
              <MdTipsAndUpdates size={"5vmin"} title={"Updates"} />
            </m.div>
            {isOpen && <Updates open={isOpen} close={toggle} />}
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Intro;
