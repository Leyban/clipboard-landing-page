import { image } from "../images/image"
import { DownloadButtons } from "./DownloadButtons"

export const Introduction:React.FC = () => {
    return (
        <div className="introduction">
            <div className="background-image desktop"><img src={image.bgHeaderDesktop} alt="background" /></div>
            <div className="background-image mobile"><img src={image.bhHeaderMobile} alt="background" /></div>
            <div className="intro-messages">
                <img src={image.logo} alt="product logo" />
                <h1>A history of everything you copy</h1>
                <p>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
            </div>
            <DownloadButtons />
        </div>
    )
}