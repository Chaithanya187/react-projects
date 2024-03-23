import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp =()=>{
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        remember:false

    });
    const {name, email, password, remember} = formData;
    const formChangeHandler = (e)=>{
        
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value  
        }));

    }
    const formSubmitHandler =(e)=>{
        e.preventDefault();
        console.log(formData);
    }
    return(
        <div className=" h-[100vh] flex flex-col justify-center items-center bg-gray-50">
            <div className=" max-w-l flex flex-col justify-center items-center gap-10 min-w-[500px]">
                <div>
                    <h2 className=" text-4xl font-bold mb-2">Come on in!</h2>
                    <h4 className=" text-lg text-gray-600">Sign up and receive virtual high-fives ✋</h4>
                </div>
                <div className=" w-full p-10 bg-white shadow-md rounded-lg">
                    <form className=" flex flex-col justify-between" onSubmit={formSubmitHandler}>
                        <div className=" flex flex-col  mb-2">
                            <label className=" font-medium mb-1">UserName</label>
                            <input type="text" name="name" placeholder="username" value={name} className=" px-4 py-2  rounded-md font-medium border border-gray-400" onChange={formChangeHandler}/>
                        </div>
                        <div className=" flex flex-col  mb-2">
                            <label className=" font-medium mb-1">Email address</label>
                            <input type="email" name="email" placeholder="user@email.com" value={email} className=" px-4 py-2  rounded-md font-medium border border-gray-400" onChange={formChangeHandler}/>
                        </div>
                        <div className=" flex flex-col mb-2">
                            <label className=" font-medium mb-1">Password</label>
                            <input type="password" placeholder="Pasword123" name="password" value={password} className=" px-4 py-2  rounded-md font-medium border border-gray-400" onChange={formChangeHandler}/>
                        </div>
                        <div className="flex justify-between mb-2">
                            <div>
                                <input type="checkbox" name="remember" value={remember} onChange={formChangeHandler}/>
                                <label>Remember</label>
                            </div>
                            <Link className=" text-blue-500" to='/'>Exlore blogs?</Link>
                        </div>
                        <div className=" flex items-center justify-center">
                            <button className="bg-blue-500 w-full text-white px-4 py-2 rounded-md" type="submit">Sign up</button>
                        </div>
                        <div className=" mt-5 ml-5">
                            <p>Ready to log in again? <Link className=" text-blue-500" to='/sign-in'>Login</Link></p>
                        </div>
                    </form>
                </div>

            </div>
            
        </div>
    )
}

export default SignUp;