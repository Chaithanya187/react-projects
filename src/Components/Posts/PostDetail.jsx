import { useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";


const postData = [
    {
        id:1,
        image_url:"https://imgs.search.brave.com/qr4ME1uC8tcUjHnl6W9CVCZr6VHyC6-JJVxbB4WYTYU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQzLzYw/L2ZmLzQzNjBmZmRi/NTE0ZmIzMGVlOGY3/MWNjYjBhZWNlODc1/LmpwZw",
        title:"Check the blog",
        description: "blog related to data",
        

    },
    {
        id:2,
        image_url:"https://imgs.search.brave.com/qr4ME1uC8tcUjHnl6W9CVCZr6VHyC6-JJVxbB4WYTYU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQzLzYw/L2ZmLzQzNjBmZmRi/NTE0ZmIzMGVlOGY3/MWNjYjBhZWNlODc1/LmpwZw",
        title:"Check the blog",
        description: "blog related to data",
        

    },
    {
        id:3,
        image_url:"https://imgs.search.brave.com/qr4ME1uC8tcUjHnl6W9CVCZr6VHyC6-JJVxbB4WYTYU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQzLzYw/L2ZmLzQzNjBmZmRi/NTE0ZmIzMGVlOGY3/MWNjYjBhZWNlODc1/LmpwZw",
        title:"Check the blog",
        description: "blog related to data",
        

    },
    {
        id:6,
        image_url:"https://imgs.search.brave.com/qr4ME1uC8tcUjHnl6W9CVCZr6VHyC6-JJVxbB4WYTYU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQzLzYw/L2ZmLzQzNjBmZmRi/NTE0ZmIzMGVlOGY3/MWNjYjBhZWNlODc1/LmpwZw",
        title:"Check the blog",
        description: "blog related to data",
        

    },
    {
        id:4,
        image_url:"https://imgs.search.brave.com/qr4ME1uC8tcUjHnl6W9CVCZr6VHyC6-JJVxbB4WYTYU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQzLzYw/L2ZmLzQzNjBmZmRi/NTE0ZmIzMGVlOGY3/MWNjYjBhZWNlODc1/LmpwZw",
        title:"Check the blog",
        description: "blog related to data",
        

    },
    {
        id:5,
        image_url:"https://imgs.search.brave.com/qr4ME1uC8tcUjHnl6W9CVCZr6VHyC6-JJVxbB4WYTYU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQzLzYw/L2ZmLzQzNjBmZmRi/NTE0ZmIzMGVlOGY3/MWNjYjBhZWNlODc1/LmpwZw",
        title:"Check the blog",
        description: "blog related to data",
        

    }
]


const PostDetail = ()=>{
    const {postId} = useParams();
    const postDetail = postData.filter(post=>post.id===parseInt(postId));
    console.log(postData)
    const [post, setPost] = useState(postDetail);
    console.log(post)
    const navigate = useNavigate();
    return (
        <div>
            <IoMdArrowBack  onClick={()=>navigate('/')} className=" text-xl font-bold m-4"/>
            <h3 className=" text-4xl font-bold m-4">{post[0]?.title}</h3>
            <div className=" flex justify-start gap-10 p-4">
                <div>
                    <img src={post[0]?.image_url} alt="checking image"/>
                </div>
                <div>
                <p>{post[0]?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default PostDetail;