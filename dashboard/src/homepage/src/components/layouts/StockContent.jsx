import React from "react";
import { Container } from "@material-ui/core";
import Grids from "./Grids";
import PrintButton from "./PrintButton";
import { footerImage } from "../../assets/index";
import { tileData2 } from "./../data/tileData";

const styles = () => ({
  text: {
    marginTop: "3%",
    textAlign: "center",
    fontSize: "25px",
  },
  spaces: {
    margin: "150px 0px",
  },

  signStyle: {
    color: "red",
    float: "right",
    position: "relative",
    right: "50px",
    bottom: "100px",
  },
});

const StockContent = () => {
  const classes = styles();
  return (
    <>
      <Container>
        <h4 style={classes.text}>Find out our stock content!</h4>
        <center>
          <Grids data={tileData2} />
          <div style={{ margin: "20px" }}>
            <PrintButton label="Explore more" color="#485BF4" />
          </div>
        </center>
        <div style={classes.spaces}></div>
      </Container>
      <div>
        <img
          src={footerImage}
          alt="footerImage"
          style={{ position: "relative", minWidth: "100%" }}
        />
        <div style={classes.signStyle}>
          <PrintButton label="Sign in" color="#F43E06" />
        </div>
      </div>
    </>
  );
};

export default StockContent;
