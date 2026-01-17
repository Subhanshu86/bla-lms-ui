import React from "react";
import logodesktopfull from "../../../assets/Images/BLALogo.png";
import logodesktopmini from "../../../assets/Images/BLALogo.png";
import logoretinafull from "../../../assets/Images/BLALogo.png";
import logoretinamini from "../../../assets/Images/BLALogo.png";
import arrowsvg from "../../../assets/Images/arrow.svg";
import homesvg from "../../../assets/Images/home.svg";
import communitysvg from "../../../assets/Images/community.svg";
import personsvg from "../../../assets/Images/person.svg";
import cubesvg from "../../../assets/Images/cube.svg";
import imgsvg from "../../../assets/Images/image.svg";
import chatsvg from "../../../assets/Images/chat.svg";
import dollarsvg from "../../../assets/Images/dollar.svg";
import questionsvg from "../../../assets/Images/question.svg";
import logoutsvg from "../../../assets/Images/logout.svg";
import { Link } from "react-router-dom";

const InstructorSidebar = () => {
  return (
    <>
      <div className="techwave_fn_leftpanel">
        <div className="mobile_extra_closer"></div>

        {/* Logo */}
        <div className="leftpanel_logo d-flex">
          <a href="/" className="fn_logo">
            <span className="full_logo">
              <div className="white-lg-logo">
                <img
                  src={logodesktopfull}
                  alt="Logo"
                  className="desktop_logo"
                />
              </div>
              <div className="white-sm-logo">
                <img
                  src={logoretinafull}
                  alt="Logo Retina"
                  className="retina_logo"
                />
              </div>
            </span>

            <span className="short_logo">
              <img
                src={logodesktopmini}
                alt="Mini Logo"
                className="desktop_logo"
              />
              <img
                src={logoretinamini}
                alt="Mini Retina"
                className="retina_logo"
              />
            </span>
          </a>

          <a href="#" className="fn__closer fn__icon_button desktop_closer">
            <img src={arrowsvg} alt="Close" className="fn__svg" />
          </a>

          <a href="#" className="fn__closer fn__icon_button mobile_closer">
            <img src={arrowsvg} alt="Close" className="fn__svg" />
          </a>
        </div>

        {/* Sidebar Content */}
        <div className="leftpanel_content">
          {/* Start Here */}
          <div className="nav_group">
            <h2 className="group__title">Start Here</h2>
            <ul className="group__list">
              <li>
                {/* <a
                    href="/"
                    className="fn__tooltip active menu__item"
                    data-position="right"
                    title="Home"
                  >
                    <span className="icon">
                      <img src={homesvg} alt="" className="fn__svg" />
                    </span>
                    <span className="text">Home</span>
                  </a> */}

                <Link
                  className="fn__tooltip active menu__item"
                  data-position="right"
                  title="Dashboard"
                  to="/instructor/dashboard"
                >
                  <span className="icon">
                    <img src={homesvg} alt="" className="fn__svg" />
                  </span>
                  <span className="text">Home</span>
                </Link>
              </li>

              <li>
                <a
                  href="/community-feed"
                  className="fn__tooltip menu__item"
                  data-position="right"
                  title="Community Feed"
                >
                  <span className="icon">
                    <img src={communitysvg} alt="" className="fn__svg" />
                  </span>
                  <span className="text">Community Feed</span>
                </a>
              </li>

              <li>
                <a
                  href="/personal-feed"
                  className="fn__tooltip menu__item"
                  data-position="right"
                  title="Personal Feed"
                >
                  <span className="icon">
                    <img src={personsvg} alt="" className="fn__svg" />
                  </span>
                  <span className="text">
                    Personal Feed
                    {/* <span className="count">48</span> */}
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="/models"
                  className="fn__tooltip menu__item"
                  data-position="right"
                  title="Finetuned Models"
                >
                  <span className="icon">
                    <img src={cubesvg} alt="" className="fn__svg" />
                  </span>
                  <span className="text">Finetuned Models</span>
                </a>
              </li>
            </ul>
          </div>

          {/* User Tools */}
          <div className="nav_group">
            <h2 className="group__title">User Tools</h2>
            <ul className="group__list">
              <li>
                <a
                  href="/image-generation"
                  className="fn__tooltip menu__item"
                  data-position="right"
                  title="Image Generation"
                >
                  <span className="icon">
                    <img src={imgsvg} alt="" className="fn__svg" />
                  </span>
                  <span className="text">Image Generation</span>
                </a>
              </li>

              <li>
                <a
                  href="/ai-chat-bot"
                  className="fn__tooltip menu__item"
                  data-position="right"
                  title="AI Chat Bot"
                >
                  <span className="icon">
                    <img src={chatsvg} alt="" className="fn__svg" />
                  </span>
                  <span className="text">AI Chat Bot</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="nav_group">
            <h2 className="group__title">Support</h2>
            <ul className="group__list">
              <li>
                <a
                  href="/pricing"
                  className="fn__tooltip menu__item"
                  data-position="right"
                  title="Pricing"
                >
                  <span className="icon">
                    <img src={dollarsvg} alt="" className="fn__svg" />
                  </span>
                  <span className="text">Pricing</span>
                </a>
              </li>

              <li className="menu-item-has-children">
                <a
                  href="#"
                  className="fn__tooltip menu__item"
                  data-position="right"
                  title="FAQ & Help"
                >
                  <span className="icon">
                    <img src={questionsvg} alt="" className="fn__svg" />
                  </span>
                  <span className="text">FAQ &amp; Help</span>
                  <span className="trigger">
                    <img src="/svg/arrow.svg" alt="" className="fn__svg" />
                  </span>
                </a>

                <ul className="sub-menu">
                  <li>
                    <a href="/documentation">Documentation</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="/changelog">
                      Changelog <span className="fn__sup">(4.1.2)</span>
                    </a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/">Home #2</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="/login"
                  className="fn__tooltip menu__item"
                  data-position="right"
                  title="Log Out"
                >
                  <span className="icon">
                    <img src={logoutsvg} alt="" className="fn__svg" />
                  </span>
                  <span className="text">Log Out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorSidebar;
