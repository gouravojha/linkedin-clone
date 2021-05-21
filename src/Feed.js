import React,{useEffect, useState} from 'react'
import "./App.css"
import CreateIcon from "@material-ui/icons/Create";
import PhotoSizeSelectActualOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import Post from "./Post";
import { db } from './firebase';
import firebase from "firebase";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from "react-flip-move";
function Feed() {
    const [input,setInput] = useState("");
    const [posts,setPosts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(()=>{
        db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data:doc.data()
                }
            )))
        ))
    },[]);

    const sendPost = (e) =>{
        e.preventDefault();
        db.collection('posts').add({
            name:user.name,
            description:"A new user",
            message: input,
            photoUrl:user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Start a post"/>
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                <span>
                <PhotoSizeSelectActualOutlinedIcon style={{color:"blue"}}/>
                <h4>Photos</h4>
                </span>
                <span >
                <VideoLibraryOutlinedIcon style={{color:"green"}}/>
                <h4>Videos</h4>
                </span>
                <span >
                <EventOutlinedIcon style={{color:"brown"}}/>
                <h4>Events</h4>
                </span>
                <span >
                <AssignmentOutlinedIcon style={{color:"orange"}}/>
                <h4>Write articles</h4>
                </span>
                </div>
            </div>
            <FlipMove>
            {
                posts.map(({id,data:{name,description,message,photoUrl}})=>(
                    <Post
                        key = {id}
                        name = {name}
                        description = {description}
                        message = {message}
                        photoUrl = {photoUrl}
                    />
                ))
            }
            </FlipMove>
            {/* <Post
                name="Mussa"
                description="Nothing"
                message = "This is test message"
            /> */}
        </div>
    )
}

export default Feed 
