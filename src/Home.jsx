import { Link } from "react-router-dom";

export default function Home() {
    return(
        <>
            <Link to={'/redux'}>Redux</Link>
            <Link to={'/use-reducer'}>useReducer</Link>
        </>
    )
}