export const HandeDelete = (e, allContacts, setAllContacts) => {
    // console.log(e.target.parentElement.parentElement.parentElement.parentElement);
    
    let newAllContacts = allContacts.filter((contact) => contact.name != e.target.parentElement.parentElement.parentElement.querySelector(`p`).innerHTML)

   setAllContacts(newAllContacts);
}
