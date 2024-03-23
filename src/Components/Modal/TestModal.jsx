import { useState } from "react"

const TestModal = ()=>{
    const [show, setShow] = useState(false);
    return (
        <div className=" px-2">
            <button onClick={()=>{
                setShow(!show)
            }} className=" border px-4 py-2 border-black rounded-lg">Show Modal</button>
            <Modal show={show} onClose={()=>{setShow(false)}}/>
        </div>
        
    )
}


const Modal =(props)=>{
    if(!props.show){
        return null
    }
    return (
        <div className="modal fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center cursor-pointer" onClick={props.onClose}>
            <div className="modal-content w-[500px] bg-white" onClick={e=>e.stopPropagation()}>
                <div className=" modal-header m-0 p-5">
                    <h4 className=" font-bold text-lg">Modal title</h4>
                </div>  
                <div className=" modal-body p-5 border border-t border-[#eee]">
                    This is the modal body
                </div>
                <div className=" modal-footer p-5">
                    <button className=" border px-3 py-1 border-black rounded-lg" onClick={props.onClose}>close</button>
                </div>
            </div>
        </div>
    )
}

export default TestModal;