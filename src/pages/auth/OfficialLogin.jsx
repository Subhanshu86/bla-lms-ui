import React, { useState } from "react";
import axiosInstance from "../../services/axiosInstance";
import logodesktopfull from "../../assets/Images/BLALogo.png";

const OfficialLogin = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // STEP 1: SEND OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter email");
      return;
    }

    try {
      setLoading(true);
      await axiosInstance.post("/official/auth/send-otp", email);
      alert("OTP sent to your email");
      setOtpSent(true);
    } catch (err) {
      alert(
        err.response?.data?.message || err.response?.data || "Error sending OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  // STEP 2: VERIFY OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      setLoading(true);
      const res = await axiosInstance.post("/official/auth/verify-otp", {
        email,
        otp,
      });

      // Save accessToken and refreshToken
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("fullName", res.data.fullName);

      // Redirect based on role
      if (res.data.role === "Admin") {
        window.location.href = "/admin/dashboard";
      } else if (res.data.role === "Instructor") {
        window.location.href = "/instructor/dashboard";
      }
    } catch (err) {
      alert(err.response?.data?.message || err.response?.data || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="techwave_fn_sign">
      <div className="sign__wrapper">
        <div className="sign__left">
          <div className="sign__content">
            <form className="login">
              <div className="form__content">
                <div className="form__title">Sign In</div>

                <div className="form__username">
                  <label>Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={otpSent}
                  />
                </div>

                {otpSent && (
                  <div className="form__pass">
                    <label>OTP</label>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                )}

                <div className="form__submit">
                  <label className="fn__submit">
                    {!otpSent ? (
                      <input
                        type="submit"
                        value={loading ? "Sending..." : "Send OTP"}
                        onClick={handleSendOtp}
                      />
                    ) : (
                      <input
                        type="submit"
                        value={loading ? "Verifying..." : "Verify OTP"}
                        onClick={handleVerifyOtp}
                      />
                    )}
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE – DESIGN */}
        <div className="sign__right">
          <div className="design__content">
            <h3>Learning Management System</h3>
            <h5>
              <b>भारत का अपना लर्निंग अड्डा</b>
            </h5>
            <img src={logodesktopfull} alt="BLA Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialLogin;
