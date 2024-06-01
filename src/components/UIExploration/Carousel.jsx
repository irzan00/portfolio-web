import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === 4 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div className="ui-exploration__carousel d-flex flex-column">
        <div
          id="carouselExampleIndicators"
          className="carousel slide d-flex flex-column"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className={activeIndex === 0 ? "active" : ""}
              aria-current={activeIndex === 0 ? "true" : ""}
              aria-label="Slide 1"
              onClick={() => setActiveIndex(0)}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              className={activeIndex === 1 ? "active" : ""}
              aria-current={activeIndex === 1 ? "true" : ""}
              aria-label="Slide 2"
              onClick={() => setActiveIndex(1)}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              className={activeIndex === 2 ? "active" : ""}
              aria-current={activeIndex === 2 ? "true" : ""}
              aria-label="Slide 3"
              onClick={() => setActiveIndex(2)}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              className={activeIndex === 3 ? "active" : ""}
              aria-current={activeIndex === 3 ? "true" : ""}
              aria-label="Slide 4"
              onClick={() => setActiveIndex(3)}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              className={activeIndex === 4 ? "active" : ""}
              aria-current={activeIndex === 4 ? "true" : ""}
              aria-label="Slide 5"
              onClick={() => setActiveIndex(4)}
            ></button>
          </div>
          <div className="carousel-inner d-fex align-items-center justify-content-center">
            <Link
              to="https://www.behance.net/gallery/199728971/FeedGO-MobileApp"
              target="blank"
              className={`carousel-item ${
                activeIndex === 0 ? "active" : ""
              }`}
            >
              <img
                src="/images/uiexploration/feedgo.png"
                className="image-carousel d-block w-100"
                alt="portfolio"
              />
            </Link>
            <Link
              to="https://www.behance.net/gallery/199754025/Bank-Jago-MobileApp-Redesign"
              target="blank"
              className={`carousel-item ${
                activeIndex === 1 ? "active" : ""
              }`}
            >
              <img
                src="/images/uiexploration/jago.png"
                className="image-carousel d-block w-100"
                alt="portfolio"
              />
            </Link>
            <Link
              to="https://www.behance.net/gallery/199750949/Buddy-MobileApp-ADHD-Assistant"
              target="blank"
              className={`carousel-item ${
                activeIndex === 2 ? "active" : ""
              }`}
            >
              <img
                src="/images/uiexploration/buddy.png"
                className="image-carousel d-block w-100"
                alt="portfolio"
              />
            </Link>
            <Link
              to="https://www.behance.net/gallery/198741419/Oetara-WebApp"
              target="blank"
              className={`carousel-item ${
                activeIndex === 3 ? "active" : ""
              }`}
            >
              <img
                src="/images/uiexploration/oetara.png"
                className="image-carousel d-block w-100"
                alt="portfolio"
              />
            </Link>
            <Link
              to="https://www.behance.net/gallery/199768601/Sehati-Online-Booking-Appointment-(Website)"
              target="blank"
              className={`carousel-item ${
                activeIndex === 4 ? "active" : ""
              }`}
            >
              <img
                src="/images/uiexploration/sehati.png"
                className="image-carousel d-block w-100"
                alt="portfolio"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
