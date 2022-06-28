import './App.css';
import React from 'react'; //Component를 이 파일에서 쓰지 않음으로 {Component}가 포함되어도 출력은 되지만 경고메세지가 뜨게 됨으로 삭제해줬음
// component로 만들어서 다른 파일로서 저장 후 불러오기
//AddNumberRoot파일에 Addnumber를 사용했음
import AddNumberRoot from "./components/AddNumberRoot"
import DisplayNumberRoot from './components/DisplayNumberRoot';

/*예전 방법 : 한 파일에 모든 것을 넣기
-> 현재 쓰는 방법: components 폴더에 component들을 넣기
//AddBynber 이라는 컴퍼넌트를 만듬
class AddNumber extends Component{
  render(){
    return(
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+"></input>
        <input type="text" value="0"></input>
      </div>
    );
  }
}
// AddNumbder 컴퍼넌트를 사용
class AddNumberRoot extends Component {
  render(){
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumber></AddNumber>
      </div>
    );
  }
}

class DisplayNumber extends Component {
  render(){
    return(
      <div>
      <h1>Display Number</h1>
      <input type="text" value="0" readOnly></input>
      </div>
    );
  }
}

class DisplayNumberRoot extends Component{
  render(){
    return(
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumber></DisplayNumber>
      </div>
    );
  }
}
*/
function App() {
  return (
    <div className="App">
    <h1>Root</h1>
    <AddNumberRoot></AddNumberRoot> {/*원하는 부분에 넣기*/}
    <DisplayNumberRoot></DisplayNumberRoot>
    </div>
  );
}

export default App;
