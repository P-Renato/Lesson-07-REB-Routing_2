import { useNavigate } from "react-router-dom"
let authorized = false;


export default function Profile() {
    const navigate = useNavigate()

    if(!authorized){
        navigate("/")
    }
    return (
        <div>Profile
            <button></button>
        </div>
    )
}