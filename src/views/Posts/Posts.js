import React from 'react';
import blogData from './../../utils/blogs-data.json';
import PreviewPostCard from './../PreviewPostCard/PreviewPostCard';

function Posts(){
    return(
        <>
        <h1>Posts</h1>
        {
            blogData.map((post, index)=>{
                return <PreviewPostCard key={index} id={post.id} title={post.title} description={post.description} content={post.content} author={post.author} publishedDate={post.publishedDate} />
            })
        }
        </>
    )
}
export default Posts;