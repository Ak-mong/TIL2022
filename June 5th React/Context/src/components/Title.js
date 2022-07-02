import React from "react";
import LangContext from "../LangContext";

//consumer 로 context 접근
function Title() {
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

/* 기존방법
import Reagct from "react";

function Title({lang}){
    const text =lang === "en"? "context" : "컨텍스트";
    return <h1>{text}</h1>;
}

exprort default Title;
*/