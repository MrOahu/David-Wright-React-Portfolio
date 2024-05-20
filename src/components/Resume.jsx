import resume from "../assets/david_wright_resume.pdf"

function Resume(){
    return(
        <div>
            <h3>Check out my <a className="resume-link" href = {resume} download>resume.</a></h3>
                <h1>Front End Topics</h1>

                <ul className="resumelist">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>

                <h1>Back End Topics</h1>
                
                <ul className="resumelist">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                </ul>
        </div>
    )
}
export default Resume