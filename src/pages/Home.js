import { useState, useRef, useEffect } from 'react';
import { useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import hero1 from '../assets/images/hero1.png';
import hero2 from '../assets/images/hero2.png';
import hero3 from '../assets/images/hero3.png';
import hero4 from '../assets/images/hero4.png';
import phone from '../assets/images/phone.png';
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';
import icon4 from '../assets/images/icon4.png';
import icon5 from '../assets/images/icon5.png';
import icon6 from '../assets/images/icon6.png';
import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
// ... import all needed icons/images

function Home() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const dotsRef = useRef([]);
    const intervalRef = useRef(null);
    const totalSlides = 4; // update if more slides

    // Update carousel position
    const updateCarousel = useCallback(() => {
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
      dotsRef.current.forEach((dot, index) => {
        if (dot) dot.classList.toggle('active', index === currentIndex);
      });
    }, [currentIndex, carouselRef, dotsRef]);

    // Move next/prev
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    // Auto slide
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 3000);
    };

    const stopAutoSlide = () => {
      clearInterval(intervalRef.current);
    };

    // Scroll effects
    useEffect(() => {
      updateCarousel();
    }, [updateCarousel]);


    useEffect(() => {
      startAutoSlide();
      return () => stopAutoSlide();
    }, []);

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false, // 👈 ensures animation runs every time the element is visible (down + up)
      });
    }, []);


  return (
    <>
      <Navbar />
      {/* Carousel Section */}
      <main className="page-content">
      <div className="carousel-container" data-aos="fade-down">
        <div className="carousel" ref={carouselRef}>
          <div className="carousel-slide">
            <div className="slide-content">
              <div className="slide-text" data-aos="fade-left">
                <h1>TRACK YOUR<br />MONEY<br />EFFORTLESSLY</h1>
                <button className="carousel-btn" onClick={() => window.location.href = '/signup'}>SIGN UP</button>
              </div>
              <div className="slide-image" data-aos="fade-left">
                <img src={hero1} alt="Track money" />
              </div>
            </div>
          </div>
            <div className="carousel-slide">
                <div className="slide-content">
                    <div className="slide-text" data-aos="fade-left">
                        <h1>Real-time analytics and personal insight.</h1>
                        <button className="carousel-btn" onClick={() => window.location.href = '/signup'}>START NOW</button>
                    </div>
                    <div className="slide-image" data-aos="fade-left">
                        <img src={hero2}  alt="Analytics illustration"/>
                    </div>
                </div>
            </div>
            <div className="carousel-slide">
                <div className="slide-content">
                    <div className="slide-text" data-aos="fade-left">
                    <h1>Be smart, be debt free! Build better habits.</h1>
                    <button className="carousel-btn" onClick={() => window.location.href = '/signup'}>JOIN US NOW</button>
                    </div>
                    <div className="slide-image" data-aos="fade-left">
                        <img src={hero3}  alt="Debt-free illustration"/>
                    </div>
                </div>
            </div>
            <div className="carousel-slide">
                <div className="slide-content">
                    <div className="slide-image" data-aos="fade-left">
                        <img src={hero4} alt="Privacy illustration"/>
                    </div>
                    <div className="slide-text" data-aos="fade-left">
                        <h1>Privacy controls keep your financial data protected.</h1>
                        <button className="carousel-btn" onClick={() => window.location.href = '/signup'}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Carousel controls */}
        <button
          className="prev-btn"
          onClick={() => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
          }}
        >
          ❮
        </button>

        <button
          className="next-btn"
          onClick={() => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
          }}
        >
          ❯
        </button>


      <div className="dots-container">
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      </div>

      {/* Features Section */}
      <section className="features-section" data-aos="fade-up">
        <div className="features-container">
          <div className="phone-container">
            <div className="circle-bg"></div>
            <div className="smartphone" data-aos="zoom-in">
              <img src={phone} alt="Smartphone" />
            </div>
            <div className="icons-wrapper">
                <div className="icon icon-sync">
                    <img src={icon5} alt="Automatic Sync"/>
                    <div className="text-label">
                        <span className="highlight">AUTOMATIC SYNC</span><br/>
                        <span className="lower-text">Sync payments</span>
                    </div>
                </div>
              <div className="icon icon-alert">
                <img src={icon1} alt="Alert" />
                <div className="text-label">
                  <span className="highlight">AI ALERTS</span><br />
                  <span className="lower-text">Overspending tips</span>
                </div>
              </div>
                <div className="icon icon-report">
                    <img src={icon2} alt="Dashboards & Reports"/>
                    <div className="text-label">
                        <span className="highlight">DASHBOARDS & REPORTS</span><br/>
                        <span className="lower-text">Category breakdown spending</span>
                    </div>
                </div>
                <div className="icon icon-budget">
                    <img src={icon3} alt="Budget Tracking"/>
                    <div className="text-label">
                        <span className="highlight">BUDGET & LOAN TRACKING</span><br/>
                        <span className="lower-text">Track Budget and emis</span>
                    </div>
                </div>
                <div className="icon icon-transaction">
                    <img src={icon4} alt="Transaction Tracking"/>
                    <div className="text-label">
                        <span className="highlight">MANUAL & AUTOMATIC TRANSACTION TRACKING</span><br/>
                        <span className="lower-text">Automatic sync transaction</span>
                    </div>
                </div>
                <div className="icon icon-cloud">
                    <img src={icon6} alt="Data Export & Cloud"/>
                    <div className="text-label">
                        <span className="highlight">DATA EXPORT & CLOUD STORAGE</span><br/>
                        <span className="lower-text">Store and export the data</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="finance-simplified-section" data-aos="fade-up">
              <div className="section">
                  <h1>Navigate the world of finance with ease and speed.</h1>
                  <p>This website offers a straightforward approach to understanding your money.</p>
                  <p>Experience finance, simplified and delivered effortlessly.</p>
              </div>
              <div className="cards-container">
                  <div className="card" data-aos="zoom-in">
                      <div className="card-image">
                          <img src={card1}alt="Spending patterns illustration"/>
                      </div>
                      <div className="card-text" data-aos="fade-right">
                          <p>Helps you understand spending patterns and improve decision-making.</p>
                      </div>
                  </div>
                  <div className="card" data-aos="zoom-in">
                      <div className="card-image">
                          <img src={card2} alt="Savings goals illustration"/>
                      </div>
                      <div className="card-text" data-aos="fade-right">
                          <p>Set savings or investment goals, and track progress.</p>
                          <span className="lock-icon">🔒</span>
                      </div>
                  </div>
              </div>
      </section>

      {/* Footer */}
      <div data-aos="fade-up">
        <Footer />
      </div>

      <div className="copyright">© 2025 Finance Tracker Company ALL RIGHTS RESERVED</div>
    </main>
    </>
  );
}

export default Home;
