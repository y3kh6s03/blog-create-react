import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import "./Home.scss";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const [postList, setPostList] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            const postsData = await getDocs(collection(db, "posts"));
            setPostList(postsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getPosts();
    }, []);

    const handleDelete = async(id) => {
        await deleteDoc(doc(db, "posts", id))
        navigate("/login")
     }

    return (

        <div className="homePage">
            {postList.map((post) => {
                return (
                    <div key={post.id} className="postContents">
                        <div className="postHeader">
                            <h1>{post.title}</h1>
                        </div>

                        <div className="postTextContainer">
                            <p>{post.post}</p>
                        </div>
                        <div className="nameAndDeleteButton">
                            <h3>{post.author.username}</h3>
                            <button onClick={()=>{handleDelete(post.id)}}>削除</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;