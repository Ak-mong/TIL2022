import React, {component} from "react";
import {Text} from "./Text"; //등록시켜주려는 component가 어디있는지 import

export default{ //스토리북의 title과 component를 알려줌
    title : "Text",
    component : Text,
};
//등록하기 위해 expert
const TEST_TEXT = "Story Text Test";
export const Default= ()=><Text>{TEST_TEXT}</Text>;
export const Red= ()=><Text color="red">{TEST_TEXT}</Text>;
export const Italic= ()=><Text italic>{TEST_TEXT}</Text>;
export const Underline= ()=><Text underline>{TEST_TEXT}</Text>;

//여기까지 해야지 메뉴 등록되서 등장하게 됨