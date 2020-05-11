import React from "react";
import Button from "@material-ui/core/Button";
import { vanity, spiritual } from "../../assets/index";
import PrintButton from "./PrintButton";
/**
 * This component directs users to the survery page when button clicked.
 */
const styles = {
  text: {
    marginTop: "5%",
    marginBottom: "5%",
    textAlign: "center",
    fontSize: "25px",
  },
  button: {
    paddingLeft: "50px",
  },
  image: {
    height: "auto",
    width: "400px",
    maxHeight: "100%",
    maxWdith: "100%",
    display: "inline-block",
  },
};

const Survey = () => {
  return (
    <div class="container">
      <h5 style={styles.text}>
        Choose a category of internet to start your art work survey!
      </h5>
      <center>
        <div style={{ display: "inline-block" }}>
          <ul>
            <li>
              <div>
                <Button>
                  <img src={spiritual} alt="my image" style={styles.image} />
                </Button>
              </div>
            </li>
            <li>
              <div>
                <Button>
                  <img src={vanity} alt="my image" style={styles.image} />
                </Button>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <PrintButton label="Start from scratch" color="#485BF4" />
        </div>
      </center>
    </div>
  );
};

export default Survey;
