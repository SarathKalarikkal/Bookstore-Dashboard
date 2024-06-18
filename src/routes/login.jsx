import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BASE_URL from '../api'

function Login() {

const [adminEmail, setAdminEmail] = useState('')
const [adminPassword, setAdminPassword] = useState('')
const [responseMsg, setresponseMsg] = useState('')
const [responseerrMsg, setresponseerrMsg] = useState('')

const navigate = useNavigate()

const handleSubmit = (e)=>{
    e.preventDefault()

     const adminData = {
        adminEmail : adminEmail,
        adminPassword : adminPassword
     }

     console.log(adminData)


     const loginFun = async ()=>{
      try {
        const response = await fetch(`${BASE_URL}/admin/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(adminData),
        });

        if (!response.ok) {

          const errorData = await response.json();
          console.log('Backend error:', errorData);
          setresponseerrMsg("Invalid Admin credentials")
        }else{
          setresponseMsg("Admin Login success")
           setTimeout(()=>{
            navigate('/')
           },1000)
          console.log("Login success")
        }

      } catch (error) {
        console.error('There was a problem with your fetch operation:', error.message);
      }
     }
     loginFun()
    //  useEffect(()=>{
    //   loginFun()
    //  },[adminData])
     

}


  return (
     <>
    <div className="login-sec bg-dark w-100">
         <form onSubmit={handleSubmit}>
            <h3 className='text-center text-white'>BookStore</h3>
            <span className='text-center text-secondary'>Admin Login</span>

             <div className="inp-group">
                 <label htmlFor="adminEmail">Email</label>
                 <input type="email" name="adminEmail" id="adminEmail" placeholder='Enter admin email' value={adminEmail} onChange={(e)=>setAdminEmail(e.target.value)}/>
             </div>
             <div className="inp-group">
                 <label htmlFor="adminPassword">Password</label>
                 <input type="password" name="adminPassword" id="adminPassword" placeholder='Enter admin password' value={adminPassword} onChange={(e)=>setAdminPassword(e.target.value)}/>
             </div>
             <button type='submit'>Login</button>
         </form>  
    </div>
    <div className='admin-response-mg'>{responseMsg && responseMsg}</div>
    <div className='admin-response-errmg'>{responseerrMsg && responseerrMsg}</div>
   </>
  )
}

export default Login