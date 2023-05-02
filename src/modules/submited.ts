function submited (

  email: string,       userName: string,       password: string,       confirmPassword: string,

       setRightEmail: React.Dispatch<React.SetStateAction<boolean>>, 
    setRightUserName: React.Dispatch<React.SetStateAction<boolean>>, 
    setRightPassword: React.Dispatch<React.SetStateAction<boolean>>, 
  setConfirmPassword: React.Dispatch<React.SetStateAction<boolean>>

  ) {
    
    if (email.includes(`@`) && !email.endsWith(`@`) && email.length>3)       {setRightEmail(true)}       else {setRightEmail(false)}               
    if (userName && !userName.startsWith(` `) && !userName.endsWith(` `))    {setRightUserName(true)}    else {setRightUserName(false)}
    if (password.length>3 && !password.includes(` `))                        {setRightPassword(true)}    else {setRightPassword(false)}
    if (confirmPassword==password)                                           {setConfirmPassword(true)}  else {setConfirmPassword(false)}
    
    if (email.includes(`@`) && !email.endsWith(`@`) && email.length>3 && userName && !userName.startsWith(` `) && !userName.endsWith(` `) && password.length>3 && !password.includes(` `) && confirmPassword==password) {
      console.log(`Email   : ${email} \nUsername: ${userName} \nPassword: ${password}`);
    } 
}
export default submited