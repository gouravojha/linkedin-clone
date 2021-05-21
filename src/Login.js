import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import "./App.css"
import { login } from './features/userSlice';
import { auth } from './firebase';
function Login() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [pic,setPic] = useState("")
    const dispatch = useDispatch()

    const loginToApp = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth => {
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoURL:-userAuth.user.profileURL,
            }))
        }).catch(error=>alert(error));
    };
    const register = ()=>{
        if(!name){
            return alert("Please enter a Full Name")
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:pic,
            })
            .then(()=>{
                dispatch(
                    login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoURL:pic,
                })
                )
            })
        }).catch(error => alert(error))
    };
    return (
        <div className="login">
            <img
                src="https://www.pngarea.com/pngm/103/1119896_linkedin-logo-png-png-linkedin-transparent-png-png.png"
                alt="linkedin logo"
            />
            <form>
                <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name (required if registering)" type="text"/>
                <input value={pic} onChange={e=>setPic(e.target.value)} placeholder="Profile picture (URL)" type="text"/>
                <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email"/>
                <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password"/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member ?
               <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
