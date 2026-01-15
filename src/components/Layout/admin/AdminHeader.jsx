import React from "react";
import axiosInstance from "../../../services/axiosInstance";
import searchsvg from "../../../assets/Images/search.svg";
import closesvg from "../../../assets/Images/close.svg";

import bellsvg from "../../../assets/Images/bell.svg";
import fullscreensvg from "../../../assets/Images/fullscreen.svg";
import smallscreensvg from "../../../assets/Images/smallscreen.svg";
import languagesvg from "../../../assets/Images/language.svg";
import sunsvg from "../../../assets/Images/sun.svg";
import moonsvg from "../../../assets/Images/moon.svg";
import userjpg from "../../../assets/Images/user.jpg";
import logoutsvg from "../../../assets/Images/logout.svg";
import personsvg from "../../../assets/Images/person.svg";
import billingsvg from "../../../assets/Images/billing.svg";
import settingsvg from "../../../assets/Images/setting.svg";

const AdminHeader = () => {

 


  return (
    <>
      {/* Search Bar Start Here */}
      <div className="techwave_fn_searchbar">
        <div className="search__bar">
          <input
            className="search__input"
            type="text"
            placeholder="Search here..."
          />
          <img src={searchsvg} alt="" className="fn__svg search__icon" />
          <a className="search__closer" href="#">
            <img src={closesvg} alt="" className="fn__svg" />
          </a>
        </div>
        <div className="search__results">
          <div className="results__title">Results</div>
          <div className="results__list">
            <ul>
              <li>
                <a href="#">Artificial Intelligence</a>
              </li>
              <li>
                <a href="#">
                  Learn about the impact of AI on the financial industry
                </a>
              </li>
              <li>
                <a href="#">Delve into the realm of AI-driven manufacturing</a>
              </li>
              <li>
                <a href="#">
                  Understand the ethical implications surrounding AI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Search Bar End Here */}

      <header className="techwave_fn_header">
        {/* Header left */}
        <div className="header__left">
          <div className="fn__token_info">
            <span className="token_summary">
              <span className="count">120</span>
              <span className="text">
                Tokens
                <br />
                Remain
              </span>
            </span>

            <a href="/pricing" className="token_upgrade techwave_fn_button">
              <span>Upgrade</span>
            </a>

            <div className="token__popup">
              Resets in <span>19 hours.</span>
              <br />
              Daily limit is <span>200 tokens</span>
            </div>
          </div>
        </div>

        {/* Header right */}
        <div className="header__right">
          <div className="fn__nav_bar">
            {/* Search */}
            <div className="bar__item bar__item_search">
              <a href="#" className="item_opener fn__tooltip" title="Search">
                <img src={searchsvg} alt="Search" className="fn__svg" />
              </a>
              <div className="item_popup" data-position="right">
                <input type="text" placeholder="Search" />
              </div>
            </div>

            {/* Notifications */}
            <div className="bar__item bar__item_notification has_notification">
              <a
                href="#"
                className="item_opener fn__tooltip"
                title="Notifications"
              >
                <img src={bellsvg} alt="Bell" className="fn__svg" />
              </a>

              <div className="item_popup" data-position="right">
                <div className="ntfc_header">
                  <h2 className="ntfc_title">Notifications</h2>
                  <a href="/notifications">View All</a>
                </div>

                <div className="ntfc_list">
                  <ul>
                    <li>
                      <p>
                        <a href="#">Version 4.1.2 has been launched</a>
                      </p>
                      <span>34 Min Ago</span>
                    </li>
                    <li>
                      <p>
                        <a href="#">Video Generation has been released</a>
                      </p>
                      <span>12 Apr</span>
                    </li>
                    <li>
                      <p>
                        <a href="#">Terms has been updated</a>
                      </p>
                      <span>12 Apr</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fullscreen */}
            <div className="bar__item bar__item_fullscreen">
              <a
                href="#"
                className="item_opener fn__tooltip"
                title="Full Screen"
              >
                <img
                  src={fullscreensvg}
                  alt="Fullscreen"
                  className="fn__svg f_screen"
                />
                <img
                  src={smallscreensvg}
                  alt="Exit Fullscreen"
                  className="fn__svg s_screen"
                />
              </a>
            </div>

            {/* Language */}
            <div className="bar__item bar__item_language">
              <a href="#" className="item_opener fn__tooltip" title="Language">
                <img src={languagesvg} alt="Language" className="fn__svg" />
              </a>
              <div className="item_popup" data-position="right">
                <ul>
                  <li>
                    <span className="active">English</span>
                  </li>
                  <li>
                    <a href="#">Spanish</a>
                  </li>
                  <li>
                    <a href="#">French</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Theme */}
            <div className="bar__item bar__item_skin">
              <a
                href="#"
                className="item_opener fn__tooltip"
                title="Dark/Light"
              >
                <img
                  src={sunsvg}
                  alt="Light Mode"
                  className="fn__svg light_mode"
                />
                <img
                  src={moonsvg}
                  alt="Dark Mode"
                  className="fn__svg dark_mode"
                />
              </a>
            </div>

            {/* User */}
            <div className="bar__item bar__item_user">
              <a
                href="#"
                className="user_opener fn__tooltip"
                title="User Profile"
              >
                <img src={userjpg} alt="User" />
              </a>

              <div className="item_popup" data-position="right">
                <div className="user_profile">
                  <div className="user_img">
                    <img src={userjpg} alt="User" />
                  </div>
                  <div className="user_info">
                    <h2 className="user_name">
                      Caden Smith <span>Free</span>
                    </h2>
                    <p>
                      <a href="mailto:cadmail@gmail.com" className="user_email">
                        cadmail@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="user_nav">
                  <ul>
                    <li>
                    
                        <span class="icon">
                          <img src={personsvg} alt="" class="fn__svg" />
                        </span>
                        <span class="text">Profile</span>
                 
                    </li>
                    <li>
                 
                        <span class="icon">
                          <img src={settingsvg} alt="" class="fn__svg" />
                        </span>
                        <span class="text">Settings</span>
                  
                    </li>
                    <li>
                
                        <span class="icon">
                          <img src={billingsvg} alt="" class="fn__svg" />
                        </span>
                        <span class="text">Billing</span>
                 
                    </li>
                    {/* <li>
                   <button type="button" onClick={logout}>
  <span className="icon">
    <img src={logoutsvg} alt="" className="fn__svg" />
  </span>
  <span className="text">Log Out</span>
</button>

                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AdminHeader;
