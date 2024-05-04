import './Tasks.css'
import {Link} from 'react-router-dom'
import { dummyData } from '../../data'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import ClientTask from '../../component/navbar/ClientTask'

export const Tasks = () => {
  console.log(dummyData);

  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  useEffect(()=>{
    if(!token){
      toast.error("unauthorized, please sign in")
      navigate("/")
    }
  })
  return (
    <>
    <ClientTask/>
    
    </>
  )
}

