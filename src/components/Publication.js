import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import parse from "html-react-parser";
import paperData from "./assets/contents/Papers.json";
import { motion as m } from "framer-motion";
import "../styles/ListModal.scss";
const getData = () => {
  const loadedData = JSON.stringify(paperData);
  const json = JSON.parse(loadedData);
  const papers = Object.values(json).map((abstract) => {
    return { abstract };
  });
  return papers;
};

const expandVariants = {
  expanded: {
    height: "max-content",
    paddingTop: ".7vmin",
    boxShadow: "0 0 1vmin black",
    marginTop: "1.2vmin",
    marginBottom: ".5vmin",
    borderRadius: "2vmin",
    backgroundColor: "#22212186",
    transition: {
      duration: 0.5,
      ease: [0.04, 0.62, 0.23, 0.98],
    },
  },
  collapsed: {
    height: "10vh",
    padding: ".5%",
    boxShadow: "none",
    marginTop: ".5%",
    borderRadius: "0",
    transition: {
      duration: 1,
      ease: [0.04, 0.62, 0.23, 0.98],
    },
  },
};
const ListCardAlt = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const content = props.content;
  let packet = Object.values(content.abstract);
  let abstract = packet[0];
  let link = packet[2];
  let title = packet[1];
  let timeperiod = packet[3];
  let publisher = packet[4];
  let authors = packet[5];
  const plot = String(packet[6]);
  return (
    <m.div
      className="item-container"
      animate={isOpen ? "expanded" : "collapsed"}
      variants={expandVariants}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => toggle()}
      onMouseLeave={() => toggle()}
    >
      <div>
        {/* <label class="item-icon"></label> */}
        <div class="item-expand">
          <span
            style={{
              float: "left",
              width: "max-content",
              padding: "0.6vmin",
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
          <h3
            style={{
              marginTop: "0.5%",
              paddingTop: "0.5%",
            }}
          >
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              {title}{" "}
            </a>
          </h3>
          <h4>{parse(authors)}</h4>
          {isOpen && (
            <>
              <p>
                <img
                  src={require("" + plot)}
                  alt="plot"
                  style={{ float: "right", padding: "0.5vmin"}}
                  width={"8%"}
                  
                />
                {parse(abstract)}

                <br />
                <footer className="item-publisher">{publisher}</footer>
              </p>
            </>
          )}
        </div>
      </div>
    </m.div>
  );
};
const Publication = () => {
  const [page, setPage] = useState(0);
  let papers = getData();
  papers = papers.reverse();

  // dynamically calculate the number of papers per page given the window height
  const windowHeight = document.body.clientHeight;
  const papersPerPage = Math.floor(windowHeight / 150);
  const numberOfPapersVistited = page * papersPerPage;
  const totalPages = Math.ceil(papers.length / papersPerPage);
  const pagecount = papers.length;
  const changePage = ({ selected }) => {
    setPage(selected);
  };
  const displayPapers = papers
    .slice(numberOfPapersVistited, numberOfPapersVistited + papersPerPage)
    .map((paper, index) => {
      return <ListCardAlt index={index} content={paper} />;
    });

  return (
    <m.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        overflowY: "hidden",
        overflowX: "hidden",
        height: "100vh",
        background: "#f1ffc0",
      }}
    >
      {/* <div className="title">Publications</div> */}
      <div className="list-container">
        {displayPapers}
        {pagecount > papersPerPage && (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={totalPages}
            onPageChange={changePage}
            containerClassName={"navigationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"navigationDisabled"}
            activeClassName={"navigationActive"}
          />
        )}
      </div>
    </m.div>
  );
};

export default Publication;
