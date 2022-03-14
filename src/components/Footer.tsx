import { image } from "../images/image"

export const Footer:React.FC = () => {
    return(
        <div className="footer">
            <img src={image.logo} alt="product logo" className="product-logo"/>
            <div className="links">
                <p>FAQs</p>
                <p>Contact Us</p>
            </div>
            <div className="links">
                <p>Privacy Policy</p>
                <p>Press Kit</p>
            </div>
            <div className="links">
                <p>Install Guide</p>
            </div>
            <div className="social">
                <img src={image.iconFacebook} alt="facebook" />
                <img src={image.iconTwitter} alt="twitter" />
                <img src={image.iconInstagram} alt="instagram" />
            </div>
        </div>
    )
}