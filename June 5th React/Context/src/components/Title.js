import React from "react";
import LangContext from "../LangContext";

function Title() {
   /* const text = lang === "en"? "Context" : "컨텍스트"; 
    return <h1>{text}</h1>; */ //기존방법
    return(
        <LangContext.Consumer>
            {lang => {
                const text = lang === "en"? "Context":"컨텍스트";
                return <h1>{text}</h1>
            }}
        </LangContext.Consumer>
    )

}

export default Title;

