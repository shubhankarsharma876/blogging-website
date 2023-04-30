import React, { useEffect, useState } from 'react';
import {collection, getDocs,deleteDoc,doc} from 'firebase/firestore'
import { db,auth } from '../firebase-config';

function Home() {

  const [postLists,setPostLists] =useState([]);
  const postCollectionRef = collection(db,"posts");
  useEffect(()=>{
    const getPosts = async()=>{
      const data = await getDocs(postCollectionRef);
      setPostLists(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    }
    getPosts();
  },[])

  // const deletePost = async()=>{
  //   const postDoc = doc(db,"posts",)
  //   await deleteDoc()
  // }
  return (
    <div className='homePage'>{postLists.map((post)=>{
      console.log({post});
      return (<div className='post'>
        <div className='"postHeader'>
          <div className='title'>
            <h1>{post.title}</h1>
          </div>
          {/* <div className='deletePost'>
            <button onClick={()=>{deletePost(post.id)}}>&#123465;</button>
          </div> */}
        </div>
        <div className='postTextContainer'>
          {post.postText}
          
          
        </div>
        <h3>@{post.author.name}</h3>
      </div>
      )
    })}</div>
  )
}

export default Home