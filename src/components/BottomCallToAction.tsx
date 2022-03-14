import {DownloadButtons} from './DownloadButtons';

export const BottomCallToAction:React.FC = () => {
    return(
        <div className="call-to-action">
            <h1>Clipboard for iOS and Mac OS</h1>
            <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</p>
            <DownloadButtons />
        </div>
    )
}