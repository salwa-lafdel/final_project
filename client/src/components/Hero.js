
import HeroImage from '../images/logo.png';

const Hero = () => {
    return (
        <section className="hero-section">
            
            <img src={HeroImage} alt='people cookin' className="hero-img"/>
            
            <div className='description'>
                <div>
                    <h1 className='hero-title'>Restaurant_Finder</h1>
                    <p>Welcome to Restaurant_Finder, your go-to destination for finding and saving incredible recipes.</p>
                </div>
            </div>
        </section>
        
    )
}

export default Hero;