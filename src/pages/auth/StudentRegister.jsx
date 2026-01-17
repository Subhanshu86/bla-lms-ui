import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../services/axiosInstance";
import logodesktopfull from "../../assets/Images/BLALogo.png";

const StudentRegister = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const registerStudent = async (e) => {
    e.preventDefault();
    if (!fullName || !phone || !email) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);
      await axiosInstance.post("/student/auth/register", {
        fullName,
        phone,
        email,
      });
      alert("OTP sent to your email");
      setOtpSent(true);
    } catch (err) {
      alert(err.response?.data || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) {
      alert("OTP is required");
      return;
    }

    try {
      setLoading(true);
      const res = await axiosInstance.post("/student/auth/verify-otp", {
        email,
        otp,
      });

      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("fullName", res.data.fullName);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("userType", "student");

      window.location.href = "/student/dashboard";
    } catch (err) {
      alert(err.response?.data || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="techwave_fn_sign">
        <div className="sign__wrapper">
          <div className="sign__left">
            <div className="sign__content">
              <form className="login">
                <div className="form__content">
                  <div className="form__title">Register here</div>

                  {!otpSent ? (
                    <>
                      <div className="form__username">
                        <label>Username</label>
                        <input
                          type="text"
                          className="input"
                          placeholder="Enter username"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>

                      <div className="form__username">
                        <label>Phone</label>
                        <input
                          type="number"
                          className="input"
                          placeholder="Enter phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>

                      <div className="form__username">
                        <label>Email</label>
                        <input
                          type="email"
                          className="input"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form__submit">
                        <label className="fn__submit">
                          <input
                            type="submit"
                            value={loading ? "Sending OTP..." : "Register"}
                            onClick={registerStudent}
                          />
                        </label>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="form__pass">
                        <label>OTP</label>
                        <input
                          type="text"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                      </div>

                      <div className="form__submit">
                        <label className="fn__submit">
                          <input
                            type="submit"
                            value={loading ? "Verifying..." : "Verify OTP"}
                            onClick={verifyOtp}
                          />
                        </label>
                      </div>
                    </>
                  )}
                </div>
              </form>

              <div className="sign__desc">
                <p>
                  Already have an account?
                  <Link to="/student-login"> Sign In</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="sign__right">
            <div className="design__content">
              <h3>Learning Management System</h3>
              <h5>
                <b>भारत का अपना लर्निंग अड्डा</b>
              </h5>
              <img src={logodesktopfull} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentRegister;
