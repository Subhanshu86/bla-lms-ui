import React from "react";

const CreateInstructor = () => {
  return (
    <>
      <div className="techwave_fn_contact_page">
        <div className="contactpage">
          <div className="container small">
            <div class="techwave_fn_pagetitle">
              <h2 class="title">Add Instructor</h2>
            </div>
            <div className="fn_contact_form">
              <form className="contact_form">
                <div className="input_list">
                  <ul>
                    <li>
                      <input id="name" type="text" placeholder="Full Name *" />
                    </li>

                    <li>
                      <input id="email" type="text" placeholder="Email *" />
                    </li>

                    <li>
                      <input id="tel" type="text" placeholder="Phone" />
                    </li>

                    <li>
                      <button className="techwave_fn_button">
                        <span>Create</span>
                      </button>
                    </li>
                  </ul>
                </div>

                {/* <div
                  className="returnmessage"
                  data-success="Your message has been received, We will contact you soon."
                ></div> */}
              </form>
            </div>

            <div className="fn__space__10"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateInstructor;
