"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  IoArrowForward,
  IoCalendarOutline,
  IoPeopleOutline,
  IoCodeSlashOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import Chatbot from "./components/Chatbot";
import { PulseCard } from "./components/PulseCard";
import { Zap, Target, Gem, Eye, Network as NetworkIcon } from "lucide-react";
import { MinimalistGlassCard } from "./components/MinimalistGlassCard";
import CircularGallery from "@/components/CircularGallery";
import { motion } from "framer-motion";
import Script from "next/script";
const Page = () => {
  // Counter state for animation
  const [counters, setCounters] = useState({
    members: 0,
    events: 0,
    domains: 0,
  });

  const stats = [
    {
      key: "members",
      icon: <IoPeopleOutline size={24} />,
      number: 200,
      label: "Members",
    },
    {
      key: "events",
      icon: <IoCalendarOutline size={24} />,
      number: 50,
      label: "Events",
    },
    {
      key: "domains",
      icon: <IoCodeSlashOutline size={24} />,
      number: 5,
      label: "Domains",
    },
  ];

  const features = [
    {
      title: "Learn",
      description:
        "Master cutting-edge technologies with hands-on workshops and expert-led sessions.",
      icon: "📚",
    },
    {
      title: "Build",
      description:
        "Create innovative projects and contribute to open-source initiatives.",
      icon: "🛠️",
    },
    {
      title: "Network",
      description:
        "Connect with like-minded developers and industry professionals.",
      icon: "🤝",
    },
  ];

  // Animated counter effect
  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
          start += Math.ceil(end / 100);
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCounters((prev) => ({
            ...prev,
            [stat.key]: start,
          }));
        }, stepTime);
      });
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What is GDG TSEC?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "GDG TSEC is the Google Developer Groups chapter at Thadomal Shahani Engineering College. We're a community of passionate developers, designers, and tech enthusiasts who come together to learn, build, and grow with Google's latest technologies."
              }
            }, {
              "@type": "Question",
              "name": "Who can join GDG TSEC?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "GDG TSEC is open to all students and tech enthusiasts of TSEC regardless of their experience level."
              }
            }, {
              "@type": "Question",
              "name": "What kind of events do we organize?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We organize technical workshops, hackathons, speaker sessions, study jams, and networking events covering Android, Web Development, Cloud, AI/ML, and more."
              }
            }, {
              "@type": "Question",
              "name": "Do I need to pay to join GDG TSEC?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, joining GDG TSEC is completely free! All our events and workshops are also free of cost."
              }
            }]
          })
        }}
      />
    <div className="relative text-white overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-red-900/8"></div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center px-2 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/20" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center mt-5 lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">
                Official GDG Chapter
              </span>
            </div>

            <div className="overflow-hidden mb-4 sm:text-left ">
              <h1 className="text-5xl  md:text-6xl lg:text-7xl font-bold leading-tight ">
                <span className="text-blue-500">LEARN, </span>
                <span className="text-red-500">BUILD, </span>
                <span className="text-yellow-500">GROW</span>
              </h1>
              <span className="text-4xl font-bold  leading-tight text-left">
                with
              </span>
            </div>

            <div className="bg-white/10 rounded-3xl w-full sm:w-[500px] p-3 py-6 sm:p-5 sm:gap-4 items-center mb-8 flex  sm:flex-row backdrop-blur-sm gap-5">
              <img
                src="/Logo.png"
                
                alt="GDG TSEC Banner"
                className="w-[80px] h-[40px] sm:w-[90px] sm:h-[50px] "
              />
              
              <div className="">
                <h1 className="text-[18px] sm:text-[25px]">
                  Google Developer Groups
                </h1>
                <h1 className="text-blue-300 text-[13px] sm:text-lg">
                  Thadomal Shahani Engineering College
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-blue-400 mb-2 flex justify-center lg:justify-start group-hover:text-blue-300 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {counters[stat.key]}+
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-md shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <Image
                      src="/Logo.png"
                      alt="GDG TSEC Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">GDG TSEC</h3>
                    <p className="text-white text-sm">
                      Google Developer Groups
                    </p>
                    <p className="text-blue-300 text-xs">
                      Thadomal Shahani Engineering College
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <span className="text-2xl">{feature.icon}</span>
                      <div>
                        <h4 className="font-semibold text-white text-sm">
                          {feature.title}
                        </h4>
                        <p className="text-gray-300 text-xs">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Powered by</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold text-sm">
                        Google
                      </span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-500/20 rounded-full blur-xl animate-pulse delay-1000" />
              <div className="absolute top-1/2 -left-6 w-12 h-12 bg-yellow-500/20 rounded-full blur-lg animate-pulse delay-500" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 lg:left-[55%] transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs font-medium opacity-75">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center backdrop-blur-sm bg-white/5 shadow-lg">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-500 via-red-500 to-yellow-500 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/20">
        <div className="max-w-6xl  mx-auto text-center ">
          <motion.h1
            className="text-5xl  lg:text-6xl font-extrabold mb-6 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What is <span className="text-blue-400">G</span>
            <span className="text-yellow-400">D</span>
            <span className="text-red-400">G</span>?
          </motion.h1>
          <p className="text-gray-300 text-xl  lg:text-2xl leading-relaxed mb-8">
            We are a community of passionate developers, designers, and tech
            enthusiasts building together under the Google Developer Groups
            banner.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div
              className="block lg:hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MinimalistGlassCard
                icon={<Target />}
                title="Mission"
                description="Empower Students to learn and grow together."
                variant="amber"
                size="lg"
              />
            </motion.div>
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PulseCard
                icon={<Target />}
                title="Mission"
                description="Empower Students to learn and grow together."
                variant="amber"
                size="lg"
                glowEffect={true}
              />
            </motion.div>

            {/* Values Card */}
            <motion.div
              className="block lg:hidden"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MinimalistGlassCard
                icon={<Gem />}
                title="Values"
                description="Guided by values driven by purpose."
                variant="blue"
                size="lg"
              />
            </motion.div>
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PulseCard
                icon={<Gem />}
                title="Values"
                description="Guided by values driven by purpose."
                variant="blue"
                size="lg"
                glowEffect={true}
              />
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="block lg:hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MinimalistGlassCard
                icon={<Eye />}
                title="Vision"
                description="Build impactful projects and faster collaboration."
                variant="emerald"
                size="lg"
              />
            </motion.div>
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PulseCard
                icon={<Eye />}
                title="Vision"
                description="Build impactful projects and faster collaboration."
                variant="emerald"
                size="lg"
                glowEffect={true}
              />
            </motion.div>

            {/* Network Card */}
            <motion.div
              className="block lg:hidden"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MinimalistGlassCard
                icon={<NetworkIcon />}
                title="Network"
                description="Build connections and grow together."
                variant="rose"
                size="lg"
              />
            </motion.div>
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PulseCard
                icon={<NetworkIcon />}
                title="Network"
                description="Build connections and grow together."
                variant="rose"
                size="lg"
                glowEffect={true}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}

      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/20 text-center sm:px-6 lg:px-8">
        <div style={{ height: "600px", position: "relative" }}>
          <motion.h1
            className="text-5xl  lg:text-6xl font-extrabold mb-6 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            The <span className="text-blue-500">G</span>
            <span className="text-yellow-500">D</span>
            <span className="text-red-500">G</span> Lens
          </motion.h1>

          <p className="text-gray-300 text-xl  lg:text-2xl leading-relaxed mb-8 font-extrabold">
            Through the Lens : Glimpses of What Makes{" "}
            <span className="text-blue-500">G</span>
            <span className="text-yellow-500">D</span>
            <span className="text-red-500">G</span> Special
          </p>

          <CircularGallery
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.04}
          />
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto relative z-10 from-blue-900/20 via-transparent to-red-900/20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-200" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-400" />
              </div>
              <span className="text-white font-medium">
                Got Questions? We've Got Answers!
              </span>
            </div>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white">Frequently Asked </span>
              <span className="text-blue-500">Q</span>
              <span className="text-red-500">u</span>
              <span className="text-yellow-500">e</span>
              <span className="text-blue-500">s</span>
              <span className="text-red-500">t</span>
              <span className="text-yellow-500">i</span>
              <span className="text-blue-500">o</span>
              <span className="text-red-500">n</span>
              <span className="text-yellow-500">s</span>
            </motion.h2>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-blue-500/20 overflow-hidden transition-all duration-300 hover:border-blue-500/40">
              <button
                onClick={() => {
                  const content = document.getElementById("faq-1");
                  const icon = document.getElementById("icon-1");
                  if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    icon.style.transform = "rotate(0deg)";
                  } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.style.transform = "rotate(45deg)";
                  }
                }}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    What is GDG TSEC?
                  </h3>
                  <div
                    id="icon-1"
                    className="text-blue-500 transition-transform duration-300"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5V19M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              <div
                id="faq-1"
                className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-blue-500/20 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      GDG TSEC is the Google Developer Groups chapter at
                      Thadomal Shahani Engineering College. We're a community of
                      passionate developers, designers, and tech enthusiasts who
                      come together to learn, build, and grow with Google's
                      latest technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-red-500/20 overflow-hidden transition-all duration-300 hover:border-red-500/40">
              <button
                onClick={() => {
                  const content = document.getElementById("faq-2");
                  const icon = document.getElementById("icon-2");
                  if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    icon.style.transform = "rotate(0deg)";
                  } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.style.transform = "rotate(45deg)";
                  }
                }}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    Who can join GDG TSEC?
                  </h3>
                  <div
                    id="icon-2"
                    className="text-red-500 transition-transform duration-300"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5V19M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              <div
                id="faq-2"
                className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-red-500/20 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      GDG TSEC is open to all students,tech enthusiasts of Tsec
                      regardless of their experience level. Whether you're a
                      beginner just starting your coding journey or an
                      experienced developer, you're welcome to join our
                      community.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-yellow-500/20 overflow-hidden transition-all duration-300 hover:border-yellow-500/40">
              <button
                onClick={() => {
                  const content = document.getElementById("faq-3");
                  const icon = document.getElementById("icon-3");
                  if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    icon.style.transform = "rotate(0deg)";
                  } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.style.transform = "rotate(45deg)";
                  }
                }}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    What kind of events do we organize?
                  </h3>
                  <div
                    id="icon-3"
                    className="text-yellow-500 transition-transform duration-300"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5V19M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              <div
                id="faq-3"
                className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-yellow-500/20 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      We organize a variety of events including technical
                      workshops, hackathons, speaker sessions, study jams, and
                      networking events. Our events cover various Google
                      technologies like Android, Web Development, Cloud, AI/ML,
                      and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-green-500/20 overflow-hidden transition-all duration-300 hover:border-green-500/40">
              <button
                onClick={() => {
                  const content = document.getElementById("faq-4");
                  const icon = document.getElementById("icon-4");
                  if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    icon.style.transform = "rotate(0deg)";
                  } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.style.transform = "rotate(45deg)";
                  }
                }}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    Do I need to pay to join GDG TSEC?
                  </h3>
                  <div
                    id="icon-4"
                    className="text-green-500 transition-transform duration-300"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5V19M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              <div
                id="faq-4"
                className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-green-500/20 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      No, joining GDG TSEC is completely free! All our events
                      and workshops are also free of cost. We believe in making
                      technology education accessible to everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-6">
                Feel free to reach out to us. We're here to help!
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                    Contact Us
                    <IoArrowForward />
                  </button>
                </Link>

                <Link
                  href="https://gdg.community.dev/gdg-on-campus-thadomal-shahani-engineering-college-mumbai-india/"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full border-2 border-white/20 hover:border-white/40 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:bg-white/5">
                    Join Community
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>

  );
};

export default Page;
