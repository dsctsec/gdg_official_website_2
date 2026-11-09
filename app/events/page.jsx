"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Script from "next/script";
export default function EventsPage() {
  const events = [
    {
      link:"https://hacksync-2026.vercel.app/",
      status: "Register Now",
      date: "January, 2026",
      title: "Hacksync 2.0",
      color: "bg-green-500",
      imgSrc: "/events/staytuned.jpeg", // your custom image path here
      details:
        "A 24-hour non-stop hackathon bringing together the brightest minds to build, innovate, and collaborate. Teams will tackle real-world challenges across various domains.",
    },
    {
      status: "UPCOMING",
      date: "March, 2026",
      title: "Mock-upp 3.0",
      color: "bg-yellow-500",
      imgSrc: "/events/staytuned.jpeg",
      details:
        "A frontend-focused hackathon where creativity meets usability. Participants will bring design ideas to life with code in an intense, design-first coding sprint.",
    },
    {
      status: "PAST",
      date: "11 March 2025",
      title: "Mock-upp 2.0",
      color: "bg-red-500",
      imgSrc: "/events/mockupp2.jpeg",
      details:
        "A 5-hour frontend hackathon centered on user experience and rapid prototyping. Designers and developers joined forces to build sleek, functional interfaces in record time.",
    },
    {
      link:"https://hacksync25.netlify.app/",
      status: "PAST",
      date: "February 2025",
      title: "Hacksync",
      color: "bg-blue-500",
      imgSrc: "/events/hacksync.jpeg",
      details:
        "A 48-hour long AI/ML hackathon that challenged participants to solve cutting-edge problems. From intelligent chatbots to data-driven insights, innovation was at the heart of every submission.",
    },
    {
      status: "PAST",
      date: "28 December 2024",
      title: "Tech Winter Break",
      color: "bg-blue-500",
      imgSrc: "/events/winterbreak.jpeg",
      details:
        "An immersive online Web Development workshop to help developers turn ideas into interactive, responsive websites. Participants explored modern tools and frameworks over a winter break packed with code.",
    },
    {
      status: "PAST",
      date: "9 November 2024",
      title: "Build With AI",
      color: "bg-blue-500",
      imgSrc: "/events/buildai.jpeg",
      details:
        "An online AI workshop focused on the capabilities of LLMs. Attendees engaged in live fine-tuning of the Gemma 2 2B model and competed in hands-on coding challenges.",
    },
    {
      status: "PAST",
      date: "7 April 2024",
      title: "Mock upp",
      color: "bg-blue-500",
      imgSrc: "/events/mockupp.jpeg",
      details:
        "An online frontend hackathon with a strong emphasis on design thinking. Participants turned mockups into reality with clean, interactive, and accessible UI designs.",
    },
    {
      status: "PAST",
      date: "18 February 2024",
      title: "Unlocking Intelligence",
      color: "bg-blue-500",
      imgSrc: "/events/unlockint.jpeg",
      details:
        "A thrilling exploration into the future of artificial intelligence. The event featured talks, demos, and discussions about emerging trends and the ethical impact of intelligent systems.",
    },
  ];

  const data = events.map((event, index) => {
  return {
    key: index,
    status: event.status,
    date: event.date,
    title: event.title,
    details: event.details,
    href: event.link,
    image: <div className="event-image-wrap" style={{ "--event-image": `url('${event.imgSrc}')` }}><img src={event.imgSrc} alt={`Image for ${event.title}`} className="event-frame-image" /></div>,
    cta: event.link ? <span className="event-cta">Explore event <span aria-hidden="true">↗</span></span> : null,
  };
});

  return (
    <>
    <Script
        id="events-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": events.map((event, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Event",
                "name": event.title,
                "description": event.details,
                "startDate": event.date,
                "eventStatus": event.status === "UPCOMING" 
                  ? "https://schema.org/EventScheduled" 
                  : "https://schema.org/EventPast",
                "location": {
                  "@type": "Place",
                  "name": "Thadomal Shahani Engineering College",
                  "address": "Mumbai, India"
                },
                "image": `https://gdgtsecoffical.dpdns.org${event.imgSrc}`,
                "organizer": {
                  "@type": "Organization",
                  "name": "GDG TSEC"
                }
              }
            }))
          })
        }}
      />
    <section className="events-page relative min-h-screen px-4 pt-20 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/20">
      <div className="relative w-full overflow-clip px-1 py-8 md:px-4 md:py-12">
        <Timeline data={data} />
       
      </div>
    </section>
    </>
  );
}
