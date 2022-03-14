import { image } from "../images/image"

export const Features:React.FC = () => {
    return (
        <div className="features">
            <div className="keep-track">
                <h2>Keep track of your snippets</h2>
                <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
            </div>
            <div className="bullet-points">
                <img src={image.imageComputer} alt="mac monitor with a check" />
                <div className="text">
                    <div className="bullet">
                        <h3>Quick Search</h3>
                        <p>Easily search your snippets by content, category, web address, application, and more.</p>
                    </div>
                    <div className="bullet">
                        <h3>iCloud Sync</h3>
                        <p>Instantly saves and syncs snippets across all your devices.</p>
                    </div>
                    <div className="bullet">
                        <h3>Complete History</h3>
                        <p>Retrieve any snippets from the first moment you started using the app.</p>
                    </div>
                </div>
            </div>
            <div className="access">
                <h1> Access Clipboard Anywhere</h1>
                <p>Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
            </div>
            <div className="all-devices">
                <img src={image.imageDevices} alt="phone and tablet with a check" />
            </div>
            <div className="supercharge">
                <h1>Supercharge your workflow</h1>
                <p>We've got the tools to boost your productivity</p>
                <div className="cards">
                    <div className="card">
                        <div className="icon-container">
                            <img src={image.iconBlacklist} alt="list" />
                        </div>
                        <h3>Create blacklists</h3>
                        <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                    </div>
                    <div className="card">
                        <div className="icon-container">
                            <img src={image.iconText} alt="text" />
                        </div>
                        <h3>Plain text snippets</h3>
                        <p>Remove unwanted formatting from copied text for a consistent look.</p>
                    </div>
                    <div className="card">
                        <div className="icon-container">
                            <img src={image.iconPreview} alt="eye" />
                        </div>
                        <h3>Sneak preview</h3>
                        <p>Quick preview of all snippets on your Clipboard for easy access.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}