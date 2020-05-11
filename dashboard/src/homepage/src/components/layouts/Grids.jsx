import React, { Component } from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  Container,
  IconButton,
} from "@material-ui/core";
import { shareIcon, likeIcon, tagIcon, commentIcon } from "../../assets/index";

const useStyles = () => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "inline-box",
    overflow: "hidden",
    marginLeft: "1px",
    marginRight: "1px",
  },
  gridList: {
    width: "auto",
    // height: "518px",
  },
  tileBar: {
    borderRadius: "0px 0px 25px 25px",
    width: "inherit",
    bottom: "7px",
  },
  icon: {
    color: "white",
  },
  image: {
    borderRadius: "25px",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
});
const classes = useStyles();

const Grids = (props) => {
  return (
    <>
      <Container>
        <div style={classes.root}>
          <GridList
            cellHeight={"auto"} //252 || 518
            spacing={1}
            style={classes.gridList}
            cols={3}
          >
            {props.data.map((tile) => (
              <GridListTile
                key={tile.img}
                cols={1}
                rows={tile.featured ? 2 : 1}
              >
                <img src={tile.img} alt={tile.title} style={classes.image} />

                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>by*graphic designer*</span>}
                  style={classes.tileBar}
                  actionIcon={
                    <>
                      <IconButton className={classes.icon}>
                        <img src={shareIcon} alt="share" />
                      </IconButton>
                      <IconButton className={classes.icon}>
                        <img src={likeIcon} alt="like" />
                      </IconButton>
                      <IconButton className={classes.icon}>
                        <img src={tagIcon} alt="tag" />
                      </IconButton>
                      <IconButton className={classes.icon}>
                        <img src={commentIcon} alt="comment" />
                      </IconButton>
                    </>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Container>
    </>
  );
};

export default Grids;
