import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img src="https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?cs=srgb&dl=pexels-johannes-plenio-2850287.jpg&fm=jpg" alt="" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="fas fa-plus-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style ={{display:"none"}}/>
                    <input type="text" placeholder="Tilte" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
