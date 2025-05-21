"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    {
      name: "أنـــــــواع الإعـــــلانات التي نقــــــدمها",
      href: "/projects",
    },
    { name: "تواصل معنا", href: "/contact" },
  ];

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(
        !(prevScrollPos < currentScrollPos && currentScrollPos > 100)
      );
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!document.querySelector(".animate-spin-slow")) {
      const style = document.createElement("style");
      style.innerHTML = `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 1s linear;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const socialLinks = [
    {
      icon: <FaFacebookF size={20} className="text-white" />,
      href: "https://facebook.com",
      label: "فيسبوك",
    },
    {
      icon: <FaInstagram size={20} className="text-white" />,
      href: "https://instagram.com",
      label: "انستاجرام",
    },
    {
      icon: <FaSnapchatGhost size={20} className="text-white" />,
      href: "https://snapchat.com",
      label: "سنابشات",
    },
    {
      icon: <FaTwitter size={20} className="text-white" />,
      href: "https://twitter.com",
      label: "تويتر",
    },
  ];

  return (
    <>
      <div
        className={cn(
          "fixed w-full bg-primary shadow-md transition-transform duration-300 ease-in-out z-50",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Button
              className="!p-0 w-fit hover:scale-110 transition-all duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <FaTimes size={36} className="text-white animate-spin-slow" />
              ) : (
                <FaBars
                  size={36}
                  className="text-white hover:rotate-12 transition-transform duration-300"
                />
              )}
            </Button>
            <Link href="/" className="flex items-center flex-shrink-0">
              <span className="text-xl font-bold text-white">Prime</span>
            </Link>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-125 transition-transform duration-200"
                  onClick={() => console.log(`${label} clicked`)}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* menu-open*/}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-full bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="h-full w-full flex flex-col justify-center items-center">
          {links.map((link, index) => (
            <div
              key={link.name}
              className={cn(
                "transform transition-all duration-500 ease-out overflow-hidden",
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0",
                "transition-delay-" + index * 100
              )}
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                opacity: isOpen ? 1 - index * 0.15 : 0,
              }}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "relative block text-white text-4xl font-bold mb-8 px-4 py-2 hover:text-secondary transition-colors group",
                  pathname === link.href && "text-secondary"
                )}
              >
                <span>{link.name}</span>
                
                {/* Glow effect on hover */}
                <span className="absolute inset-0 rounded-lg bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
