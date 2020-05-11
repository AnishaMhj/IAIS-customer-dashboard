import React, { Component } from "react";
import { Container } from "@material-ui/core";
import { img, img2, img3, img4, img5 } from "../../assets/index";
import BoostTile from "./BoostTile";

const styles = () => ({
  root: {
    overflow: " hidden",
  },

  row: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "-15px",
    marginLeft: "-35px",
    // -webkit-box-orient: vertical!important;
    // -webkit-box-direction: normal!important;
  },
  vertical: {
    flexDirection: "column",
  },
  col: {
    flexBasis: "0",
    // -webkit-box-flex: "1",
    flexGrow: "1",
    maxWidth: "100%",
    paddingTop: ".75rem",
    paddingBottom: ".75rem",
    // backgroundColor: "rgba(86,61,124,.15)",
    // border: "1px solid rgba(86,61,124,.2)",
  },

  near: {
    position: "relative",
    left: "60px",
  },
});

const BoostGrid = () => {
  const classes = styles();
  return (
    <>
      <Container className={classes.root}>
        <div style={classes.row}>
          <div style={(classes.col, { maxWidth: "33%", position: "relative" })}>
            <div style={classes.row}>
              <div style={classes.col}>
                <img src={img} alt="img" style={{ borderRadius: "25px" }} />
                <div
                  style={{
                    position: "absolute",
                    left: "-35px",
                    bottom: "158px",
                  }}
                >
                  <BoostTile />
                </div>
              </div>
            </div>
          </div>
          <div style={classes.col}>
            <div style={classes.row}>
              <div style={(classes.col, classes.near)}>
                <img src={img2} alt="img" style={{ borderRadius: "25px" }} />
                <div
                  style={{ position: "absolute", left: "2px", bottom: "78px" }}
                >
                  <BoostTile />
                </div>
              </div>
              <div style={(classes.col, classes.near)}>
                <img src={img3} alt="img" style={{ borderRadius: "25px" }} />
                <div
                  style={{ position: "relative", left: "2px", bottom: "78px" }}
                >
                  <BoostTile />
                </div>
              </div>
            </div>

            <div style={classes.row}>
              <div style={(classes.col, classes.near)}>
                <img src={img4} alt="img" style={{ borderRadius: "25px" }} />
                <div
                  style={{ position: "relative", left: "2px", bottom: "78px" }}
                >
                  <BoostTile />
                </div>
              </div>
              <div style={(classes.col, classes.near)}>
                <img src={img5} alt="img" style={{ borderRadius: "25px" }} />
                <div
                  style={{ position: "relative", left: "2px", bottom: "78px" }}
                >
                  <BoostTile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BoostGrid;
