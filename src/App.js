import "./style/app.css";
import LivingRoom from "./assets/living_room.png";
import ImageOne from "./assets/image_1.png";
import ImageTwo from "./assets/image_2.png";
import ImageThree from "./assets/image_3.png";
import ImageFour from "./assets/image_4.png";
import StepOne from "./assets/step_1.svg";
import StepTwo from "./assets/step_2.svg";
import StepThree from "./assets/step_3.svg";
import StepFour from "./assets/step_4.svg";
import Star from "./assets/star.svg";
import { ReactComponent as Heart } from "./assets/heart.svg";
import { ReactComponent as Rose } from "./assets/rose.svg";
import { ReactComponent as Hand } from "./assets/hand.svg";
import { ReactComponent as Location } from "./assets/location.svg";
import PlayStore from "./assets/play_store.svg";
import AppStore from "./assets/app_store.svg";
import { ReactComponent as IPhone } from "./assets/iphone.svg";
import Logo from "./assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faArrowRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [apartments, setApartments] = useState([
    {
      backgroundImage: LivingRoom,
      price: "2,499",
      city: "Dubai",
      guests: "4 guests",
      location: "Spectacular 4 BDR Palm Villa | Beach | Private Pool",
    },
    {
      backgroundImage: LivingRoom,
      price: "2,499",
      city: "Dubai",
      guests: "4 guests",
      location: "Spectacular 4 BDR Palm Villa | Beach | Private Pool",
    },
    {
      backgroundImage: LivingRoom,
      price: "2,499",
      city: "Dubai",
      guests: "4 guests",
      location: "Spectacular 4 BDR Palm Villa | Beach | Private Pool",
    },
    {
      backgroundImage: LivingRoom,
      price: "2,499",
      city: "Dubai",
      guests: "4 guests",
      location: "Spectacular 4 BDR Palm Villa | Beach | Private Pool",
    },
    {
      backgroundImage: LivingRoom,
      price: "2,499",
      city: "Dubai",
      guests: "4 guests",
      location: "Spectacular 4 BDR Palm Villa | Beach | Private Pool",
    },
    {
      backgroundImage: LivingRoom,
      price: "2,499",
      city: "Dubai",
      guests: "4 guests",
      location: "Spectacular 4 BDR Palm Villa | Beach | Private Pool",
    },
    {
      backgroundImage: LivingRoom,
      price: "2,499",
      city: "Dubai",
      guests: "4 guests",
      location: "Spectacular 4 BDR Palm Villa | Beach | Private Pool",
    },
  ]);

  const aptCards = useRef();

  const scrollLeft = () => {
    aptCards.current.scroll({
      top: 0,
      left: aptCards.current.scrollLeft - aptCards.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    aptCards.current.scroll({
      top: 0,
      left: aptCards.current.scrollLeft + aptCards.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const ApartmentCard = (props) => {
    return (
      <div className="apartment-card">
        <div
          className="apt-image"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${props.backgroundImage}`,
            borderRadius: "10px",
            height: "255px",
            display: "flex",
            justifyContent: "flex-end",
            padding: "10px",
          }}
        >
          <div
            style={{
              background: "black",
              borderRadius: "45px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              height: "33px",
            }}
          >
            <span
              style={{
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "15px",
                lineHeight: "18px",
                padding: "0px 15px",
              }}
            >
              from <b>{props.price}</b> / night
            </span>
          </div>
        </div>
        <div className="apt-info"> {props.location} </div>
        <div className="apt-sub-info">
          <span style={{ marginRight: "10px" }}>{props.city}</span>
          <span
            style={{ marginRight: "10px", fontSize: "8px", color: "#C4C4C4" }}
          >
            &#x25CF;
          </span>
          <span>{props.guests}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <section
        style={{
          height: "100vh",
        }}
      >
        <div
          className="mainHeader"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.3) , rgba(0,0,0,.3)), url(${LivingRoom}`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="nav-bar">
            <div className="logo">
              <img src={Logo} alt="logo" width="96px" />
            </div>
            <ul className="nav-btns">
              <li>
                <a href="#help-center" className="help-center">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#contact-us" className="contact-us">
                  Contact Us
                </a>
              </li>
              <li>
                <span>|</span>
              </li>
              <li>
                <div className="profile">
                  <div className="profile-picture">TT</div>
                  <FontAwesomeIcon icon={faAngleDown} />
                  <div className="arrow"></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="main-area">
            <div className="main-text">
              Escape <br />
              the ordinary
            </div>
            <div className="sub-text">
              A new way to stay in your favorite neighbourhoods
              <br /> around the world.
            </div>
          </div>
          <div className="search-bar" style={{ display: "none" }}>
            <div className="search-bar-city">
              <div className="city-header">City</div>
              <div className="city-value">Dubai</div>
            </div>
            <div
              style={{
                color: "rgba(0, 0, 0, 0.2)",
                marginRight: "30px",
              }}
            >
              |
            </div>
            <div className="search-bar-check-in">
              <div className="check-in-header">Check In</div>
              <div className="check-in-value">Add dates</div>
            </div>
            <div className="search-bar-next">
              <br />
              <FontAwesomeIcon
                icon={faArrowRight}
                color="#858585"
                size="xs"
                style={{
                  marginRight: "20px",
                }}
              />
            </div>
            <div className="search-bar-check-in">
              <div className="check-in-header">Check Out</div>
              <div className="check-in-value">Add dates</div>
            </div>
            <div
              style={{
                color: "rgba(0, 0, 0, 0.2)",
                marginRight: "30px",
              }}
            >
              |
            </div>
            <div
              className="search-bar-check-in"
              style={{
                marginRight: "10px",
              }}
            >
              <div className="check-in-header">Guests</div>
              <div className="check-in-value">Add guests</div>
            </div>
            <div className="search-bar-add-btns">
              <div className="check-in-subtract">-</div>
              <div className="check-in-add">+</div>
            </div>
            <div className="search-bar-btn">
              <FontAwesomeIcon icon={faSearch} />
              <span>Search</span>
            </div>
          </div>
        </div>
      </section>
      <section id="featured-stays">
        <div className="featured-stays-content">
          <span className="featured-stays-header">Featured Stays</span>
          <span className="featured-stays-sub-header">
            Beachfront villas to high rise apartments and penthouses, experience
            your next stay with <b>Stella.</b>
          </span>
          <div className="apt-section">
            <div className="apt-btns">
              <FontAwesomeIcon
                icon={faAngleLeft}
                size="lg"
                onClick={scrollLeft}
              />
              <FontAwesomeIcon
                icon={faAngleRight}
                size="lg"
                onClick={scrollRight}
              />
            </div>
            <div className="apartment-cards" ref={aptCards}>
              {apartments.map((apt) => (
                <ApartmentCard
                  backgroundImage={apt.backgroundImage}
                  price={apt.price}
                  city={apt.city}
                  guests={apt.guests}
                  location={apt.location}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="download-application">
        <div className="download-application-content">
          <div className="download-text">
            <div className="download-header">
              Duis aute irure dolor in reprehenderit in voluptate
            </div>
            <span className="download-sub-header">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </span>
            <div className="download-steps">
              <div className="step step-1">
                <div>
                  <img src={StepOne} alt="step_one" />
                </div>
                <span>Sagittis vitae et leo duis ut diam quam nulla.</span>
              </div>
              <div className="step step-2">
                <div>
                  <img src={StepTwo} alt="step_two" />
                </div>
                <span>
                  Faucibus pulvinar elementum integer enim neque volutpat ac
                  tincidunt vitae.
                </span>
              </div>
              <div className="step step-3">
                <div>
                  <img src={StepThree} alt="step_three" />
                </div>
                <span>
                  Viverra adipiscing at in tellus integer feugiat scelerisque
                  varius.
                </span>
              </div>
              <div className="step step-4">
                <div>
                  <img src={StepFour} alt="step_four" />
                </div>
                <span>Elementum curabitur vitae nunc.</span>
              </div>
            </div>
            <hr />
            <div className="star-area">
              <div className="stars">
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
              </div>
              <span className="star-text">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui.
              </span>
            </div>
            <div className="download-btns">
              <img src={PlayStore} alt="star" width="50%" />
              <img src={AppStore} alt="star" width="50%" />
            </div>
          </div>
          <div className="download-picture">
            <IPhone className="iPhone"></IPhone>
            {/* <img src={iPhone} alt="star" width="auto" height="auto" /> */}
          </div>
        </div>
      </section>
      <section id="images">
        <div className="images">
          <div className="img-first-row">
            <div className="image-1" style={{}}>
              <img src={ImageOne} alt="image_1" />
              <div className="image-1-info">
                <div className="image-1-info-header">
                  <Heart />
                  <span>Beyond Living</span>
                </div>
                <div className="image-1-info-text">
                  Modern and fresh, our spaces are outfitted with comfort and
                  style, be it for a quick getaway to a long term stay.
                </div>
              </div>
            </div>
            <div className="image-2">
              <img src={ImageTwo} alt="image_2" />
              <div className="image-2-info">
                <div className="image-2-info-header">
                  <Location />
                  <span>Prime Locations</span>
                </div>
                <div className="image-2-info-text">
                  Breathtaking views in convenient and sought after locations, a
                  little something for everyone.
                </div>
              </div>
            </div>
          </div>
          <div className="img-second-row">
            <div className="image-3">
              <img src={ImageThree} alt="image_3" />
              <div className="image-3-info">
                <div className="image-3-info-header">
                  <Rose />
                  <span>Nullam efficitur turpis</span>
                </div>
                <div className="image-3-info-text">
                  Phasellus fermentum tellus vitae ante vehicula posuere.
                  Curabitur metus metus, feugiat non semper lacinia, maximus sit
                  amet ligula. Proin dictum quis ipsum.
                </div>
              </div>
            </div>
            <div className="image-4">
              <img src={ImageFour} alt="image_4" />
              <div className="image-4-info">
                <div className="image-4-info-header">
                  <Hand />
                  <span>A Signature of Excellence</span>
                </div>
                <div className="image-4-info-text">
                  24/7 guest concierge, seamless check-in and immaculate
                  cleanliness, always a flawless stay.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-content">
          <div
            className="footer-logo"
            style={{
              marginLeft: "2em",
              marginBottom: "30px",
            }}
          >
            <img src={Logo} alt="logo" width="96px" />
          </div>
          <div className="footer-links">
            <div className="about">
              <ul className="about-btns">
                <li>
                  <a
                    href="#"
                    className="about-us"
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                      textTransform: "uppercase",
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="about-us-btn find-a-stella">
                    Find a Stella
                  </a>
                </li>
                <li>
                  <a href="#" className="about-us-btn who-we-are">
                    Who we are
                  </a>
                </li>
                <li>
                  <a href="#" className="about-us-btn footer-help-center">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="about-us-btn lease-to-stella-stays">
                    Lease to Stella Stays
                  </a>
                </li>
                <li>
                  <a href="#" className="about-us-btn blog">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="cities">
              <ul className="about-btns">
                <li>
                  <a
                    href="#"
                    className="about-us"
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                      textTransform: "uppercase",
                    }}
                  >
                    Cities
                  </a>
                </li>
                <li>
                  <a href="#" className="about-us-btn dubai">
                    Dubai
                  </a>
                </li>
                <li>
                  <a href="#" className="about-us-btn montreal">
                    Montreal
                  </a>
                </li>
                <li>
                  <a href="#" className="about-us-btn">
                    Manama
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-us">
              <ul className="about-btns">
                <li>
                  <a
                    href="#"
                    className="about-us"
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                      textTransform: "uppercase",
                    }}
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="about-us-btn whatsapp">
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="#" className="about-us-btn email">
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div className="download">
              <ul className="about-btns">
                <li>
                  <a
                    href="#"
                    className="about-us"
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                      textTransform: "uppercase",
                    }}
                  >
                    Download
                  </a>
                </li>
              </ul>
              <div className="download-btns" style={{ paddingLeft: "2em" }}>
                <img src={AppStore} alt="star" width="50%" />
                <img src={PlayStore} alt="star" width="56%" />
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <hr />
            <span>Copyright © 2021 StellaStays Inc. All rights reserved.</span>
            <span>Terms and conditions · Privacy policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
