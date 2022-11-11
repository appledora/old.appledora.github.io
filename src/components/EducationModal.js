import React from "react";
import parse from "html-react-parser";
import trend from "./assets/images/trend.jpeg";
const Education = () => {
  let headerText = "";
  return (
    <div>
      <div class="timeline-event-copy">
        <p>
          I have officially completed my graduated with a <i>B.Tech degree </i>{" "}
          from{" "}
          <strong>Shahjalal University of Science and Technology (SUST)</strong>{" "}
          in <i>September, 2021.</i> My earlier journey in the university was
          not very smooth - I was very mentally distraught and{" "}
          <b>couldn't focus for around TWO YEARS</b>. For the first 4 semesters,
          my CGPA kept fluctuating around a bare minimum 3.4. However, when
          dangerous accident rendered me <b>bed-ridden for over 6 months</b> I
          managed to rekindle my enthusiasm for studying. I participated in all
          sorts of activities as soon as I managed to join my class, all the
          while getting high scores in all the tests and labs. The radical
          change in my love for hardwork and knowledge is{" "}
          <b>
            visible in my achievements and GPA progression (see the graph
            below!! ) from 2019 onwards
          </b>
          <br />
          <img src={trend} alt="trend" 
          style={{
            width: "75%",
            height: "auto",
            marginLeft: "10%",
            marginTop: "5%",
            marginBottom: "5%",
          }}
          />.
          <br/>At the end of the
          8th semester, I had successfully graduated completing{" "}
          <b>163.5 credits</b> with a CGPA I couldn't even dream of achieving in
          the 1st semester.
        </p>
        <br />
        <h4>
          Major <p> Computer Science and Engineering</p>
        </h4>
        <br />
        <h4>
          CGPA{" "}
          <p>
            {" "}
            3.70/4.00 (<b>Top 10th percentile</b>)
          </p>
        </h4>
        <br />
        <h4>
          Selected Courseworks{" "}
          <p>
            {" "}
            Structured Programming Language, Discreet Mathematics, Data
            Structures and Algorithms, Object Oriented Programming, Complex
            Variable, Laplace Transform and Fourier Series, Numerical Analysis,
            Linear Algebra, Statistics and Probabilities, DBMS, Artificail
            Intellingence, Data Science and Machine Learning{" "}
          </p>
        </h4>
        <br />
        <h4>
          Undergraduate Thesis{" "}
          <p>
            {" "}
            Across two semesters, my team and I completed <b>double-thesis </b>
            from different domains, under the supervision of{" "}
            <b>
              Dr. Ruhul Amin, Assistant Professor, Department of Computer and
              Information Science at Fordham University, New York
            </b>
            . The first project was on the topic of building a{" "}
            <i>
              proof-of-concept dengue surveillance system for the
              under-resourced countries
            </i>
            (published in two conference workshops). The second thesis was in
            the Bioinformatics field. This is an on-going work where we try to
            <i>
              interpret the usability of transformer based models in
              identification of IGHV β - cells
            </i>
            . The task focuses on using pre-trained deep learning models (BERT,
            DistilBERT) to find linguistic patterns in RNA sequences and
            validating their biological significance through language modeling.{" "}
          </p>
        </h4>
      </div>
    </div>
  );
};

export default Education;
