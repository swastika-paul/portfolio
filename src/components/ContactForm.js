import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending:", formData);

    try {
      const response = await fetch(
        "https://portfolio-backend-zcho.onrender.com/api/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log("Response:", data);

      if (response.ok) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Cannot connect to the server. Is your backend running?");
    }
  };

  return (
    <div
      id="contact"
      className="flex justify-center items-center bg-slate-900 text-white px-10 py-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 rounded-md bg-slate-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 rounded-md bg-slate-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 rounded-md bg-slate-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;