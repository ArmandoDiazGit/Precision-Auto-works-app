import { useState } from "react";

const initial = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  year: "",
  make: "",
  model: "",
  mileage: "",
  issue: "",
  date: "",
  urgency: "not-urgent",
};

export default function ServiceForm() {
  const [fields, setFields] = useState({ ...initial });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!fields.firstName.trim())
      errs.firstName = "Please enter your first name";
    if (!fields.lastName.trim()) errs.lastName = "Please enter your last name";
    if (!/^[\d\s\-+()]{7,20}$/.test(fields.phone.trim()))
      errs.phone = "Please enter a valid phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
      errs.email = "Please enter a valid email address";
    if (!fields.year.trim()) errs.year = "Please enter the vehicle year";
    if (!fields.make.trim()) errs.make = "Please enter the vehicle make";
    if (!fields.model.trim()) errs.model = "Please enter the vehicle model";
    if (!fields.issue.trim()) errs.issue = "Please describe your issue";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSuccess(true);
    setFields({ ...initial });
    setTimeout(() => setSuccess(false), 5000);
  };

  const cls = (name) => `form-group${errors[name] ? " invalid" : ""}`;

  return (
    <section className="form-section" id="form">
      <div className="form-bg"></div>
      <div className="container">
        <div className="form-card">
          <h2>Request Service</h2>
          <p className="form-subtitle">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className={cls("firstName")}>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={fields.firstName}
                  onChange={handleChange}
                />
                <span className="error-msg">{errors.firstName}</span>
              </div>
              <div className={cls("lastName")}>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={fields.lastName}
                  onChange={handleChange}
                />
                <span className="error-msg">{errors.lastName}</span>
              </div>
            </div>
            <div className="form-row">
              <div className={cls("phone")}>
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(555) 123-4567"
                  value={fields.phone}
                  onChange={handleChange}
                />
                <span className="error-msg">{errors.phone}</span>
              </div>
              <div className={cls("email")}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={fields.email}
                  onChange={handleChange}
                />
                <span className="error-msg">{errors.email}</span>
              </div>
            </div>
            <div className="form-row">
              <div className={cls("year")}>
                <label>Vehicle Year</label>
                <input
                  type="number"
                  name="year"
                  placeholder="2022"
                  min="1980"
                  max="2026"
                  value={fields.year}
                  onChange={handleChange}
                />
                <span className="error-msg">{errors.year}</span>
              </div>
              <div className={cls("make")}>
                <label>Vehicle Make</label>
                <input
                  type="text"
                  name="make"
                  placeholder="Toyota"
                  value={fields.make}
                  onChange={handleChange}
                />
                <span className="error-msg">{errors.make}</span>
              </div>
              <div className={cls("model")}>
                <label>Vehicle Model</label>
                <input
                  type="text"
                  name="model"
                  placeholder="Camry"
                  value={fields.model}
                  onChange={handleChange}
                />
                <span className="error-msg">{errors.model}</span>
              </div>
            </div>
            <div className="form-row full">
              <div className="form-group">
                <label>Mileage</label>
                <input
                  type="text"
                  name="mileage"
                  placeholder="e.g. 65,000 miles"
                  value={fields.mileage}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row full">
              <div className={cls("issue")}>
                <label>Primary Issue / Description</label>
                <textarea
                  name="issue"
                  placeholder="Describe the issue you're experiencing..."
                  value={fields.issue}
                  onChange={handleChange}
                ></textarea>
                <span className="error-msg">{errors.issue}</span>
              </div>
            </div>
            <div className="form-row full">
              <div className="form-group">
                <label>Preferred Drop-Off Date</label>
                <input
                  type="date"
                  name="date"
                  value={fields.date}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row full">
              <div className="form-group">
                <label>Urgency</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="urgency"
                      value="not-urgent"
                      checked={fields.urgency === "not-urgent"}
                      onChange={handleChange}
                    />{" "}
                    Not Urgent
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="urgency"
                      value="this-week"
                      checked={fields.urgency === "this-week"}
                      onChange={handleChange}
                    />{" "}
                    This Week
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="urgency"
                      value="asap"
                      checked={fields.urgency === "asap"}
                      onChange={handleChange}
                    />{" "}
                    ASAP
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="orange-btn form-submit">
              Submit Service Request
            </button>
          </form>
          {success && (
            <div className="snackbar">
              <p>Thank you for submitting</p>
              <p className="snackbar-sub">This is just a test site.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
