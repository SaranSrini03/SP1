import React, { useState } from "react";
import "./checkout.css";
import Header from "./Header";
import Footer from "./Footer";

function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "India",
    streetAddress: "",
    city: "",
    province: "Western province",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.streetAddress)
      newErrors.streetAddress = "Street address is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.zipCode) newErrors.zipCode = "ZIP Code is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Order placed successfully!");
      // Reset form or perform other actions if needed
      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        country: "India",
        streetAddress: "",
        city: "",
        province: "Western province",
        zipCode: "",
        phone: "",
        email: "",
        additionalInfo: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
    <Header/>
      <header className="head">
        <h1>Checkout</h1>
      </header>
      <div className="container">
        <main className="row gx-5 mt-5 check">
          <h4 className="mb-3 mr-5">Billing details</h4>
          <section className="col-md-6 left">
            <form onSubmit={handleSubmit}>
              <div className="row mb-4">
                <div className="col">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <div className="text-danger">{errors.firstName}</div>
                  )}
                </div>
                <div className="col">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <div className="text-danger">{errors.lastName}</div>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="companyName" className="form-label">
                  Company Name (optional)
                </label>
                <input
                  type="text"
                  className="form-control custom-input"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="country" className="form-label">
                Country / Region
              </label>
              <select
                className="form-select mb-4 custom-input"
                id="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="India">India</option>
                <option value="UK">United Kingdom</option>
                <option value="UAE">UAE</option>
                <option value="Australia">Australia</option>
              </select>
              <div className="mb-4">
                <label htmlFor="streetAddress" className="form-label">
                  Street address
                </label>
                <textarea
                  className="form-control custom-input"
                  id="streetAddress"
                  rows="3"
                  value={formData.streetAddress}
                  onChange={handleChange}
                ></textarea>
                {errors.streetAddress && (
                  <div className="text-danger">{errors.streetAddress}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  Town / City
                </label>
                <input
                  type="text"
                  className="form-control custom-input"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && (
                  <div className="text-danger">{errors.city}</div>
                )}
              </div>
              <label htmlFor="province" className="form-label">
                Province
              </label>
              <select
                className="form-select mb-4 custom-input"
                id="province"
                value={formData.province}
                onChange={handleChange}
              >
                <option value="Western province">Western province</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </select>
              <div className="mb-3">
                <label htmlFor="zipCode" className="form-label">
                  ZIP Code
                </label>
                <input
                  type="text"
                  className="form-control custom-input"
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
                {errors.zipCode && (
                  <div className="text-danger">{errors.zipCode}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control custom-input"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <div className="text-danger">{errors.phone}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control custom-input"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control custom-input"
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  placeholder="Additional Information"
                  onChange={handleChange}
                />
              </div>
            </form>
          </section>
          <section className="col-md-6 mt-3 right">
            <div className="r1">
              <div className="product text-start">
                <h6>Product</h6>
                <p>template name</p>
                <p>Subtotal</p>
                <p>Total</p>
              </div>
              <div className="calculate text-end">
                <h6>Subtotal</h6>
                <p>Rs.250,00,000</p>
                <p>Rs.250,00,000</p>
                <p className="total">Rs.250,00,000</p>
              </div>
            </div>
            <hr />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                className="form-check-label mb-2"
                htmlFor="flexRadioDefault1"
              >
                Direct Bank Transfer
              </label>
            </div>
            <p className="btext">
              Make your payment directly into our bank account; please use your
              order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Cash On Delivery
              </label>
            </div>
            <p className="btext mt-2">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span>
                <strong>Privacy Policy</strong>
              </span>
              .
            </p>
            <div className="btns mt-4 mb-5 text-end">
              <button
                type="submit"
                className="btn btn-light orderbtn"
                onClick={handleSubmit}
              >
                Place Order
              </button>
            </div>
          </section>
        </main>
      </div>
      <div className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            {[
              { title: "High Quality", description: "Certified Products" },
              { title: "Warranty Protection", description: "Over 2 Years" },
              { title: "Free Shipping", description: "Order over $200" },
              { title: "24/7 Support", description: "Dedicated Support" },
            ].map((feature, index) => (
              <div key={index} className="col-6 col-md-3 mb-4">
                <div className="d-flex flex-column align-items-center">
                  <p className="font-weight-bold">{feature.title}</p>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Checkout;
