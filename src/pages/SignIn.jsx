import { useState } from 'react';
import { Link } from 'react-router-dom';





function SignIn() {

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handlerChange = (e)=>{
    const {name, value } = e.target;
  
    const newValue = name === 'email' ? value.toLowerCase() : value;
    // console.log(e.target);

    setData((prev)=> {
      return {
        ...prev,
        [name]: newValue,
      }
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(data);
    alert(" Successfully Sumbitted")
    
    setData({
      name: "",
      email: "",
      password: "",
      confirmpassword: ""
    })
  }

  return (
    <>
      <div className=' h-screen flex justify-center items-center '>
        {/* Form */}
        <div className=' bg-green-300 h-[400px]  w-[350px] flex flex-col justify-center rounded-md  '>
          <form className=' space-y-2' onSubmit={handleSubmit} >
            <div>
              <p className=' font-semibold text-2xl text-center'> SIGN IN</p>
            </div>

            <div className='mr-5 pl-10'>
              <p>Enter Email :</p>
              <input className=' h-10 rounded-md p-5 border border-sm w-full ' type="text" value={data.email} onChange={handlerChange} name="email" placeholder ='Enter Email' required />
            </div>

            <div className=' mr-5 pl-10'>
              <p>Enter Password :</p>
              <input className=' h-10 rounded-md border border-sm p-5 w-full' type="password" value={data.password} onChange={handlerChange} name="password"  placeholder='Enter Password' required />
            </div>
             
             <div className=' flex gap-3 pl-10' >
              <input type="checkbox"  />
              <p>Remember me?</p>
             </div>

             <div className=' mr-5 pl-10' >
              <button className=' text-white bg-blue-500 hover:bg-blue-700 w-full h-10 rounded-full font-semibold'>Sign In</button>
              <p className=' text-end mr-5 mt-2'>Forgot <span className=' cursor-pointer hover:text-blue-700 font-semibold'>password</span> </p>
             </div>

             <div className='pl-10'>
              <p>Need an Account? <span> <Link className=' text-blue-500 hover:text-blue-700  font-semibold ml-2 ' to="/signup" >Sign up</Link> </span> </p>
             </div>


          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn