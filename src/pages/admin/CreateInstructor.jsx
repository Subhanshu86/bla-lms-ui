import React, { useState } from "react";
import axiosInstance from "../../services/axiosInstance";

const CreateInstructor = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.fullName || !form.email) {
      alert("Full Name and Email are required");
      return;
    }

    try {
      setLoading(true);

      // ✅ Send phone also
      await axiosInstance.post("/admin/instructors/create", {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
      });

      alert("Instructor created successfully");

      // Reset form
      setForm({
        fullName: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error(error);
      alert(error?.response?.data || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="techwave_fn_contact_page">
      <div className="contactpage">
        <div className="container small">
          <div className="techwave_fn_pagetitle">
            <h2 className="title">Add Instructor</h2>
          </div>

          <div className="fn_contact_form">
            <form onSubmit={handleSubmit} className="contact_form">
              <div className="input_list">
                <ul>
                  <li>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Full Name *"
                    />
                  </li>

                  <li>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email *"
                    />
                  </li>

                  <li>
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                    />
                  </li>

                  <li>
                    <button
                      type="submit"
                      className="techwave_fn_button"
                      disabled={loading}
                    >
                      <span>{loading ? "Creating..." : "Create"}</span>
                    </button>
                  </li>
                </ul>
              </div>
            </form>
          </div>

          <div className="fn__space__10"></div>
        </div>
      </div>
    </div>
  );
};

export default CreateInstructor;
