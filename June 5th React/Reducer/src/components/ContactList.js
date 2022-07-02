import React from 'react';
import ContactItem from './ContactItem';
import SearchBox from './SearchBox';
import {useSelector} from "react-redux"; 
//redux의 state를 조회(store에 있는 데이터들 조회하는 것)

const ContactList =() =>{
    const contactList = useSelector((state) => state.contactList);

    return(
        <div>
            <SearchBox></SearchBox>
            {contactList.map((item) => (
                <ContactItem item={item}/>
            ))}
        </div>
    )
}
export default ContactList;