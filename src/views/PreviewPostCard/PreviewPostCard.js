import React from 'react';
import { Link } from 'react-router-dom';
import './PreviewPostCard.css';

function PreviewPostCard({id, title, author, description}){
    return(
        <>
        <div className='preview-post-card'>
        <h2>{title}</h2>
        <span>By{author}</span>
        <p>{description}</p>
        <Link to={`/post/read/${id}`}>Read More</Link>
        </div>
        </>
    )
}
export default PreviewPostCard;