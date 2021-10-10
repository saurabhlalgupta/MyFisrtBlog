
import { Link } from "react-router-dom";

import "./topbar.css"

export default function Topbar() {
    const user = true;
    return (
        <div className = "top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest"></i>
                <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className ="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className = "link" to="/">HOME</Link></li>
                    <li className="topListItem"><Link className = "link" to="/about">ABOUT</Link></li>
                    <li className="topListItem"><Link className = "link" to="/contact">CONTACT</Link></li>
                    <li className="topListItem"><Link className = "link" to="/write">WRITE</Link></li>
                    <li className="topListItem">{user && "LOGOUT" }</li>
                </ul>
            </div>
            <div className ="topRight">
            {
                user ?(
                    <img 
                        className="topImg"
                        src="https://images.pexels.com/photos/1906852/pexels-photo-1906852.jpeg?cs=srgb&dl=pexels-alessio-cesario-1906852.jpg&fm=jpg" alt="" /> 
                ):(
                    <ul className="topList">
                        <li className ="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className ="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
            <i className="topSearchIcon fas fa-search"></i>   
            </div>    
            
        </div>
    )
}
