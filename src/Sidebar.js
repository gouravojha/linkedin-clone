import React from 'react'
import "./App.css"
import { Avatar } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span classsName="sidebar__hash">
              <p># {topic}</p>
            </span>
        </div>
    );


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <Avatar src={user.photoURL} className="sidebar__avatar" />
                <h3>{user.name}</h3>
                <h5>{user.email}</h5>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">
                        100
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Views of your post</p>
                    <p className="sidebar__statNumber">
                        300
                    </p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('startups')}
                {recentItem('renewable-energy')}
                {recentItem('btc')}
                {recentItem('machinelearning')}
                {recentItem('python')}
            </div>
        </div>
    )
}

export default Sidebar
