import React, { useState } from "react";
import FixedNavbar from "./FixedNavbar";
import Header from "./Header";

const TourGuideRegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    languages: "",
    expertise: "",
    statement: "",
    resume: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      resume: e.target.files ? e.target.files[0] : null,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle the form submission, e.g., send to API
  };

  if (submitted) {
    return (
      <div className="alert alert-success mt-4" role="alert">
        Thank you for registering! We will review your application and contact
        you soon.
      </div>
    );
  }

  return (
    <>
      <FixedNavbar />
      <div >
        <Header linkName="Tour Guide Registration" child="Tour Guide Registration" style={{maxHeight: "300px"}} />
        <div className="card p-4 shadow-sm container my-2" style={{ maxWidth: 600 }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">City/State</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Languages Spoken</label>
              <input
                type="text"
                className="form-control"
                name="languages"
                value={form.languages}
                onChange={handleChange}
                placeholder="e.g. English, Yoruba, Hausa"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Areas of Expertise</label>
              <input
                type="text"
                className="form-control"
                name="expertise"
                value={form.expertise}
                onChange={handleChange}
                placeholder="e.g. History, Food, Nature"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Statement of Interest</label>
              <textarea
                className="form-control"
                name="statement"
                value={form.statement}
                onChange={handleChange}
                rows={3}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Upload Resume/CV (Optional)</label>
              <input
                type="file"
                className="form-control"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TourGuideRegistrationForm;
