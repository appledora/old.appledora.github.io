import React, { useState } from "react";
import parse from "html-react-parser";

import ReactPaginate from "react-paginate";
import paperData from "./assets/contents/Experience.json";
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
  const content = props.content;
  let packet = Object.values(content.abstract);
  let paragraph = packet[0];
  let timeperiod = packet[3];
  let title = packet[1];
  let company = packet[2];
  let skills = packet[4];
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
      setIsOpen(!isOpen);
  };
    // change background color
  return (
    <div
      className="timeline"
      onMouseEnter={() => toggle()}
      onMouseLeave={() => toggle()}
    >
      <div className="timeline-event">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-copy">
          <span class="timeline-event-thumbnail">{timeperiod}</span>
          <h3>{title}</h3>
          <h4>{company}</h4>
          {isOpen && (
            <>
              <p>{parse(paragraph)}</p>
              <p>
                <b>Skills:</b> {skills}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const [page, setPage] = useState(0);
  let papers = getData();
  const papersPerPage = 5;
  const numberOfPapersVistited = page * papersPerPage;
  console.log(numberOfPapersVistited);
  const totalPages = Math.ceil(papers.length / papersPerPage);

  const changePage = ({ selected }) => {
    setPage(selected);
  };
  const displayPapers = papers
    .slice(numberOfPapersVistited, numberOfPapersVistited + papersPerPage)
    .map((paper) => {
      return <ListCardAlt content={paper} />;
    });

  return (
    <div>
      {displayPapers}
      {totalPages > papersPerPage && (
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

export default Experience;
