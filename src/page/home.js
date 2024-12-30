import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import MenuBar from "../component/menubar/menubar";
import image1 from "../image/image1.jpg"
import image2 from "../image/image2.jpg";
import video from "../image/video.jpg";
import phone from "../image/phone.png";
import chat from "../image/chat.png";
import "../component/styles.css";
import { Link } from "react-router-dom";
import SearchCounsellor from "../page/search_counsellor";

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentImage((prev) => (prev === 0 ? 1 : 0));
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [isTransitioning]);

  useEffect(() => {
    if (isTransitioning) {
      const transitionTimeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);

      return () => clearTimeout(transitionTimeout);
    }
  }, [isTransitioning]);

//   const handleSearchCounsellorButton = () => {
//     navigate('/search-counsellor');
//   };

  return (
    
    <>
      <MenuBar />
      <div className="container">
        <div className="wrapper">
          <div className={`image-container ${currentImage === 0 ? "fade-in" : ""}`}>
            <img src={image1} alt="Image 1" />
          </div>
          <div className={`image-container ${currentImage === 1 ? "fade-in" : ""}`}>
            <img src={image2} alt="Image 2" />
          </div>
        </div>
        <div className="text-container">
          <div className="text-box">
            <h2>Your Journey to Better Connections Starts Here</h2>
            <p>
              Whether you're seeking a counselor to guide you through life's challenges or you're a professional looking to expand your practice, you've come to the right place.
              <br /><br />
              Explore a platform that bridges the gap between skilled counselors and individuals in need, fostering growth, understanding, and well-being.
              <br /><br />
              <span className="highlight">Join us today to make meaningful connections that matter.</span>
            </p>
          </div>
        </div>
      </div>

      <section className="why-us-section">
        <h2>Why Choose Us?</h2>
        <div className="why-us-grid">
          <div className="card">
            <div className="icon">
              <i className="fas fa-star"></i>
            </div>
            <h3>Quality Service</h3>
            <p>We provide top-notch services tailored to your needs.</p>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Expert Team</h3>
            <p>Our team consists of professionals with years of experience.</p>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fas fa-smile"></i>
            </div>
            <h3>Customer Satisfaction</h3>
            <p>We prioritize customer happiness and build long-term relationships.</p>
          </div>
        </div>
      </section>

      <div className="counseling-types">
        <h2>Flexible Counseling Options for Counselling Seekers and Counselors</h2>
        <p>
          For counselling seekers, connect with experienced counselors in the way that suits you best.
          For counselors, grow your practice by offering flexible services that meet your clients’ needs.
        </p>

        <div className="counseling-options">
          <div className="counseling-option">
            <img src={chat} alt="Online Chat" />
            <h3>Online Chat</h3>
            <p>Clients: Engage in private and secure text-based sessions.<br />
              Counselors: Offer seamless chat-based support.</p>
            <button>Explore Chat</button>
          </div>

          <div className="counseling-option">
            <img src={phone} alt="Voice Call" />
            <h3>Voice Call</h3>
            <p>Clients: Speak directly with a counselor for real-time advice.<br />
              Counselors: Provide personalized audio sessions.</p>
            <button>Explore Voice Call</button>
          </div>

          <div className="counseling-option">
            <img src={video} alt="Video Call" />
            <h3>Video Call</h3>
            <p>Clients: Experience face-to-face interactions online.<br />
              Counselors: Connect with clients through professional video consultations.</p>
            <button>Explore Video Call</button>
          </div>
        </div>
      </div>

      <section className="lets-start">
        <div className="content">
          <h2>Let’s Start Today!</h2>
          <p>
            Take the first step towards connecting with the best counselors or expanding your professional reach.
            <span className="highlight">Your journey starts here.</span>
          </p>
          <div className="cta-buttons">
            <button className="primary-btn">Register as a Counselor on</button>
           <Link to="/search_counsellor">
            <button className="secondary-btn">Search for a Counselor</button>
            </Link>
          </div>
        </div>
        
      </section>
      <Routes>
      <Route path="/search_counsellor" element={<SearchCounsellor />} />
      </Routes>

      
    </>
  );
}

export default Home;
