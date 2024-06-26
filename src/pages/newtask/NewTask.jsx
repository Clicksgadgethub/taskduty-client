import prev from "../../assets/images/prev.png";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react'

const NewTask = () => {

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [tags,setTags] = useState("");
  const [isClicked, setIsClicked] = useState(false)
  const navigate = useNavigate()

  const taskDetails = {
    title,
    description,
    tags
  }
const token = localStorage.getItem("token")
  const handleSubmit = async(e)=>{
    setIsClicked(true)
    e.preventDefault()
    try {
      const request = await fetch("https://taskduty-server-uc53.onrender.com/api/v1/task",{
        method:"POST",
        headers:{
          "Content-type":"application/json",
          Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(taskDetails)
      })
      const data = await request.json();
      console.log(data);
      if(data.success === false){
        toast.error(data.message)
      }

      if(data.success){
        toast.success(data.message)
        navigate("/alltask")
      }

    } catch (error) {
      console.log(error);
    }finally{
      setIsClicked(false)
    }

  }

  const btnText = isClicked ? "Loading..." : "Done"
  return (
    <div className="container py-3">
      <div className="py-3 d-flex align-items-center gap-4">
        <span>
          {" "}
          <img src={prev} alt="" />
        </span>
        <h1>New Task</h1>
      </div>

      <div className="py-4">
        <form className="d-flex flex-column gap-5 text-start">
          <div>
            <label
              className="position-absolute translate-middle-y z-3 p-2 bg-light ms-3 bg-white  "
              htmlFor=""
            >
              Task Title
            </label>
            <input
              className="w-100 rounded-1 border border-secondary px-4 py-3"
              type="text"
              placeholder=""
              value = {title}
              onChange={(e)=> setTitle(e.target.value)}
            />
          </div>

          <div className="d-flex flex-column">
            <label
              className="position-absolute translate-middle-y p-2 z-3 bg-light ms-3 bg-white "
              htmlFor=""
            >
              Description
            </label>
            <textarea
              className="w-100 rounded-1 border border-secondary px-4 py-3"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder=""
              value = {description}
              onChange={(e)=> setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className='d-flex flex-column'>
            {/* <label className='position-absolute translate-middle-y p-2 z-3 bg-white ms-3' 
            htmlFor="">Tags</label>
           <input className='w-100 rounded-1 border border-secondary px-4 py-3' type="text"/> */}
          <label htmlFor="" className='position-absolute translate-middle-y p-2 z-3 bg-white ms-3'>Tags</label>
           <select name="" id="" className='w-100 rounded-1 border border-secondary px-4 py-3' 
           onChange={(e)=>setTags(e.target.value)}
           >
            <option value="" className='text-secondary' default>select a tag</option>
            <option value="important">important</option>
            <option value="urgent">urgent</option>
           </select>
           </div>

          <button className=" btn btn-primary  " onClick = {handleSubmit} disabled ={isClicked}> {btnText} </button>

          <div className="d-flex justify-content-center py-4 ">
            <a href="#top" className="text-center text-decoration-underline ">
              {" "}
              Back To Top
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
