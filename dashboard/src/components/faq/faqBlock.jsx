import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import SmallButtons from '../../homepage/src/components/layouts/SmallButtons';
//styles
const useStyles = makeStyles({
    count: {
        fontSize: 14,
        padding: "20px 0px"
    },
    card: {
        maxWidth: 800,
        minHeight: 200,
        backgroundColor: "#F2F0F0;",
        padding: 20,
        margin: 0,
    },
    designIcon: {

        display: "-webkit-box",
        display: "-ms-flexbox",
        display: "flex"
    },
    miniIcon: {
        width: "48px",
        display: "block",
        height: "48px",
        background: "#000",
        marginRight: "10px"
    },
    buttonGroup: {
        display: "-webkit-box",
        display: "-ms-flexbox",
        display: "flex",
        float: "right",
    }
});

//questionnaire block function

const ManageFaq = () => {
    const classes = useStyles();

    return (
        <div className="questionDesign" style= {{display:"inline-block", width: "100%" }}>
            <div className={classes.count}>
                #001
            </div>
            <div className={classes.card}>
                <div className="titleQuestion">
                    <h3 style={{margin: "0px"}}>What type of art attracts you the most?</h3>
                </div>
                <div className="answerContent">
                    <p
                        style={{
                            textAlign: "justify"
                        }}>They
                        should be easy to scan for relevant and actionable information. Elements, like
                        text and images, should be placed on them in a way that clearly indicates
                        hierarchy. They should be easy to scan for relevant and actionable information.
                        Elements, like text and images, should be placed on them in a way that clearly
                        indicates hierarchy.</p>
                </div>
                <div className={classes.designIcon}>
                    <span className={classes.miniIcon}>icon</span>
                    <span className={classes.miniIcon}>icon</span>
                    <span className={classes.miniIcon}>icon</span>
                </div>
            </div>
            <div className="quesButton" style={{padding: "20px 10px"}}>
                <ul className={classes.buttonGroup}>
                    <li>
                        <SmallButtons label="Forward" color="#ff5600"/>
                    </li>
                    <li>
                        <SmallButtons label="Edit" color="#ff5600"/>
                    </li>
                    <li>
                        <SmallButtons label="View" color="#ff5600"/>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default ManageFaq;