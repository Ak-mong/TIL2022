import React, { Component } from "react";
import PropTypes from "prop-types";

export function Text({children, color, italic, underline}){ //구현해야될것 : {}안에
    const style={
        color: color,
        fontStyle : italic ? "italic" : "normal",
        textDecoration : underline ? "underline" : "none",
    };
    return <span style={style}>{children}</span>;
};

/*선언이 필수는 아니지만 원하는 결과가 안나 올 수 있기 때문에 자료형에 대해 선언을 해주지 않으면 에러를 발생하도록 부여*/
Text.propTypes = { 
        children : PropTypes.string.isRequired, /*propType을 지정하지 않은 것 만으로 오류를 출력*/
        color : PropTypes.string,
        italic : PropTypes.bool,
        underline : PropTypes.bool //T,F 만 있으면 되니까
}

Text.defaultProps = { /* 디롵트 속성이 뭐냐? */
    color : "black",
    italic : false,
    underline : false
};