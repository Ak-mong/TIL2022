import React, { Component } from 'react';
import Input from "./Input"; //스토리북이랑 연결

export default{ //title과 compoent
    title : "input",
    component : Input,
};

export const label = ()=><Input name="name" label="이름 : "/>; //등록하기 위해 export