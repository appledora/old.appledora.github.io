import { Link } from "react-router-dom";
import "../styles/Maindoor.scss";

const Maindoor = () => {
  return (
    <div>
      <Link to="/academic">
        <div className="orb"></div>
      </Link>
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
