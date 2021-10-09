import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                 <span className="sidebarTitle">
                  ABOUT ME   
                 </span>
                 <img className ="sidebarImg" src="https://images.pexels.com/photos/4995761/pexels-photo-4995761.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-4995761.jpg&fm=jpg" alt="" />
                 <p>
                     Loren ipsum dolar sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.
                 </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
