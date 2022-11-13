import "../styles/Academic.scss";
import { useState } from "react";
import Logoitem from "../components/assets/images/triple-moon.svg";
import pdf from "../components/assets/contents/NAZIA_ML_Resume.pdf";
import cat from "../components/assets/images/cat.webp";
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
              I love writing codes. In a more granular sense, my primary
              professional interests include research in NLP, Computer Vision,
              and explainable AI. In line with this, I am regular in research
              development projects and enjoy competing in hackathons.
              Collaborative work is a comfort zone for me and I have extensive
              involvement in cross-domain and cross-country large-scale research
              collaborations. I also have tutoring/mentoring experience, and
              currently support junior research aspirants in their explorations.
              On the offside, I am a FOSS enthusiast and make frequent
              open-source contributions.
            </p>
            <div
              style={{
                float: "left",
                margin: "0px",
                position: "relative",
              }}
            >
              <p>
                Right now I am based in Bangladesh, working remotely as a
                Research Data Scientist for the WikiMedia Foundation. Feel free
                to reach out to me through:
              </p>
              <ul
                style={{
                  position: "relative",
                  marginBottom: "2vw",
                  padding: "0px",
                }}
              >
                <li
                  style={{ display: "inline", margin: "1%", cursor: "pointer" }}
                >
                  <a
                    href="https://www.linkedin.com/in/nazianim-blu/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiLinkedinLine color="#0ff" size={"3vmin"} />
                  </a>
                </li>
                <li
                  style={{ display: "inline", margin: "1%", cursor: "pointer" }}
                >
                  <a
                    href="https://github.com/appledora"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiGithubLine color="#0ff" size={"3vmin"} />
                  </a>
                </li>
                <li
                  style={{ display: "inline", margin: "1%", cursor: "pointer" }}
                >
                  <a
                    href="https://appledora.hashnode.dev/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SiDevdotto color="#0ff" size={"3vmin"} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              float: "right",
              marginTop: "1vmin",
              marginBottom: "1vmin",
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
      <div id="east">
        <div className="column eastbuttons">
          <img className="triplemoon-white" src={Logoitem} alt="hecate" />

          <button
            className="edu-link"
            onClick={() => {
              toggleModal(1);
              setBtn(1);
            }}
          >
            <GiOwl style={{ position: "relative" }} size={"5vmin"} />
          </button>
          <button
            className="exp-link"
            onClick={() => {
              toggleModal(2);
              setBtn(2);
            }}
          >
            {" "}
            <GiAncientColumns
              style={{ position: "relative" }}
              size={"5vmin"}
            />{" "}
          </button>
          <button
            className="pub-link"
            onClick={() => {
              toggleModal(3);
              setBtn(3);
            }}
          >
            {" "}
            <RiQuillPenFill style={{ position: "relative" }} size={"5vmin"} />
          </button>
          <button
            className="project-link"
            onClick={() => {
              toggleModal(4);
              setBtn(4);
            }}
          >
            {" "}
            <GiAtom style={{ position: "relative" }} size={"5vmin"} />
          </button>
          <button
            className="prize-link"
            onClick={() => {
              toggleModal(5);
              setBtn(5);
            }}
          >
            {" "}
            <GiLaurelsTrophy style={{ position: "relative" }} size={"5vmin"} />
          </button>
        </div>
        <img src={cat} alt="gif" className="tuna" />
      </div>
      {isOpen && (
        <ModalComponent open={isOpen} close={toggleModal} btnType={btn} />
      )}
    </div>
  );
};

export default Academic;
