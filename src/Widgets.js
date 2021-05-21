import React from 'react'
import "./App.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

function Widgets() {

    const newsArticle = (heading,subtitle) =>(
        <div className="widgets__article">
            <div className="widgets__articleleft">
                <FiberManualRecordIcon style={{width:"13px"}}/>
            </div>
            <div className="widgets__articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("India records 2.67 lakh COVID cases","Top News-70,254 readers")}
            {newsArticle("Delivering Oxygen to All","1 day ago")}
            {newsArticle("Small Biz, daily wagers worst hit","1 day ago")}
        </div>
    )
}

export default Widgets
