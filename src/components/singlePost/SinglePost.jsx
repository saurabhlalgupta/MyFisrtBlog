import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/4312244/pexels-photo-4312244.jpeg?cs=srgb&dl=pexels-clive-kim-4312244.jpg&fm=jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolar sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:<b>Safak</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                Mohenjo-daro was abandoned in the 19th century BCE as the Indus 
                Valley Civilization declined, and the site was not rediscovered until 
                the 1920s.Significant excavation has since been conducted at the site of t
                he city, which was designated a world heritage center.
                Mohenjo-daro was abandoned in the 19th century BCE as the Indus 
                Valley Civilization declined, and the site was not rediscovered until 
                the 1920s.Significant excavation has since been conducted at the site of t
                he city, which was designated a world heritage center.
                Mohenjo-daro was abandoned in the 19th century BCE as the Indus 
                Valley Civilization declined, and the site was not rediscovered until 
                the 1920s.Significant excavation has since been conducted at the site of t
                he city, which was designated a world heritage center.
                Mohenjo-daro was abandoned in the 19th century BCE as the Indus 
                Valley Civilization declined, and the site was not rediscovered until 
                the 1920s.Significant excavation has since been conducted at the site of t
                he city, which was designated a world heritage center.
                </p>
            </div>
        </div>
    )
}
