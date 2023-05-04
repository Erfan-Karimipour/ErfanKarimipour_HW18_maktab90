import React, { useRef, useState } from 'react'
import { ContactAdder } from '../modules/ContactAdder';
import { RelativesToggle } from '../modules/RelativesToggle';
import { ContactsChanger } from '../modules/ContactsChanger';
import { ValidationCheck } from '../modules/ValidationCheck';

interface Props {
    contacts: {
        [key: string]: string;
    };
    setContacts: React.Dispatch<React.SetStateAction<contactTypes>>;
    allContacts: allContacts[];
    setAllContacts: React.Dispatch<React.SetStateAction<allContacts[]>>;
}

export const Form = ({contacts, setContacts, allContacts, setAllContacts}: Props) => {

    let [data, setData] = useState(JSON.parse(localStorage.getItem(`Contacts`)));
    if (!data) data = [];

    let addToast = useRef(null);
    let nameRef = useRef (null);
    let familyNameRef = useRef (null);
    let phoneNumberRef = useRef(null);
    let emailRef = useRef(null);
    let submitBtn = useRef(null);
    let relativesRef = useRef(null);
    let iconRef = useRef(null);
    let groupRef = useRef(null);

    return (
        <form className='border form border-red-700 px-10 py-4 rounded-xl' onSubmit={(e) => ContactAdder(e.preventDefault(), nameRef.current.value, familyNameRef.current.value, phoneNumberRef.current.value, groupRef.current.innerHTML, emailRef.current.value, allContacts, setAllContacts, nameRef, familyNameRef, phoneNumberRef, emailRef, setContacts, submitBtn, addToast)}>
            <header className='text-red-700 text-3xl font-bold border-b border-red-700 px-5 rounded-full pb-2 mb-6 title'>وب اپلیکیشن مدیریت مخاطبین</header>
            <main className='flex flex-col justify-center'>
                <div className='mb-4 h-12'>
                    <input id='name' ref={nameRef} type='text' className='w-full text-xl py-[2px] rounded-lg placeholder:text-gray-700 px-3 outline-red-700' placeholder="نام" onChange={(e) => {ContactsChanger(e.target, contacts, setContacts), ValidationCheck(nameRef, familyNameRef, phoneNumberRef, groupRef, emailRef, submitBtn)}}></input>
                    <p className='text-red-600 mt-1' hidden>* لطفا نام صحیح وارد کنید</p>
                </div>
                
                <div className='mb-4 h-12'>
                    <input id='familyName' ref={familyNameRef} type='text' className='w-full text-xl py-[2px] rounded-lg placeholder:text-gray-700 px-3 outline-red-700' placeholder="نام خانوادگی" onChange={(e) => {ContactsChanger(e.target, contacts, setContacts), ValidationCheck(nameRef, familyNameRef, phoneNumberRef, groupRef, emailRef, submitBtn)}}></input>
                    <p className='text-red-600 mt-1' hidden>* لطفا نام خانوادگی صحیح وارد کنید</p>
                </div>

                <div className='mb-4 h-12'>
                    <input id='phoneNumber' ref={phoneNumberRef} type='number' className='w-full text-xl py-[2px] rounded-lg placeholder:text-gray-700 px-3 outline-red-700' placeholder="شماره موبایل" onChange={(e) => {ContactsChanger(e.target, contacts, setContacts), ValidationCheck(nameRef, familyNameRef, phoneNumberRef, groupRef, emailRef, submitBtn)}}></input>
                    <p className='text-red-600 mt-1' hidden>* لطفا شماره موبایل صحیح وارد کنید</p>
                </div>

                <div className='mb-4 h-12'>
                    <div className='w-full cursor-pointer bg-white text-xl py-[2px] rounded-lg px-3 outline-red-700 text-gray-700 flex justify-between items-center' onClick={(e) => RelativesToggle(relativesRef.current, iconRef.current)}>
                      <p ref={groupRef}>گروهبندی</p>   
                      <ion-icon name="caret-down-circle-outline" ref={iconRef} class='duration-200'></ion-icon>   
                    </div>
                    <div ref={relativesRef} className='absolute relationSelection bg-white rounded-sm rounded-b-xl px-2 border-black border flex flex-col duration-200 overflow-hidden h-0'>
                      <p id='family' className='cursor-pointer border-b border-gray-300' onClick={(e) => {groupRef.current.innerHTML=e.target.innerHTML, RelativesToggle(relativesRef.current, iconRef.current)}}>خانواده</p>
                      <p id='friend' className='cursor-pointer border-b border-gray-300' onClick={(e) => {groupRef.current.innerHTML=e.target.innerHTML, RelativesToggle(relativesRef.current, iconRef.current)}}>دوستان</p>
                      <p id='partner' className='cursor-pointer border-b border-gray-300' onClick={(e) => {groupRef.current.innerHTML=e.target.innerHTML, RelativesToggle(relativesRef.current, iconRef.current)}}>همکاران</p>
                      <p id='relatives' className='cursor-pointer' onClick={(e) => {groupRef.current.innerHTML=e.target.innerHTML, RelativesToggle(relativesRef.current, iconRef.current)}}>فامیل</p>
                    </div>
                    <p className='text-red-600 mt-1' hidden>* لطفا یکی از دسته بندی ها را انتخاب کنید</p>
                </div>

                <div className='mb-4 h-12'>
                    <input id='email' ref={emailRef} type='text' className='w-full text-xl py-[2px] rounded-lg placeholder:text-gray-700 px-3 outline-red-700' placeholder="ایمیل" onChange={(e) => {ContactsChanger(e.target, contacts, setContacts), ValidationCheck(nameRef, familyNameRef, phoneNumberRef, groupRef, emailRef, submitBtn)}}></input>
                    <p className='text-red-600 mt-1' hidden>* لطفا ایمیل صحیح وارد کنید</p>
                </div>
            </main>
            <footer className='w-fit m-auto mt-3'>
                <button disabled type='submit' ref={submitBtn} className='disabled:opacity-25 disabled:bg-white text-xl font-bold px-5 py-2 rounded-full bg-red-600 border border-black hover:bg-black hover:text-red-600 hover:border hover:border-red-600 duration-150'>اضافه کردن</button>
            </footer>
            <div ref={addToast} className='absolute text-white bg-green-800 top-0 text-3xl px-7 py-1 rounded-bl-3xl duration-200' style={{right:"-20rem"}}>
            با موفقیت اضافه شد!
            </div>

        </form>
    )
}
