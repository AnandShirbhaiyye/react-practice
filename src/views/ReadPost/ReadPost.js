import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import blogData from './../../utils/blogs-data.json';

function ReadPost(){
    const { id } = useParams()

    const [post, setPost] = useState({})

    useEffect(()=>{
        blogData.forEach((postObj)=>{
            if(postObj.id == id){
                setPost(postObj)
            }
        })
    }, [id])
    return(
        <>
        <div>
        <h1>{post.title}</h1>
        <span>By {post.author}</span>
        <p>{post.description}</p>
        <p>{post.content}</p>
        <p>Published On {post.publishedDate}</p>
        </div>
        </>
    )
}
export default ReadPost;