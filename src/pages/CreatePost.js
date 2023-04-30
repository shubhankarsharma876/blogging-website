import React, { useState,useEffect } from 'react'
// we are importing addDoc to put the data of post in the fireStore using createPost
import {addDoc,collection} from 'firebase/firestore'
import { db,auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function CreatePost({isAuth}) {
  let navigate = useNavigate();
  const [title,setTitle]= useState("");
    const [postText,setPostText]= useState("");
    // the below postCollectionRef is difining the db and the table posts
    const postsCollectionRef = collection(db,"posts")
    const createPost = async()=>{
// below we are adding the data to the table
      await addDoc(postsCollectionRef, {title,
        postText,
        author:{name:auth.currentUser.displayName ,id:auth.currentUser.uid}})

        navigate('/');
    };

    useEffect(()=>{
      if (!isAuth){
        navigate("/login");
      }
    },[]);
  return (

    
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create A Post</h1>
        <div className='inputGp'>
        <label>Title:</label>
        <input placeholder='Title...' onChange={(event)=>{
            setTitle(event.target.value)
        }}/>
        </div>
        <div className='inputGp'>
          <label>Post:</label>
          <textarea placeholder='Post...' onChange={(event)=>{
            setPostText(event.target.value)
        }}/>

        </div>

        <button onClick={createPost}>Submit Post</button>

      </div>
    </div>
  )
}

export default CreatePost