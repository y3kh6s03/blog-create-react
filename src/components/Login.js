import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({setIsAuth}) => {

    const navigate = useNavigate();

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(
                (result) => {
                    localStorage.setItem("isAuth", true);
                    setIsAuth(true);
                    navigate("/");
                }
            )
    }


    return (
        <>
            <p>ログインをして始める</p>
            <button onClick={loginWithGoogle}>
                googleでログイン
            </button>
        </>
    )
}

export default Login;