"use client";
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted ");
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Phone:", formData.phone);
    console.log("Message:", formData.message);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 sm:p-8 md:p-10 bg-[#131332] rounded-lg"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full 
        placeholder:text-white/70 focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full 
        placeholder:text-white/70 focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Mobile Number"
        value={formData.phone}
        onChange={handleChange}
        className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full 
        placeholder:text-white/70 focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        value={formData.message}
        onChange={handleChange}
        className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full 
        placeholder:text-white/70 h-[10rem] focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
      />
      <button
        type="submit"
        className="mt-8 px-12 py-5 bg-blue-950 hover:bg-blue-800 text-white 
        rounded-full cursor-pointer transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
