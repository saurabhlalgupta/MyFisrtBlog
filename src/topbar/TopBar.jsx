import "./topbar.css"

export default function Topbar() {
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
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className ="topRight">
            <img 
            className="topImg"
            src="https://images.pexels.com/photos/1906852/pexels-photo-1906852.jpeg?cs=srgb&dl=pexels-alessio-cesario-1906852.jpg&fm=jpg" alt="" /> 
            <i className="topSearchIcon fas fa-search"></i>   
            </div>    
            
        </div>
    )
}
