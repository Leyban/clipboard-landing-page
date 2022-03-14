import { image } from "../images/image"

export const CompanyLogos:React.FC = () => {
    return(
        <div className="comapny-logos">
            <img src={ image.logoGoogle } alt="Google" />
            <img src={ image.logoIBM } alt="IBM" />
            <img src={ image.logoMicrosoft } alt="Microsoft" />
            <img src={ image.logoHP } alt="Hewlett Packard " />
            <img src={ image.logoVectorGraphics } alt="Vector Graphics" />
        </div>
    )
}