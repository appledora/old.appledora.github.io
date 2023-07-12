import { motion as m } from "framer-motion";
import "../styles/Update.scss"; 
import paperData from "./assets/contents/Update.json";
import parse from "html-react-parser";

import { AiFillCloseCircle } from "react-icons/ai";
const getData = () => {
  const loadedData = JSON.stringify(paperData);
  const json = JSON.parse(loadedData);
  const papers = Object.values(json).map((abstract) => {
    return { abstract };
  });
  return papers;
};
const ListItems = (props) => {
  const content = props.content;
  let packet = Object.values(content.abstract);
  let timeperiod = packet[1];
  let title = parse(packet[0]);

  return (
    <div className="item-container"
    style={{
        height: "max-content",
        margin: "2vmin",
        padding: "2vmin",
        width: "100%",
    }}
    >
      <span
        style={{
          float: "left",
          width: "max-content",
          padding: "1.2vmin",
          marginLeft: "1.5vmin",
          marginRight: "1.5vmin",
          textAlign: "center",
          fontSize: "1.5vmin",
          color: "blue",
          backgroundColor: "white",
        }}
      >
        {timeperiod}
      </span>
      <p>{title}</p>
    </div>
  );
};

const Updates = ({ open, close }) => {
  let updates = getData();
  updates = updates.reverse();
  const displayUpdates = updates.map((update) => {
    return <ListItems content={update} />;
  });
  return (
    <>
      {open ? (
        <m.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="modalContainer" onClick={() => close()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal_header">
                <m.div
                  whileHover={{ scale: 1.2 }}
                  onClick={() => close()}
                  style={{
                    float: "right",
                  }}
                >
                  <AiFillCloseCircle size={"4vmin"} />
                </m.div>
                <div className="title">Updates</div>
              </div>
              <div>{displayUpdates}</div>
            </div>
          </div>
        </m.div>
      ) : null}
    </>
  );
};

export default Updates;
