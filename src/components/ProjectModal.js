import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import parse from "html-react-parser";

import paperData from "./assets/contents/Projects.json";
import "../styles/ListModal.scss";
const getData = () => {
  const loadedData = JSON.stringify(paperData);
  const json = JSON.parse(loadedData);
  const papers = Object.values(json).map((abstract) => {
    return { abstract };
  });
  return papers;
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
  return (
    <div
      className="timeline"
      onMouseEnter={() => toggle()}
      onMouseLeave={() => toggle()}
    >
      <div className="timeline-event">
        <label className="timeline-event-icon"
        ></label>

        <div class="timeline-event-copy">
          <h3>
            {title}{" "}
          </h3>

          {isOpen && (
            <>
              <p>{parse(abstract)}</p>
              <a href={link} target="_blank" rel="noreferrer">
              <button className="btn-read"
              >Source Code</button>
            </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
const Project = () => {
  const [page, setPage] = useState(0);
  let papers = getData();
  const papersPerPage = 5;
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
    <div>
      <div> {displayPapers}</div>

      {pagecount > papersPerPage && (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
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
  );
};

export default Project;
