import Header from "./Header";

const ContactUs = () => {
  return (
    <>
      <Header child="Contact Us" />
      <div className="container-fluid contact bg-light py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3">Contact Us</h5>
            <h1 className="mb-0">Contact For Any Query</h1>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-4">
              <div className="bg-white rounded p-4">
                <div className="text-center mb-4">
                  <i className="fa fa-map-marker-alt fa-3x text-success"></i>
                  <h4 className="text-success">Our Office Address</h4>
                  <p className="mb-0">
                    20, Ajasa Street off King George IV,
                    <br />
                    Onikan Lagos Nigeria
                  </p>
                </div>
                <div className="text-center mb-4">
                  <i className="fa fa-phone-alt fa-3x text-success mb-3"></i>
                  <h4 className="text-success">Mobile</h4>
                  <p className="mb-0">+234 803 475 1038</p>
                </div>

                <div className="text-center">
                  <i className="fa fa-envelope-open fa-3x text-success mb-3"></i>
                  <h4 className="text-success">Email</h4>
                  <p className="mb-0">info@feelnigeria.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h3 className="mb-2">Send us a message</h3>
              <p className="mb-4">
                We are always here to assist you with any inquiries you may
                have. Whether you need information about our services,
                assistance with bookings, or general guidance, our dedicated
                support team is ready to provide prompt and professional
                assistance.{" "}
                <a href="https://feelnigeria.com/contact-form">Download Now</a>.
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="name"
                        placeholder="Your Name"
                      ></input>
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control border-0"
                        id="email"
                        placeholder="Your Email"
                      ></input>
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="subject"
                        placeholder="Subject"
                      ></input>
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control border-0"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "160px" }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-success w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12">
              <div className="rounded">
                <iframe
                  className="rounded w-100"
                  style={{ height: "450px" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
