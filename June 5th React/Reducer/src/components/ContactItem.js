import React from 'react';
import {Row, Col,} from 'react-bootstrap';
 //여기는 redux문법이 아닌 property문법 =매개변수로 item을 받음
const ContactItem = ({item}) => {
    return (
        <Row>
            <Col lg={1}>
                <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"/>
            </Col>
            <Col lg={11}>
                {/*매개변수로 받은 item 뿌리기*/}
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
    );
}

export default ContactItem;