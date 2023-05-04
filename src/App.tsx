import { useState } from 'react';
import './App.css'
import { ContactList } from './components/ContactList'
import { Form } from './components/Form'

interface contactTypes {
  [key: string]: string;
}

interface allContactsType {
  name: string;
  familyName: string;
  phoneNumber: string;
  relation: string;
  email: string;
}


function App() {
  const [allContacts, setAllContacts] = useState<allContactsType[]>([]);

  let [contacts, setContacts] = useState<contactTypes>({

    name        : '',
    familyName  : '',
    phoneNumber : '',
    relation    : '',
    email       : ''
  })
  
  return (
    <div className='bg-black w-screen h-screen flex flex-col justify-center items-center'>
      <Form contacts={contacts} setContacts={setContacts} allContacts={allContacts} setAllContacts={setAllContacts}/>
      <ContactList allContacts={allContacts} setAllContacts={setAllContacts}/>

    </div>
  )
}

export default App