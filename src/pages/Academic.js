import "../styles/Academic.scss";
import { useState } from "react";
import Logoitem from "../components/assets/images/triple-moon.svg";
import pdf from "../components/assets/contents/CV_v0.1.pdf";
import {
  GiAtom,
  GiLaurelsTrophy,
  GiOwl,
  GiAncientColumns,
} from "react-icons/gi";
import { RiQuillPenFill } from "react-icons/ri";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { SiDevdotto } from "react-icons/si";
import ModalComponent from "../components/ModalComponent";

const Academic = () => {
  const uploadedFileLink = "../components/assets/contents/CV_v0.1.pdf";

  const [isOpen, setIsOpen] = useState(false);
  const [btn, setBtn] = useState(0);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div class="container">
      <div id="west" class="column">
        <div className="introBox">
          <img className="triplemoon" src={Logoitem} alt="hecate" />
          <div className="text-zone">
            <h1 className="name">Nazia Tasnim</h1>
            <h3>Machine Learning Engineer</h3>
            <p> Researcher / Reader / Retaliator</p>
            <p>
              I love writing codes. But to be specific, my primary professional
              interests include research in NLP, Computer Vision,
              Bioinformatics, and explainable AI. I am regular in research
              development projects and enjoy competing in hackathons.
              Collaborative work is a comfort zone for me and I have extensive
              involvement in cross-domain and cross-country large-scale
              collaborations. I also have tutoring/mentoring experience, and
              currently support junior research enthusiasts in their
              explorations. On the offside, I am a FOSS enthusiast and make
              frequent open-source contributions.
            </p>
            <div
              style={{
                float: "left",
                margin: "0px",
                position: "relative",
              }}
            >
              <p>Feel free to reach out to me through:</p>
              <ul
                style={{
                  position: "relative",
                  marginBottom: "2vw",
                  padding: "0px",
                }}
              >
                <li style={{ display: "inline", margin: "1%" }}>
                  <a
                    href="https://www.linkedin.com/in/nazianim-blu/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiLinkedinLine color="#0ff" size={"2vw"} />
                  </a>
                </li>
                <li style={{ display: "inline", margin: "1%" }}>
                  <a
                    href="https://github.com/appledora"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiGithubLine color="#0ff" size={"2vw"} />
                  </a>
                </li>
                <li style={{ display: "inline", margin: "1%" }}>
                  <a
                    href="https://appledora.hashnode.dev/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SiDevdotto color="#0ff" size={"2vw"} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              float: "right",
              marginTop: "3vw",
              marginBottom: "1vw",
              position: "relative",
            }}
          >
            <a
              href={pdf}
              target="_blank"
              download="Nazia_Tasnim_CV.pdf"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn-resume">
                {" "}
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <div id="east" class="column eastbuttons ">
        <img className="triplemoon-white" src={Logoitem} alt="hecate" />
        <button
          className="edu-link"
          onClick={() => {
            toggleModal(1);
            setBtn(1);
          }}
        >
          <GiOwl style={{ position: "relative" }} size={50} />
        </button>
        <button
          className="exp-link"
          onClick={() => {
            toggleModal(2);
            setBtn(2);
          }}
        >
          {" "}
          <GiAncientColumns style={{ position: "relative" }} size={50} />{" "}
        </button>
        <button
          className="pub-link"
          onClick={() => {
            toggleModal(3);
            setBtn(3);
          }}
        >
          {" "}
          <RiQuillPenFill style={{ position: "relative" }} size={50} />
        </button>
        <button
          className="project-link"
          onClick={() => {
            toggleModal(4);
            setBtn(4);
          }}
        >
          {" "}
          <GiAtom style={{ position: "relative" }} size={50} />
        </button>
        <button
          className="prize-link"
          onClick={() => {
            toggleModal(5);
            setBtn(5);
          }}
        >
          {" "}
          <GiLaurelsTrophy style={{ position: "relative" }} size={50} />
        </button>
      </div>
      {isOpen && (
        <ModalComponent open={isOpen} close={toggleModal} btnType={btn} />
      )}
    </div>
  );
};

export default Academic;
