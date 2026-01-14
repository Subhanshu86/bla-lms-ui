import React from "react";
import logodesktopfull from "../../assets/Images/BLALogo.png";

const OfficialLogin = () => {
  return (
    <>
      <div className="techwave_fn_sign">
        <div className="sign__wrapper">
          {/* LEFT SIDE – FORM */}
          <div className="sign__left">
            <div className="sign__content">
              <form className="login">
                <div className="form__content">
                  <div className="form__title">Sign In</div>

                  <div className="form__username">
                    <label htmlFor="user_login">Email</label>
                    <input
                      type="text"
                      className="input"
                      id="user_login"
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="form__pass">
                    <div className="pass_lab">
                      <label htmlFor="user_password">Password</label>
                      <a href="#">Forget Password?</a>
                    </div>
                    <input
                      type="password"
                      id="user_password"
                      placeholder="Enter password"
                    />
                  </div>

                  <div className="form__submit">
                    <label className="fn__submit">
                      <input type="submit" value="Sign In" />
                    </label>
                  </div>
                </div>
              </form>

              {/* <div className="sign__desc">
                <p>
                  Not a member?
                  <Link to="/student-register"> Sign up</Link>
                </p>
              </div> */}
            </div>
          </div>

          {/* RIGHT SIDE – DESIGN */}
          <div className="sign__right">
            <div className="design__content">
              <h3>Learning Management System</h3>
              <h5>
                <b>भारत का अपना लर्निंग अड्डा</b>
              </h5>
              <img src={logodesktopfull} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficialLogin;
