//state를 쓰기위해서는 initialState해줘야 됨. initial=초기화
let initialState = {
    contactList:[],
};
/*store을 만들고, store을 동작시키기 위해  action과 state를 줘야함
 => reducer로 준다. */
function reducer(state = initialState, action){
    const {type,payload} = action; //type에 따라 payload들을 진행한다.
    switch(type){ //문법, 어떤 케이스냐에 따라 결과를 나눠주는 것
        case 'ADD_CONTACT': 
            return{
                ...state, //... : (연산자),state가 가지는 모든 속성들을 나타내는 문법
                 contactList:[...state.contactList, //state의 속성중 contactList값을 가져오는것
                    {   //contactList의 배열에는 name과 phoneNumber가 들어있다.
                    name: action.payload.name,
                    phoneNumber: action.payload.phoneNumber,
                    },
                 ], //[]: 배열
                };
        default : //나머지같은 개념
            return {...state};
    }
    }

    export default reducer;