import "./CreatePost.css";
import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = ({isAuth}) => {

    const [postTitle, setPostTitle] = useState("")
    const [postText, setPostText] = useState("")

    const navigate = useNavigate();

    const inputPostTitle = (e) => {
        return setPostTitle(e.target.value);
    }

    const inputPostText = (e) => {
        return setPostText(e.target.value);
    }

    const createPost = async () => {
        await addDoc(collection(db, "posts"), {
            title: postTitle,
            post: postText,
            author: {
                username: auth.currentUser.displayName,
                id: auth.currentUser.uid
            }
        })
        setPostTitle("");
        setPostText("");

        navigate("/");
    }

    useEffect(()=>{
        if(!isAuth){
            navigate("/");
        }
    },[])


    return (
        <div className="createPostPage">
            <div className="postContainer">
                <h1>記事を投稿する</h1>
                <div className="inputPost">
                    <h2>タイトル</h2>
                    <input type="text" value={postTitle} placeholder="タイトルを記入" onChange={inputPostTitle} />
                </div>
                <div className="inputPost">
                    <h2>投稿内容</h2>
                    <textarea  value={postText} placeholder="投稿内容を記入" onChange={inputPostText}></textarea>
                </div>
                <button className="postButton" onClick={createPost}>投稿する</button>
            </div>
        </div>
    )
}

export default CreatePost;