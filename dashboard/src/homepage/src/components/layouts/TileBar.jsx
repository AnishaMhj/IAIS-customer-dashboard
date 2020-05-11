import React, { Component } from "react";
import { IconButton } from "@material-ui/core";
import { shareIcon, likeIcon, tagIcon, commentIcon } from "../../assets/index";

const icon = {
  color: "rgba(255, 255, 255, 0.54)",
};
class TileBar extends Component {
  render() {
    return (
      <>
        <IconButton className={icon}>
          <img src={shareIcon} alt="share" />
        </IconButton>
        <IconButton className={icon}>
          <img src={likeIcon} alt="like" />
        </IconButton>
        <IconButton className={icon}>
          <img src={tagIcon} alt="tag" />
        </IconButton>
        <IconButton className={icon}>
          <img src={commentIcon} alt="comment" />
        </IconButton>
      </>
    );
  }
}

export default TileBar;
