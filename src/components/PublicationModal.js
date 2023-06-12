import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import parse from "html-react-parser";

import paperData from "./assets/contents/Papers.json";
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
  let abstract = packet[0];
  let link = packet[2];
  let title = packet[1];
  let timeperiod = packet[3];
  let publisher = packet[4];
  let authors = packet[5];
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
          <h4>{parse(authors)}</h4>
          {isOpen && (
            <>
              <p>{parse(abstract)}</p>
              <a href={link} target="_blank" rel="noreferrer">
                <button className="btn-read">Paper Link</button>
              </a>
              <footer
                style={{
                  color: "#B09FCA",
                  float: "left",
                  marginLeft: "1vmin",
                  fontSize: "1.7vmin",
                  fontWeight: "400",
                  padding:".4vmin"
                }}
              >
                {publisher}
              </footer>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
const Publication = () => {
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

export default Publication;
