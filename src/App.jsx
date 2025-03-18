import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {


  useEffect(()=>{
    getPosts()
  },[])

  async function getPosts(){
    try{
      const response = await axios.get(`http://localhost:3000/posts`)
      console.log(response)
    }catch(error){
      console.log(error.response.data.message)
    }
  }

  async function newPosts(){
    try{
      const response = await axios.post(`http://localhost:3000/posts`,{
        title: "hey", 
        views: 100
      })

      console.log(response)
    }catch(error){
      console.log(error.response.data.message)
    }
  }

  async function deletePosts() {
    try{
      const response = await axios.delete(`http://localhost:3000/posts/1`);
      console.log(response)
    }catch(error){
      console.log(error.response.data.message)
    }
    
  }

  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={()=>newPosts()}>newPosts</button>
      <button onClick={()=>deletePosts()}>deletePosts</button>
    </>
  )
}

export default App
