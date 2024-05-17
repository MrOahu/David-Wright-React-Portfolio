import githubLogo from "../assets/github_logo.png"
import linkedinLogo from "../assets/linkedin_logo.png"
import twitterxLogo from "../assets/twitterx_logo.png"
function Footer(){
    return(
        <div className="footer">
            <a href="https://github.com/MrOahu"><img className="footer-logo" src={githubLogo} /></a>
            <a href="https://www.linkedin.com/in/david-wright-305/"><img className="footer-logo" src={linkedinLogo} /></a>
            <a href="https://twitter.com/MetalheadMystic"><img className="footer-logo" src={twitterxLogo} /></a>
            {/* <h1>LinkedIn: https://www.linkedin.com/in/david-wright-305/</h1>
            <h1>X/Twitter: https://twitter.com/MetalheadMystic</h1> */}
        </div>
    )
}
export default Footer