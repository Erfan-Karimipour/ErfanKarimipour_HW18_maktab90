export const ContactsChanger = (e, Contacts, setContacts, ref) => {

    if (e.id == `name`) {setContacts({...Contacts, name: e.value})}
    if (e.id == `familyName`) setContacts({...Contacts, familyName: e.value})
    if (e.id == `phoneNumber`) setContacts({...Contacts, phoneNumber: e.value})
    if (e.id == `email`) setContacts({...Contacts, email: e.value})
}
