import {createStore} from 'redux'; //redux에서 store만드는것을 가져오기
import reducer from './reducer/reducer'; //요청하기 위해 reducer 써야함

let store = createStore(reducer);
/*store을 만들고, store을 동작시키기 위해  action과 state를 줘야함
 => reducer로 준다. */
export default store;
