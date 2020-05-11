import React from "react";
import { Container } from "@material-ui/core";
import Grids from "./Grids";
import PrintButton from "./PrintButton";
import { tileData } from "./../data/tileData";

const styles = () => ({
  text: {
    marginTop: "3%",
    textAlign: "center",
    fontSize: "25px",
  },
});

/**
 * This component defines the layout of the Artgrid for home page, takes in five image items as the parameters
 */

const ArtGrid = () => {
  const classes = styles();

  return (
    <>
      <Container>
        <h4 style={classes.text}>Get inspired of other art works designs</h4>

        <Grids data={tileData} />

        <center>
          <div style={{ display: "inline-block" }}>
            <ul>
              <li>
                <PrintButton label="Explore more" color="#485BF4" />
              </li>
              <li>
                <PrintButton label="Start creating" color="#485BF4" />
              </li>
            </ul>
          </div>
        </center>
      </Container>
    </>
  );
};

export default ArtGrid;
