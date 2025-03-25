import { useState } from "react";
import Navbar from "./Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = new FormData();
    form.append("access_key", "235a0533-539d-4808-b7e0-032a5a6462dd");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const result = await res.json();
    if (result.success) {
      setStatus("Message sent successfully!");
      setTimeout(()=>{},2000)
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center mt-15 min-h-screen bg-pink-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-2xl font-semibold text-center text-pink-500">Contact Us</div>
        <p className="text-gray-500 text-center mb-6 pt-3 pb-3">
          Have any questions or feedback? Feel free to reach out to us!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:ring focus:ring-pink-200"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-pink-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-pink-200"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition"
          >
            Send Message
          </button>

          {status && <p className="text-center mt-2 text-gray-600">{status}</p>}
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
