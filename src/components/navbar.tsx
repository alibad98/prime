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
  FaWhatsapp,
} from "react-icons/fa";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logoWhite from "@/images/logo/wihte.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "الحملات الإعلانية", href: "/advertising-campaigns" },
    { name: "تصميم واجهة المستخدم (UI)", href: "/ui-ux-design" },
    { name: "خدمة تحسين محركات البحث (SEO)", href: "/seo-services" },
    { name: "صناعة المحتوى", href: "/content-creation" },
    { name: "تصميم موقع الكتروني احترافي", href: "/web-design" },
  ];

  const isHomePage = pathname === "/";

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
      href: "https://www.facebook.com/people/Prime-Agency/61568213612967/",
      label: "فيسبوك",
    },
    {
      icon: <FaInstagram size={20} className="text-white" />,
      href: "https://www.instagram.com/primeagency.sa/#",
      label: "انستاجرام",
    },
    {
      icon: <FaWhatsapp size={20} className="text-white" />,
      href: "https://api.whatsapp.com/send?phone=966559713394",
      label: "واتساب",
    },
  ];

  return (
    <>
      <div
        className={cn(
          "fixed w-full  transition-transform duration-300 ease-in-out z-200",
          isVisible ? "translate-y-0" : "-translate-y-full",
          isHomePage ? "shadow-none bg-transparent" : "shadow-md bg-primary"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-fit items-center">
            <Button
              className="!p-0 w-fit hover:scale-110 hover:bg-transparent bg-transparent transition-all duration-200 cursor-pointer [&_svg]:!size-8"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={36} className="text-white animate-spin-slow" />
              ) : (
                <Menu size={36} />
              )}
            </Button>
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image src={logoWhite} alt="Logo" width={100} height={100} />
            </Link>
            <div className="flex items-center gap-4 relative">
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
          "fixed top-0 left-0 h-full w-full bg-primary/80 [backdrop-filter:blur(24px)] z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="h-full w-full flex flex-col justify-center items-center">
          {links.map((link, index) => (
            <div
              key={link.name}
              className={cn(
                "transform transition-all duration-500 ease-out overflow-hidden border-b last:border-0 border-white/20 w-full text-center",
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0",
                "transition-delay-" + index * 100
              )}
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "relative block text-white lg:text-3xl text-xl font-bold md:my-6 my-4 px-4 py-2 hover:text-gold transition-colors group",
                  pathname === link.href && "text-gold"
                )}
              >
                <span>{link.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
