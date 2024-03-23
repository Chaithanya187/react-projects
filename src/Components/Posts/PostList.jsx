import { useState } from "react";
import Post from "./Post";

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

const PostList = ()=>{
    const[posts, setPosts] = useState(postData);
    return(
        <div className=" mx-10 mt-5 flex flex-col">
            <div>
                <h2 className=" text-4xl font-bold pb-4 border-b-2 w-full">Latest articles</h2>
            </div>
            <div className=" flex justify-between flex-wrap mt-4">
                {
                    posts.map((post)=>(
                        <Post postData={post} key={post.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default PostList;