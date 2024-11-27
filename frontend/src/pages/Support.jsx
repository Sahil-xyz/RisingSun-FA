import React, { useState } from "react";
import emailjs from "emailjs-com"
import toast from 'react-hot-toast'

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [IsSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_1uzvuz7", // Replace with your EmailJS service ID
        "template_0igtl6k", // Replace with your EmailJS template ID
        formData,
        "IrejY7GeiSLe31_gH" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log(formData)
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
          toast.success("Message send successfully...")
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className="bg-white text- min-h-screen p-8">
      <div className="container mx-auto space-y-12">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-6xl font-ptsans font-bold mb-4 bg-gradient-to-br from-red-500 to-red-900 bg-clip-text text-transparent">
            Support Center
          </h1>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Need assistance? Browse our FAQs or reach out to our support team.
            We’re here to help!
          </p>
        </section>

        {/* FAQ Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-semibold bg-gradient-to-tr from-slate-900 to-zinc-400 bg-clip-text text-transparent text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-gray-200 p-4 rounded-lg">
              <summary className="font-semibold text-slate-950">
                What are the academy’s membership fees?
              </summary>
              <p className="text-gray-900 mt-2">
                Our membership fees vary by program. Please contact us for
                details.
              </p>
            </details>
            <details className="bg-gray-200 p-4 rounded-lg">
              <summary className="font-semibold text-slate-950">
                What should I bring to training sessions?
              </summary>
              <p className="text-gray-900 mt-2">
                Bring your sports gear, water bottle, and a positive attitude!
              </p>
            </details>
            <details className="bg-gray-200 p-4 rounded-lg">
              <summary className="font-semibold text-slate-950">
                How can I register my child for the academy?
              </summary>
              <p className="text-gray-900 mt-2">
                You can register online through our website or visit us at the
                academy to complete the registration process in person.
              </p>
            </details>

            <details className="bg-gray-200 p-4 rounded-lg">
              <summary className="font-semibold text-slate-950">
                What is the academy's refund policy?
              </summary>
              <p className="text-gray-900 mt-2">
                Refunds are provided based on our policy, which varies by
                program. Please contact support for specific details.
              </p>
            </details>

            <details className="bg-gray-200 p-4 rounded-lg">
              <summary className="font-semibold text-slate-950">
                Are there training sessions available on weekends?
              </summary>
              <p className="text-gray-900 mt-2">
                Yes, we offer weekend sessions. Check our schedule or reach out
                to us for timing and availability.
              </p>
            </details>

            <details className="bg-gray-200 p-4 rounded-lg">
              <summary className="font-semibold text-slate-950">
                Does the academy provide uniforms?
              </summary>
              <p className="text-gray-900 mt-2">
                Yes, uniforms are provided for enrolled members. Speak with our
                support team for more details.
              </p>
            </details>

            <details className="bg-gray-200 p-4 rounded-lg">
              <summary className="font-semibold text-slate-950">
                How are parents informed about the academy’s events and updates?
              </summary>
              <p className="text-gray-900 mt-2">
                We send out newsletters, emails, and post updates on our social
                media channels to keep parents informed.
              </p>
            </details>

            <details className="bg-gray-200 p-4 rounded-lg">
              <summary className="font-semibold text-slate-950">
                Can I tour the academy facilities before enrolling?
              </summary>
              <p className="text-gray-900 mt-2">
                Yes, you can book a tour of our facilities by contacting our
                support team in advance.
              </p>
            </details>
            {/* Add more FAQ entries as needed */}
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-semibold bg-gradient-to-tr from-slate-900 to-zinc-400 bg-clip-text text-transparent text-center">
            Contact Support
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-gray-200 p-6 rounded-lg shadow-lg space-y-4"
            >
              <div>
                <label className="block text-gray-900 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-100 rounded-lg text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-100 rounded-lg text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-100 rounded-lg text-gray-900"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 p-2 rounded-lg font-bold text-gray-900 hover:bg-gradient-to-r hover:from-violet-700 hover:to-indigo-700"
              >
                Submit
              </button>
            </form>

            {/* Contact Information */}
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-tr from-slate-900 to-zinc-400 bg-clip-text text-transparent">
                Reach Us
              </h3>
              <p className="text-black">Phone: +91 8369419545</p>
              <p className="text-black">Email: risingsunfa@gmail.com</p>
              <p className="text-black">
                Follow us on social media for updates!
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                {/* Social Media Icons */}
                <a href="https://www.linkedin.com/search/results/all/?keywords=rising%20sun%20football&origin=GLOBAL_SEARCH_HEADER&sid=N%3AX" className="text-fuchsia-500 hover:text-fuchsia-600">
                  Linkedin
                </a>
                <a href="https://www.instagram.com/risingsunfa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-fuchsia-500 hover:text-fuchsia-600">
                  Instagram
                </a>
                <a href="https://youtube.com/@risingsunfa9600?si=33EMLaSDes1VGuSl" className="text-fuchsia-500 hover:text-fuchsia-600">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="bg-futext-fuchsia-600 p-8 rounded-lg shadow-lg text-center bg-slate-200">
          <h2 className="text-3xl font-bold text-gray-900">
            We Value Your Feedback
          </h2>
          <p className="text-lg text-gray-800 mt-4 max-w-3xl mx-auto">
            Help us improve by sharing your thoughts about our support
            experience!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Support;
