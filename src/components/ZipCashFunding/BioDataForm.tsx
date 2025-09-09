import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

interface BioDataStepProps {
  onNext: () => void;
}


const BioDataForm = ({onNext}: BioDataStepProps) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    idFile: null as File | null,
    email: "",
    phone: "",
    bvn: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files && files[0]
          : value,
    }));
  };

  // const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // navigate("/token");
    onNext();
  };

  return (
    <div className="biodata-form-container">
      <main className="main-content">
        <h1 className="form-title">Enter your bio-data</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="biodata-form">
            <div className="form-grid">
              <div className="form-column">
                <div className="form-field">
                  <label className="field-label">Name</label>
                  <input
                    type="text"
                    className="field-input"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Date of Birth</label>
                  <input
                    type="date"
                    className="field-input"
                    name="dob"
                    placeholder="Enter your Date of Birth"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Upload your ID</label>
                  <div className="file-input-container">
                    <input
                      type="file"
                      className="file-input"
                      name="idFile"
                      onChange={handleChange}
                      accept=".jpg,.jpeg,.png,.pdf"
                      id="idFile"
                    />
                    <label htmlFor="idFile" className="file-input-label">
                      <span className="file-button">Choose file</span>
                      <span className="file-text">
                        {formData.idFile ? formData.idFile.name : "No file chosen"}
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-column">
                <div className="form-field">
                  <label className="field-label">Email</label>
                  <input
                    type="email"
                    className="field-input"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="field-label">Phone number</label>
                  <input
                    type="tel"
                    className="field-input"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkbox-field">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    name="bvn"
                    checked={formData.bvn}
                    onChange={handleChange}
                    id="bvn"
                  />
                  <label htmlFor="bvn" className="checkbox-label">
                    I have an active BVN
                  </label>
                </div>
              </div>
            </div>

            <div className="button-container">
              <button type="submit" className="continue-button">
                Continue
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default BioDataForm;
