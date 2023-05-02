import React from 'react'

interface Props {

  rightEmail: boolean, rightUserName: boolean, rightPassword: boolean, rightConfirmPassword: boolean,

            setEmail: React.Dispatch<React.SetStateAction<boolean>>, 
         setUserName: React.Dispatch<React.SetStateAction<boolean>>, 
         setPassword: React.Dispatch<React.SetStateAction<boolean>>, 
  setConfirmPassword: React.Dispatch<React.SetStateAction<boolean>> 

}

export const Main = ({setEmail, setUserName, setPassword, setConfirmPassword, rightEmail, rightUserName, rightPassword, rightConfirmPassword}: Props) => {

  return (
    <div className='grid grid-cols-1 h-96'>

      <div className='h-24'>
        <div className='flex items-center bg-white text-lg p-3 rounded-lg text-gray-500 gap-2'>
          <ion-icon name="mail-outline" class='text-xl'></ion-icon>
          <input type="text" placeholder='Email' className='outline-none w-full'                onChange= {(event) => setEmail(event.target.value)}/>
        </div>
        <p className={rightEmail ? "hidden": "text-red-500 text-sm"}>Please enter a valid Email</p>
      </div>
      
      <div className='h-24'>
        <div className='flex items-center bg-white text-lg p-3 rounded-lg text-gray-500 gap-2'>
          <ion-icon name="people-outline" class='text-xl'></ion-icon>
          <input type="text" placeholder='Username' className='outline-none w-full'             onChange= {(event) => setUserName(event.target.value)}/>
        </div>
        <p className={rightUserName ? "hidden": "text-red-500 text-sm"}>Username should not start or end with empty space</p>
      </div>

      <div className='h-24'>
        <div className='flex items-center bg-white text-lg p-3 rounded-lg text-gray-500 gap-2'>
          <ion-icon name="lock-closed-outline" class='text-xl'></ion-icon>
          <input type="password" placeholder='Password' className='outline-none w-full'         onChange= {(event) => setPassword(event.target.value)}/>
        </div>
        <p className={rightPassword ? "hidden": "text-red-500 text-sm"}>Please enter a valid Password which is 4 words or longer</p>
      </div>

      <div className='h-24'>
        <div className='flex items-center bg-white text-lg p-3 rounded-lg text-gray-500 gap-2'>
          <ion-icon name="document-lock-outline" class='text-xl'></ion-icon>
          <input type="password" placeholder='Confirm Password' className='outline-none w-full' onChange= {(event) => setConfirmPassword(event.target.value)}/>
        </div>
        <p className={rightConfirmPassword ? "hidden": "text-red-500 text-sm"}>Please enter the exact password as the one above</p>
      </div>
   
    </div>
  )   
}
