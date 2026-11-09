"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import {
  IoHomeOutline,
  IoInformationCircleOutline,
  IoPeopleOutline,
  IoCalendarOutline,
  IoMailOutline,
  IoTrophyOutline,
} from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  
  const navLinks = [
    { name: "Home", href: "/", icon: <IoHomeOutline size={20} /> },
 
    { name: "Teams", href: "/teams", icon: <IoPeopleOutline size={20} /> },
    { name: "Events", href: "/events", icon: <IoCalendarOutline size={20} /> },
    { name: "Sponsors", href: "/sponsors", icon: <IoTrophyOutline size={20} /> },
    { name: "Contact", href: "/contact", icon: <IoMailOutline size={20} /> },
  ];

  return (
    <>
      
      <nav
        className={cn(
          "site-nav fixed z-50 w-[95%] top-4 rounded-2xl -translate-x-1/2 left-1/2 border-b border-white/10 bg-black/50 backdrop-blur-xl", // Base styles for mobile
          "md:top-4 md:left-1/2 md:w-[65%] md:-translate-x-1/2 lg:rounded-full md:border" // Overrides for desktop
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          
          <Link href="/" className="flex items-center gap-2">
            <Image src="/Logo.png" alt="Website Logo" width={45} height={15} />
            <span className="brand-name text-white">GDG TSEC</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-2  rounded-full px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white",
                  pathname === link.href && "bg-white/10 text-white"
                )}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          
          <div className="flex items-center gap-1">
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="relative z-50  inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-300 hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative h-5 w-5">
               
                <span
                  className={cn(
                    "absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out top-1/2 -translate-y-1/2",
                    isOpen ? "rotate-45" : "-translate-y-1.5"
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out top-1/2 -translate-y-1/2",
                    isOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out top-1/2 -translate-y-1/2",
                    isOpen ? "-rotate-45" : "translate-y-1.5"
                  )}
                />
              </div>
            </button>
          </div>
          </div>
        </div>
      </nav>
    
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

     
      <div
        className={cn(
          "site-menu fixed left-1/2 top-25 z-50 w-[95%] sm:w-[65%] -translate-x-1/2 rounded-2xl border border-white/50 bg-black/50 backdrop-blur-xl  transition-all duration-300 ease-out lg:hidden",
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        )}
      >
        <div className="p-6  ">
         
          <nav className="flex flex-col gap-1 pt-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-lg p-3 text-gray-300 transition-all duration-200 hover:bg-white/10 hover:text-white",
                  "transform transition-all duration-200",
                  pathname === link.href && "bg-white/15 text-white",
                 
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                )}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <div className="flex items-center gap-3">
                  {link.icon}
                  <span className="font-medium">{link.name}</span>
                </div>
               
                <span
                  className={cn(
                    "h-2 w-2 rounded-full bg-white transition-all duration-200",
                    pathname === link.href
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75"
                  )}
                />
              </Link>
            ))}
          </nav>

          
          <div className="pt-4 mt-4 border-t border-white/10">
            <p className="text-xs text-gray-500 text-center">GDG TSEC © 2025</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
