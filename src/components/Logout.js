import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {

    const navigate = useNavigate();

    const logout = () => {
        signOut(auth).then(()=>{
            localStorage.clear();
            setIsAuth(false);
            navigate('/login');
        })
    }


    return (
        <>
            <p>ログアウトする</p>
            <button onClick={logout}>
                ログアウト
            </button>
        </>
    )
}

export default Logout;