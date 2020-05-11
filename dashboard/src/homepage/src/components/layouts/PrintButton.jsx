import React, { Component } from "react";

const styles = () => ({
  button: {
    alignItems: "center",
    borderRadius: "20px",
    padding: "10px",
    color: " white",
    border: "none",
    cursor: "pointer",
    fontSize: "21px",
    textAlign: "center",
    lineHeight: "25px",
    padding: "16px 32px",
    margin: " 4px 2px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    transitionDuration: "0.4s",
    display: "inline-block",
  },
});

const PrintButton = (props) => {
  {
    const classes = styles();
    var bgcolor = [props.color];

    function buttonHover(e) {
      e.target.style.color = bgcolor;
      e.target.style.background = "white";
      e.target.style.border = "1px solid " + bgcolor;
    }

    function buttonDefault(e) {
      e.target.style.color = "white";
      e.target.style.background = bgcolor;
    }

    return (
      <>
        <div>
          <button
            // style={classes.button}
            style={Object.assign(classes.button, { background: bgcolor })}
            onMouseOver={buttonHover}
            onMouseOut={buttonDefault}
          >
            {props.label}
          </button>
        </div>
      </>
    );
  }
};

export default PrintButton;
