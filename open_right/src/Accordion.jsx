import React, { useState } from "react";
import "./accordion.css";
const Accordion = ({id}) => {
  const [state, setState] = useState(false);

  const icon = () => {
    setState(!state);
  };
  return (
    <>
      <div className="container">
        <div className="heading" onClick={icon}>
          <div>
            <h1 >Whats is HTML ?</h1>
          </div>
          <div>
            <span>{state ?"►":"◄"}</span>
          </div>
        </div>
        {state
              ? <div className="content"><p> HyperText Markup Language (HTML) is the set of markup symbols or codes inserted into a file intended for display on the Internet. The markup tells web browsers how to display a web page's words and images."
              </p></div>: ""}
      </div>
    </>
  );
};
export default Accordion;
