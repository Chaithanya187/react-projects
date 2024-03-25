import { useState } from "react";
import { Link } from "react-router-dom";
import AddPost from "../Modal/AddPost";

const Header = ()=>{
    const [show, setShow] = useState(false);
    return(
        <header className=" flex justify-between items-center mx-10 bg-gray-100 p-5">
            <div className=" flex gap-10 justify-center items-center">
                <div>
                    <Link className=" font-bold text-xl">Logo</Link>
                </div>
                <div className="flex gap-10">
                    <Link>Home</Link>
                    <Link to='sign-in'>Sign in</Link>
                    <Link to='sign-up'>Create an account</Link>
    
                </div>
            </div>
            <div>
                <button onClick={()=>{
                    setShow(!show)
                }}>Action</button>
            </div>
            <AddPost show={show} onClose={()=>setShow(false)} />
        </header>
    )
}

export default Header;