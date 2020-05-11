import React, { Component } from "react";

import { shareIcon, likeIcon, tagIcon, commentIcon } from "../../assets/index";
const styles = () => ({
  root: {
    // position: "absolute",
    // left: "-35px",
    // bottom: "21px",
    height: "68px",
    display: "flex",
    background: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    borderRadius: "0px 0px 25px 25px",
    color: "white",
    maxWidth: "378px",
  },
  buttonGroup: {
    float: "right",
    position: "relative",
    right: "15px",
  },
  button: {
    color: "black",
    backgroundColor: "transparent",
    border: "0px",
  },
  span: {
    position: "relative",
    top: "17px",
    left: "-44px",
    fontSize: "0.75rem",
    lineHeight: "1",
    whiteSpace: "nowrap",
  },
});

const BoostTile = () => {
  const classes = styles();

  return (
    <>
      <div style={classes.root}>
        <div style={{ padding: "20px" }}>
          <span>Image</span>
          <span style={classes.span}>by*graphic designer*</span>
        </div>
        <div style={classes.buttonGroup}>
          <ul>
            <li>
              <button style={classes.button}>
                <span>
                  <img src={shareIcon} alt="share" />
                </span>
              </button>
            </li>
            <li>
              <button style={classes.button}>
                <span>
                  <img src={likeIcon} alt="share" />
                </span>
              </button>
            </li>
            <li>
              <button style={classes.button}>
                <span>
                  <img src={tagIcon} alt="share" />
                </span>
              </button>
            </li>
            <li>
              <button style={classes.button}>
                <span>
                  <img src={commentIcon} alt="share" />
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BoostTile;
