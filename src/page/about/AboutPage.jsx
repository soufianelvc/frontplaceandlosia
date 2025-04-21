
import './About.css';
import img from '../../../public/AboutPageImage1.png';

import fes from "../../images/09012023045912-900x700-12-room.jpg"
import img2 from "../../images/07012023091827-blog-5.jpg"
import img3 from "../../images/10012023084447-900x700-Rectangle 4-2.jpg"
import { useSelector } from 'react-redux';
const AboutPage = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className="about-container-xyz123">
      <header className="hero-section-xyz123">
        <img src={img} alt="Al-Andalus Hotel" className="hero-image-xyz123 "/>
        <div className="hero-text-xyz123">
          <h1>Welcome to Al-Andalus Hotel</h1>
          <p>Where heritage meets luxury, and every stay becomes an unforgettable memory.</p>
        </div>
      </header>
      
      <section className="content-section-xyz123" style={{ backgroundColor: darkMode ? '#121212' : '#ffffff', color: darkMode ? '#ffffff' : '#000000' }}>
        <div className="text-content-xyz123">
          <h2>Discover the Ultimate Getaway</h2>
          <p>
            Nestled on the pristine shores of Blue Haven Beach, Al-Andalus Hotel combines luxury and comfort to create a unique experience. Our dedication to exceptional service and elegant surroundings ensures that your stay is as unforgettable as the views.
          </p>
          <p>
            From our luxurious rooms to our world-class amenities, every detail is designed with your utmost comfort in mind. Experience the best of hospitality with Al-Andalus Hotel.
          </p>
        </div>
        <div className="image-gallery-xyz123">
          <img src={fes} alt="Luxurious Room"/>
          <img src={img2} alt="Hotel Lobby"/>
          <img src={img3} alt="Beach View"/>
        </div>
      </section>
      
      <section className="rewards-section-xyz123">
        <h2>Join OceanClub Rewards</h2>
        <p>
          Make your dream vacation more rewarding with our exclusive OceanClub Rewards program. Enjoy special benefits, exclusive offers, and unforgettable experiences tailored just for you.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
