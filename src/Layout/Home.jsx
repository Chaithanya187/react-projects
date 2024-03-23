import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import PostList from "../Components/Posts/PostList"

const Home = ()=>{
    return(
        <>
            <Header/>
            <PostList/>
            <Footer/>
        </>
    )
}

export default Home;