import React from "react";
import logodesktopfull from "../../assets/Images/logo-desktop-full.png";
import axiosInstance from "../../services/axiosInstance";
import arrowsvg from "../../assets/Images/arrow.svg";
import imgsvg from "../../assets/Images/image.svg";
import chatsvg from "../../assets/Images/chat.svg";

const AdminDashboard = () => {
  const fullName = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");
  const logout = async () => {
    console.log("Logout clicked");
    try {
      await axiosInstance.post("/official/auth/logout");
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("role");

      window.location.href = "/login";
    }
  };

  return (
    <>
      <div className="techwave_fn_content">
        {/* PAGE */}
        <div className="techwave_fn_page">
          {/* Home Page */}
          <div className="techwave_fn_home">
            <div className="section_home">
              <div className="section_left">
                {/* Title */}
                <div className="techwave_fn_title_holder">
                  <h1 className="title fw-bolder">Barrownz Learning Academy</h1>
                  <p className="desc">
                    Generate your ideas into stunning visuals
                  </p>

                  <button type="button" onClick={logout}>
                    <span className="icon">
                      {/* <img src={logoutsvg} alt="" className="fn__svg" /> */}
                    </span>
                    <span className="text">Log Out</span>
                  </button>

                  <p>{fullName}</p>
                  <p>{email}</p>
                </div>

                {/* Interactive List */}
                <div className="techwave_fn_interactive_list">
                  <ul>
                    <li>
                      <div className="item">
                        <a href="/image-generation">
                          <span className="icon">
                            <img
                              src={imgsvg}
                              alt="Image Generation"
                              className="fn__svg"
                            />
                          </span>
                          <h2 className="title">Image Generation</h2>
                          <p className="desc">
                            This field of AI combines deep learning algorithms
                            and generative models to create new images that
                            resemble real-world photographs or exhibit creative
                            and imaginative qualities.
                          </p>
                          <span className="arrow">
                            <img src={arrowsvg} alt="" className="fn__svg" />
                          </span>
                        </a>
                      </div>
                    </li>

                    <li>
                      <div className="item">
                        <a href="/ai-chat-bot">
                          <span className="icon">
                            <img
                              src={chatsvg}
                              alt="AI Chat Bot"
                              className="fn__svg"
                            />
                          </span>
                          <h2 className="title">AI Chat Bot</h2>
                          <p className="desc">
                            An AI chatbot, short for artificial intelligence
                            chatbot, is a computer program designed to simulate
                            human-like conversations and provide automated
                            responses to user queries or prompts.
                          </p>
                          <span className="arrow">
                            <img src={arrowsvg} alt="" className="fn__svg" />
                          </span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Section */}
              <div className="section_right">
                <div className="company_info">
                  <img src={logodesktopfull} alt="Company Logo" />

                  <p className="fn__animated_text">
                    The official server of TECH-AI, a text-to-image AI where
                    your imagination is the only limit. We’re building
                    market-leading features that will give you greater control
                    over your generations.
                  </p>

                  <hr />

                  <div className="fn__members">
                    <div className="active item">
                      <span className="circle"></span>
                      <span className="text">1,154,694 Online</span>
                    </div>

                    <div className="item">
                      <span className="circle"></span>
                      <span className="text">77,345,912 Members</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Home Page */}
        </div>
        {/* END PAGE */}
      </div>
    </>
  );
};

export default AdminDashboard;
