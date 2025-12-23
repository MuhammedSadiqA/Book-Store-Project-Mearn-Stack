import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../../components/Footer";


export default function Contact() {
  return (

    <div>
      <Header></Header>
      <div className="w-full px-4 md:px-10 py-10">
        
        
        {/* Page Title */}
        <h2 className="text-center text-3xl font-semibold mb-3">Contacts</h2>
  
        {/* Page Description */}
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10">
          If you have any inquiries regarding our books, services, events, or partnerships, feel free to contact us.
          Our support team strives to respond as quickly as possible.
            You can reach us via phone, email, or by visiting our store.
              Use the contact form below for general questions or feedback.
        </p>
  
        {/* Icons Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          
          {/* Address */}
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 rounded-full bg-gray-200">
              <FaMapMarkerAlt className="text-gray-700 text-xl" />
            </div>
            <p className="text-gray-700 text-sm">
              123 Main Street, Apt 4B,<br /> Anytown, CA 91234
            </p>
          </div>
  
          {/* Phone */}
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 rounded-full bg-gray-200">
              <FaPhoneAlt className="text-gray-700 text-xl" />
            </div>
            <p className="text-gray-700 text-sm">+91 9874561230</p>
          </div>
  
          {/* Email */}
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 rounded-full bg-gray-200">
              <FaEnvelope className="text-gray-700 text-xl" />
            </div>
            <p className="text-gray-700 text-sm">Bookstore@gmail.com</p>
          </div>
        </div>
  
        {/* Form + Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* FORM CARD */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-center font-semibold mb-4">Send me Message</h3>
  
            <div className="flex flex-col gap-4">
              <input
                placeholder="Name"
                className="px-4 py-2 text-sm bg-white rounded border border-gray-300"
              />
  
              <input
                placeholder="Email ID"
                className="px-4 py-2 text-sm bg-white rounded border border-gray-300"
              />
  
              <textarea
                placeholder="message"
                className="px-4 py-2 text-sm h-28 bg-white rounded border border-gray-300"
              ></textarea>
  
              <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 rounded flex items-center justify-center gap-2">
                Send <FaPaperPlane />
              </button>
            </div>
          </div>
  
      
        {/* GOOGLE MAP */}
  <div className="w-full h-full">
    <div className="w-full h-full min-h-[350px] bg-gray-200 rounded-lg shadow-md overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.78219958892!2d76.30829335!3d9.970874599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d08f976f3a9%3A0xe9cdb444f06ed454!2sErnakulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1764166644445!5m2!1sen!2sin"
        className="w-full h-full"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  
  
        </div>
        
      </div>
      <Foooter/>
    </div>
  );
}