import { useState } from "react";
import { IoMdClose } from "react-icons/io";
const AddPost = (props)=>{
    const [formData, setFormData] = useState({
        title:'',
        url:'',
        description:''
    })
    const {title, url, description} = formData;
    if(!props.show){
        return null
    }
    const formChangeHandler =(e)=>{
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value  
        }));

    }
    const formSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(formData);


    }
    return(
        <div className=" fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={props.onClose}>
            <div className=" w-[500px] bg-white relative" onClick={e=>e.stopPropagation()}>
                <div className=" p-4">
                <IoMdClose  className=" absolute right-4 text-lg cursor-pointer" onClick={props.onClose}/>
                </div>
                
                <div>
                    <h4 className=" text-3xl font-bold text-center">Add new post</h4>
                </div>
                <div className=" p-10 flex flex-col">
                    <form onSubmit={formSubmitHandler}>
                        <div className=" flex flex-col pb-3">
                            <label className=" font-medium pb-2">Blog Title</label>
                            <input type='text' name="title" value={title} className=" border rounded-md outline-2 px-4 py-2" onChange={formChangeHandler}/>

                        </div>
                        <div className=" flex flex-col pb-3">
                            <label className=" font-medium pb-2">Image URL</label>
                            <input type="url" name='url' value={url} className=" border rounded-md outline-2 px-4 py-2" onChange={formChangeHandler}/>
                        </div>
                        <div className=" flex flex-col pb-5">
                            <label className=" font-medium pb-2">Description</label>
                            <textarea name="description" type='text' value={description} placeholder="I know writing can be tough, Just type blah blah blah to test things out!"className=" border rounded-md outline-2 p-1 pb-10 px-4 py-2" onChange={formChangeHandler}/>
                        </div>
                        <div>
                            <button className=" bg-blue-600 px-4 py-2 w-full text-white text-center rounded-md" type="submit">
                                Hit the Big Blue Button! POST
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default AddPost;