import { Link, useNavigate } from "react-router-dom"
import { FaRegHeart } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import DeletePost from "../Modal/DeletePost";
import { useState } from "react";


const Post =({postData})=>{
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    return(
        <div className=" mb-4">
            <div>
                <img src={postData?.image_url} alt="blog_post_image" height={400} width={400} className=" border rounded-lg"/>
            </div>
            <div>
                <div>
                    <h3 className=" text-lg font-bold mt-1 cursor-pointer" onClick={()=>navigate(`/post/${postData?.id}`)}>{postData?.title}</h3>
                    <p>{postData?.description}</p>
                </div>
                <div className=" flex justify-between items-center">
                    <div className=" flex justify-between items-center gap-4">
                        <p>Chaithanya</p>
                        <p>Abpout 21 hours ago</p>
                    </div>
                    <div className=" flex justify-between items-center gap-4">
                        <FaRegHeart  className=" text-red-500"/>
                        <MdDeleteOutline className=" text-lg text-red-500 cursor-pointer"  onClick={()=>{setShow(!show)}}/>
                    </div>
                </div>
            </div>
            <DeletePost show={show} onClose={()=>{setShow(false)}}/>
        </div>
    )
}

export default Post;