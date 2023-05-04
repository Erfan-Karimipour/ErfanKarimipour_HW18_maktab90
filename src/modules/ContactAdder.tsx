export const ContactAdder = (e ,name, familyName, phoneNumber, group, email, allContacts, setAllContacts, nameRef, familyNameRef, phoneRef, emailRef, setContacts, submitBtn, addToast) => {

  if (!allContacts) allContacts = [];
  
  let newContact = {
    name: name,
    familyName: familyName,
    phoneNumber: phoneNumber,
    group: group,
    email: email,
  }
  
  allContacts.push(newContact);
  setAllContacts(allContacts);
  
  nameRef.current.value = '';
  familyNameRef.current.value = '';
  phoneRef.current.value = '';
  emailRef.current.value = '';

  setContacts ({
    name        : '',
    familyName  : '',
    phoneNumber : '',
    relation    : '',
    email       : ''
  })

  addToast.current.style.right = '0rem';
  setTimeout (() => {
    addToast.current.style.right = '-20rem';
  }, 3000)

  submitBtn.current.setAttribute(`disabled`, true)
}
