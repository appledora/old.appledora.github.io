// create a new modal to display details
import "../styles/ModalComponent.scss";
import Education from "./EducationModal";
import Experience from "./ExperienceModal";
import Publication from "./PublicationModal";
import Project from "./ProjectModal";
import Prize from "./PrizeModal";
const item_dict = {
  1: [<Education />, "EDUCATION"],
  2: [<Experience />, "EXPERIENCE"],
  3: [<Publication />, "PUBLICATION"],
  4: [<Project />, "SELECTED PROJECTS"],
  5: [<Prize />, "ACHIEVEMENTS"],
};

const ModalComponent = ({ open, close, btnType }) => {
  return (
    <>
      {open ? (
        <div>
          <div className="modalContainer" onClick={() => close()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal_header">
                <div className="title"> {item_dict[btnType][1]}</div>

                <button className="close" onClick={() => close()}>
                  <i class="fa fa-close"></i>{" "}
                </button>
              </div>
              <div className="modal_content">{item_dict[btnType][0]}</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalComponent;
