import React,{forwardRef} from 'react'
import "./App.css"
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';

const Post = forwardRef(({ name, description, message, photoUrl },ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl} />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="feed__inputOptions">
                <span>
                    <ThumbUpAltOutlinedIcon />
                    <h4>Like</h4>
                </span>
                <span>
                    <ShareOutlinedIcon />
                    <h4>Share</h4>
                </span>
                <span>
                    <CommentOutlinedIcon />
                    <h4>Comment</h4>
                </span>
            </div>
        </div>
    )
})

export default Post
