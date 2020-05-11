import React from 'react';
import logo from './images/banner.png';
import SmallButtons from './homepage/src/components/layouts/SmallButtons';
import ManageFaq from './components/faq/faqBlock';


function Questionnaires() {
    // const classes = useStyles();
    return (
        <div className="toggleContent" id="toggleContent">
            <div className="titleBar" style={{position: "relative"}}> 
                <h3>Manage Questionnaires</h3>

                <SmallButtons label=" Create new one" color="#485bf4"
                    style={{
                        position: "absolute",
                        top: "8px",
                        right: "37px"
                    }}/>

            </div>
            <div style={{
                    paddingBottom: "20px"
                }}>
                <ManageFaq/>
            </div>

            <div style={{
                    paddingBottom: "20px"
                }}>
                <ManageFaq/>
            </div>

            <div style={{
                    paddingBottom: "20px"
                }}>
                <ManageFaq/>
            </div>

        </div>
    );
}

export default Questionnaires;
