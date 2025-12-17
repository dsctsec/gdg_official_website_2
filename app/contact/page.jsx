"use client"  ;

import React, { useState } from "react";
import {
  IoMailOutline,
  IoLocationOutline,
  IoLogoLinkedin,
  IoSend,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
const ContactPage = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(e.target),
      });

      const result = await response.json();
      setStatus(result.success ? "success" : "error");

      if (result.success) {
        e.target.reset();
        setTimeout(() => setStatus("idle"), 2000);
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
    <Script
  id="contact-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "GDG TSEC",
        "email": "dsctsec@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN",
          "streetAddress": "Thadomal Shahani Engineering College, Bandra West"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "General Inquiries",
          "email": "dsctsec@gmail.com"
        }
      }
    })
  }}
/>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/20 text-white px-2 py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 mt-5">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
              <div className="flex gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-200" />
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-400" />
            </div>
            <span className="text-blue-300 text-sm font-medium">
              Let's Connect
            </span>
          </div>

          <motion.h1
            className="text-5xl lg:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-500">Get </span>
            <span className="text-red-500">In </span>
            <span className="text-yellow-500">Touch</span>
          </motion.h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a question or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              Let's Start a <span className="text-blue-400">Conversation</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Fill up the form and our team will get back to you within 24
              hours.
            </p>

            <div className="space-y-4">
              <Link
                href="https://www.linkedin.com/company/gdg-tsec/?originalSubdomain=in"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-all group"
              >
                <IoLogoLinkedin className="text-blue-400" size={20} />
                <div>
                  <div className="text-white font-semibold">LinkedIn</div>
                  <div className="text-blue-300 text-sm">
                    Follow our updates
                  </div>
                </div>
              </Link>

              <Link
                href="mailto:dsctsec@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-all group"
              >
                <IoMailOutline className="text-red-400" size={20} />
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-red-300 text-sm">dsctsec@gmail.com</div>
                </div>
              </Link>
              <Link
                href="https://chat.whatsapp.com/BsLBWWGIAcz379C9BSRuIM"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-all group"
              >
                <IoLogoWhatsapp className="text-green-400" size={20} />
                <div>
                  <div className="text-white font-semibold">WhatsApp Group</div>
                  <div className="text-green-300 text-sm">
                    Join our WhatsApp community
                  </div>
                </div>
              </Link>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 hover:bg-yellow-500/20 transition-all group">
                <IoLocationOutline className="text-yellow-400" size={20} />
                <div>
                  <div className="text-white font-semibold">Location</div>
                  <div className="text-yellow-300 text-sm">
                    TSEC, Bandra West, Mumbai
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="access_key"
                value={process.env.NEXT_PUBLIC_API_KEY}
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name *"
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address *"
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
              />

              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your Message *"
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 resize-none"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                  status === "loading"
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"
                }`}
              >
                {status === "loading" ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <IoSend />
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center">
                  ✅ Message sent successfully!
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center">
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
        

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-blue-500">Find</span>{" "}
            <span className="text-red-500">Our</span>{" "}
            <span className="text-yellow-500">Campus</span>
          </h2>
          <p className="text-gray-300 mb-8">Visit us at TSEC, Mumbai</p>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d120671.48411950935!2d72.75345847992571!3d19.064446407214863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sAdvocate%20Nari%20Gursahani%20Marg%2C%2037th%20Rd%2C%20off%20Linking%20Road%2C%20TPS%20III%2C%20Bandra%20West%2C%20Mumbai%2C%20400050!3m2!1d19.0644642!2d72.8358329!5e0!3m2!1sen!2sin!4v1756120463116!5m2!1sen!2sin"
              className="rounded-2xl w-full h-[350px] border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>
        
      </div>
    </div>
    </>
  );
};

export default ContactPage;
