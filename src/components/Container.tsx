import { useState } from 'react'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'
import submited from '../modules/submited'

export const Container = () => {

  let [rightEmail, setRightEmail]                       = useState(true)
  let [rightUserName, setRightUserName]                 = useState(true)
  let [rightPassword, setRightPassword]                 = useState(true)
  let [rightConfirmPassword, setRightConfirmPassword]   = useState(true)
  
  let [email, setEmail]                                 = useState("")
  let [userName, setUserName]                           = useState("")
  let [password, setPassword]                           = useState("")
  let [confirmPassword, setConfirmPassword]             = useState("")
  
  return (
    <form className='bg-[#fdecf6] rounded-2xl px-8' style={{width:"28rem"}} onSubmit={(e) => {
      e.preventDefault()
      submited(email, userName, password, confirmPassword, setRightEmail, setRightUserName, setRightPassword, setRightConfirmPassword) 
    }
      }>
        <Header />
        <Main 
                  email={email}                userName={userName}                password={password}                confirmPassword={confirmPassword} 
               setEmail={setEmail}          setUserName={setUserName}          setPassword={setPassword}          setConfirmPassword={setConfirmPassword} 
             rightEmail={rightEmail}      rightUserName={rightUserName}      rightPassword={rightPassword}      rightConfirmPassword={rightConfirmPassword}   
        />
        <Footer />
    </form>
  )
}
