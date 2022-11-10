import "../styles/Maindoor.scss";

const Maindoor = () => {
  return (
    <div>
      <a href="/academic">
        <div className="orb"></div>
      </a>
      <div className="quoteblock">
        <div className="mainquote">
          {" "}
          "Somewhere, something incredible is waiting to be known..."
        </div>
        <div className="quoteauthor">Carl Sagan</div>
      </div>
    </div>
  );
};

export default Maindoor;
