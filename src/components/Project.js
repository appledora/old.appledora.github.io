import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import parse from "html-react-parser";
import paperData from "./assets/contents/Projects.json";
import { motion as m } from "framer-motion";
import "../styles/ListModal.scss";
import { SiGit } from "react-icons/si";
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
  let link = packet[3];
  let title = packet[0];
  let tools = String(packet[2]).split(",");
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
          {/* <span class="item-date">{tools}</span> */}
          {tools.map((tool) => {
            // RETURN EACH SPAN SIDE BY SIDE
            return (
              <span
                style={{
                  // float: "right",
                  width: "5%",
                  padding: "0.3vmin",
                  marginLeft: "1.5vmin",
                  marginRight: "0.5vmin",
                  textAlign: "center",
                  fontSize: "1.5vmin",
                  color: "blue",
                  backgroundColor: "white",
                }}
              >
                {tool}
              </span>
            );
          })}
          <h3
            style={{
              marginTop: "0.5%",
              paddingTop: "0.5%",
            }}
          >
            {title}{" "}
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              style={{
                float: "right",
                width: "10%",
              }}
            >
              <SiGit color="#d69dfe" size={"5vmin"} title={"Github"}/>
            </a>
          </h3>

          {isOpen && (
            <>
              <p>
                {parse(abstract)}
              </p>
            </>
          )}
        </div>
      </div>
    </m.div>
  );
};
const Project = () => {
  const [page, setPage] = useState(0);
  let papers = getData();
  papers = papers.reverse();

  // dynamically calculate the number of papers per page given the window height
  const windowHeight = document.body.clientHeight;
  const papersPerPage = Math.floor(windowHeight / 130);
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
        background: "#ffcde2",
        // backgroundImage: "url('https://i.gifer.com/XOsX.gif')",
        // backgroundSize: "20px",
        // backgroundRepeat: "repeat",
        // overflow: "hidden",
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

export default Project;
