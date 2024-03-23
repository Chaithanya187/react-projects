import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";


const Footer = ()=>{
    return(
        <footer className=" flex justify-between bg-gray-100 p-5 w-full">
            <div>
                © 2024 Chaithanya Puli
            </div>
            <div>
                <Link to='https://github.com/Chaithanya187/' className=" font-medium cursor-pointer"><FaGithub /></Link>
            </div>
        </footer>
    )
}

export default Footer;