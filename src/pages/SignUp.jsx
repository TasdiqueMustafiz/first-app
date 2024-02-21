import  { useState} from 'react'
import { Link } from 'react-router-dom';

function SignUp() {


  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
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
    alert("Successfully Created")
    console.log(data);
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
        <div className=' bg-green-300 h-[500px]  w-[400px] flex flex-col justify-center rounded-md  '>
          <form className=' space-y-2' onSubmit={handleSubmit}  >
            <div>
              <p className=' font-semibold text-2xl text-center'> SIGN UP</p>
            </div>

            <div className='mr-5 pl-10'>
              <p>Enter Name :</p>
              <input className=' h-10 rounded-md p-5 border border-sm w-full ' type="text" value={data.name} onChange={handlerChange} name="name"  placeholder='Enter Name' required />
            </div>

            <div className='mr-5 pl-10'>
              <p>Enter Email :</p>
              <input className=' h-10 rounded-md p-5 border border-sm w-full ' type="text" value={data.email} onChange={handlerChange} name="email"  placeholder='Enter Email' required />
            </div>

            <div className=' mr-5 pl-10'>
              <p>Enter Password :</p>
              <input className=' h-10 rounded-md border border-sm p-5 w-full' type="password" value={data.password} onChange={handlerChange} name="password"  placeholder='Enter Password' required />
            </div>

            <div className=' mr-5 pl-10'>
              <p>Enter Confirm Password :</p>
              <input className=' h-10 rounded-md border border-sm p-5 w-full' type="password" value={data.confirmpassword} onChange={handlerChange} name="confirmpassword"  placeholder='Enter Confirm Password' required />
            </div>
             
             <div className=' flex gap-3 pl-10' >
              <input type="checkbox"  />
              <p>Remember me?</p>
             </div>

             <div className=' mr-5 pl-10' >
              <button className=' text-white bg-blue-500 hover:bg-blue-700 w-full h-10 rounded-full font-semibold'>Sign up</button>
          
             </div>

             <div className='pl-10'>
              <p>Already Account Exist? <span> <Link className=' font-semibold ml-2 text-blue-700' to="/signin" >Sign in</Link> </span> </p>
             </div>


          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp