import React, {useContext} from "react";
import LangContext from "../LangContext";
//usecontext로 접근
function Button({toggleLang}){
    const lang = useContext(LangContext);
    return <button  onClick={toggleLang}>{lang}</button>;
}

export default Button;

/* 기존방법
import React from "react";

function Button({lang, toggleLang}){
    return <button  onClick={toggleLang}>{lang}</button>;
}

export default Button;
*/