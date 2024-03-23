const DeletePost = (props)=>{
    if (!props.show){
        return null
    }
    return(
        <div className="modal fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center cursor-pointer" onClick={props.onClose}>
            <div className="modal-content w-[500px] bg-white" onClick={e=>e.stopPropagation()}>
                <div className=" modal-header m-0 p-5">
                    <h4 className=" font-bold text-lg">Post Delete</h4>
                </div>  
                <div className=" modal-body p-5 border border-t border-[#eee]">
                    Do you want to delete the post?
                </div>
                <div className=" modal-footer p-5 flex justify-end gap-3">
                    <button className=" border px-3 py-1 border-black rounded-lg"  onClick={props.onClose}>Cancel</button>
                    <button className=" border px-3 py-1 border-black rounded-lg bg-red-600 text-white" onClick={props.onClose}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeletePost;