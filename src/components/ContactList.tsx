import { HandeDelete } from "./HandeDelete";

interface Props {
  allContacts: allContacts[];
  setAllContacts: React.Dispatch<React.SetStateAction<allContacts[]>>;
}

export const ContactList = ({allContacts, setAllContacts}: Props) => {
  return (
    <div className='text-white grid grid-flow-col gap-10 mt-10 w-[60vw] scrollBar overflow-x-scroll py-4 border-x border-red-700 rounded-2xl'>
      {allContacts.map((contact, index) => (

        <div key={index} id={index} className='border border-red-700 rounded-xl p-2 w-[20rem]'>
            <div className='flex justify-between'>
              <p className='text-xl border-b border-l pl-4 rounded-l-xl border-red-700'>
                {contact.name}
              </p>
              <div className='text-xl mt-1'>
                <button><ion-icon name="pencil-outline" class='mx-2'></ion-icon></button>
                <button onClick={(e) => {HandeDelete(e, allContacts, setAllContacts)}}><ion-icon name="trash-outline"></ion-icon></button>
              </div>
            </div>
            <p className='mt-2'>{contact.familyName}</p>     
            <p className='mt-2'>{contact.phoneNumber}</p>
            <p className='mt-2'>{contact.group}</p>
            <p className='mt-2'>{contact.email}</p>
        </div>
      ))}
      

    </div>
  )
}
