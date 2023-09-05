import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <nav className="menu">
            <Link to="/">HOME</Link>
            <span> - </span>
            <Link to="/produtos">PRODUTOS</Link>
        </nav>
    )
}