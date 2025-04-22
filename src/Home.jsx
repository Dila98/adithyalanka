import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const slides = [
    {
      id: 1,
      image: "/images/construction1.jpg",
      alt: "Modern construction",
      title: "Architectural Excellence",
      subtitle: "Redefining Urban Landscapes",
    },
    {
      id: 2,
      image: "/images/construction2.jpg",
      alt: "Construction team",
      title: "Sustainable Practices",
      subtitle: "Building for the Future",
    },
    {
      id: 3,
      image: "/images/construction3.jpg",
      alt: "Completed project",
      title: "Timely Delivery",
      subtitle: "Meeting International Standards",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div className="home-page">
      {/* Hero Slider Section */}
      <section className="hero-section">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-overlay"></div>
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-subtitle">{slide.subtitle}</p>
                <div className="hero-buttons">
                  <Link to="/portfolio" className="btn-primary">
                    View Our Projects
                  </Link>
                  <Link to="/contact" className="btn-outline">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="section-header">
            <h2>WELCOME TO OUR COMPANY</h2>
            <div className="welcome-content">
              <p>
                Welcome to Aadithya Lanka Pvt Ltd, where innovation meets
                craftsmanship in the world of construction. Established with a
                vision to redefine urban landscapes, we specialize in delivering
                complex projects consisting of Villas, Residential/Commercial
                Buildings, large banquet halls, and hotels that blend
                architectural excellence with sustainable building practices.
              </p>
              <p>
                Our commitment to quality, safety, and client satisfaction sets
                us apart as a trusted partner in turning visions into reality.
                With a dedicated team of industry experts and a portfolio of
                successful ventures, we strive to exceed expectations in every
                endeavor. Join us as we build the future, one foundation at a
                time.
              </p>
              <p>
                We are focused on delivering all range of building projects with
                customer satisfaction. Our focus is to deliver the projects on
                time with international standards, practicing best construction
                practices. We are committed to sustainable
                development/construction across the country.
              </p>
              <div className="company-logo">
          <img 
            src="/images/logo.png" 
            alt="Aadithya Lanka Pvt Ltd Logo"
            width="200"
            height="auto"
          />
        </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Specializations</h2>
            <p className="section-subtitle">
              Building excellence through diverse construction solutions
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img
                  src="/images/villa.jpg"
                  alt="Villa"
                  loading="lazy"
                />
              </div>
              <h3>Villas</h3>
              <p>
                Custom-designed luxury villas with
                premium finishes
              </p>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img
                  src="/images/commercial.jpg"
                  alt="Commercial Buildings"
                  loading="lazy"
                />
              </div>
              <h3>Residential & Commercial Buildings</h3>
              <p>
                Modern office spaces, Residentials and commercial complexes designed for
                functionality
              </p>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img
                  src="/images/hotel.jpg"
                  alt="Hotels"
                  loading="lazy"
                />
              </div>
              <h3>Hotels & Banquet Halls</h3>
              <p>
                Grand hospitality spaces with exquisite designs and premium
                amenities
              </p>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img
                  src="/images/sustainable.jpg"
                  alt="Sustainable Construction"
                  loading="lazy"
                />
              </div>
              <h3>Sustainable Construction</h3>
              <p>
                Eco-friendly building solutions with green technologies and
                materials
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
