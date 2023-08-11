import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import parse from "html-react-parser";
import paperData from "./assets/contents/Prizes.json";
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
    padding: "1vmin",
    boxShadow: "0 0 1vmin black",
    marginTop: "1.2vmin",
    marginBottom: "1.2vmin",
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
    backgroundColor: "transparent",
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
    // change background color
  };
  const content = props.content;
  let packet = Object.values(content.abstract);
  let abstract = packet[1];
  let title = packet[0];
  let timeperiod = packet[2];
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
          <h3
            style={{
              marginTop: "0.5%",
              paddingTop: "0.0%",
            }}
          >
            {title}{" "}
          </h3>

          {isOpen && (
            <>
              <p>{parse(abstract)}</p>
            </>
          )}
        </div>
      </div>
    </m.div>
  );
};
const Prizes = () => {
  const [page, setPage] = useState(0);
  let papers = getData();
  // reverse the order of the papers
  papers = papers.reverse();
  // dynamically calculate the number of papers per page given the window height
  const windowHeight = document.body.clientHeight;
  const papersPerPage = Math.floor(windowHeight / 140);
  console.log(windowHeight);
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
        background: "#cdd8ff",
      }}
    >
      {/* <div className="title">Projects</div> */}
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

export default Prizes;
