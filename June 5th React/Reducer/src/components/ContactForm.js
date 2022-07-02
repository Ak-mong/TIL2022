import React, {useState} from 'react';
import {Form, Button} from  'react-bootstrap';
import { useDispatch} from 'react-redux';
const ContactForm = () =>{
    const [name, setName] = useState(''); //[변수,함수] = 초기값()
    const [phoneNumber, setPhoneNumber] = useState(0); //[변수,함수] = 초기값()
    const dispatch = useDispatch; //action실행을 위해 사용
  //불러오는것을 계속 추가하기
    const addContact = (event) => { 
        event.preventDefault();
        dispatch({
            type: 'ADD_CONTACT', //reducer 파일에서 정의한 것
            payload : {name,phoneNumber}, //name이랑phoneNumber에 값을 넣어주기 위해 setname,setphonenumber을 진행
        });
    };

return(
    //부트스트랩에서 가져와서 우리가 필요한 부분을 고쳐 쓰기
    <Form onSubmit={addContact}> {/*addContact를 submit한다*/}
  <Form.Group className="mb-3" controlId="formName">
    <Form.Label>이름</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="이름을 입력해 주세요" 
    onChange={(event) => setName(event.target.value)}/> 
    {/*위에서 실행되는 event를 통해서 event에 입력(target)된 값(value)를 읽어서 setname을 줄것이다 .*/}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formPhone">
    <Form.Label>전화번호</Form.Label>
    <Form.Control type="number" placeholder="전화번호를 입력해주세요" 
    onChange={(event) => setPhoneNumber(event.target.value)}/>

  </Form.Group>
  <Button variant="primary" type="submit"> {/*submit이 받는 객체는 Form전체를 받는다.*/}
    추가
  </Button>
</Form>
);
};

export default ContactForm;