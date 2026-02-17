import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!nameRegex.test(form.firstName)) {
      newErrors.firstName = "Only letters allowed";
    }

    if (!nameRegex.test(form.lastName)) {
      newErrors.lastName = "Only letters allowed";
    }

    if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", form);
      alert("Form submitted successfully!");
    }
  };

  return (
  <section className="w-full py-18 mt-10 px-4 md:px-12 bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-12">Contact Us</h2>

      {/* ================= FORM ================= */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* First Name */}
        <div>
          <label className="block mb-2 font-medium">First name *</label>
          <input
            type="text"
            name="firstName"
            required
            value={form.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-2 font-medium">Last name *</label>
          <input
            type="text"
            name="lastName"
            required
            value={form.lastName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 font-medium">Phone</label>
          <PhoneInput
            country={"in"}
            value={form.phone}
            required
            onChange={(phone) => setForm({ ...form, phone })}
            inputStyle={{
              width: "100%",
              height: "48px",
              borderRadius: "6px",
              border: "1px solid #d1d5db",
            }}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            rows="5"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-md hover:opacity-90 transition"
          >
            Submit
          </button>
        </div>
      </form>

      {/* ================= MAP SECTION ================= */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold mb-8 text-center">
          Visit Our Location
        </h3>

        <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7775987109444!2d80.23879799537823!3d13.113270942226196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526598f46c598d%3A0xa566d54dda61828c!2sRight%20Enterprises!5e0!3m2!1sen!2sin!4v1771327734256!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>

          {/* Optional Creative Overlay */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg">Right Enterprises</h4>
            <p className="text-sm text-gray-600">
              Chennai, Tamil Nadu, India
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}