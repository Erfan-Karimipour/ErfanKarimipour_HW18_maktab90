export const ValidationCheck = (nameRef, familyNameRef, phoneNumberRef, groupRef, emailRef, submitBtn) => {

    let nameCheck, familyNameCheck, phoneNumberCheck, groupCheck, emailCheck = false;

    if (nameRef.current.value.length > 2 && nameRef.current.value.length < 20) {nameCheck = true; nameRef.current.parentElement.querySelector(`p`).setAttribute(`hidden`, true)} else {nameRef.current.parentElement.querySelector(`p`).removeAttribute(`hidden`)};
    if (familyNameRef.current.value.length > 2 && familyNameRef.current.value.length < 20) {familyNameCheck = true; familyNameRef.current.parentElement.querySelector(`p`).setAttribute(`hidden`, true)} else {familyNameRef.current.parentElement.querySelector(`p`).removeAttribute(`hidden`)};
    if (phoneNumberRef.current.value.length > 7 && phoneNumberRef.current.value.length < 14) {phoneNumberCheck = true; phoneNumberRef.current.parentElement.querySelector(`p`).setAttribute(`hidden`, true)} else {phoneNumberRef.current.parentElement.querySelector(`p`).removeAttribute(`hidden`)};
    if (groupRef.current.innerHTML != 'گروهبندی') {groupCheck = true};
    if (emailRef.current.value.length > 4 && emailRef.current.value.includes(`@`) && !emailRef.current.value.endsWith(`@`)) {emailCheck = true; emailRef.current.parentElement.querySelector(`p`).setAttribute(`hidden`, true)} else {emailRef.current.parentElement.querySelector(`p`).removeAttribute(`hidden`)};
    
    if (nameCheck && familyNameCheck && phoneNumberCheck && groupCheck && emailCheck){
        submitBtn.current.removeAttribute('disabled');
    } else {
        submitBtn.current.setAttribute('disabled', true);
    }
}
