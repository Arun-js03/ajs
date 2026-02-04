"use client";

import { WhatsappIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Twitter,
  X,
} from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AnimatedSocialIcon from "@/components/ui/animated-social-icon";
import { Button } from "@/components/ui/button";
import { imageConfig } from "@/lib/imageConfig";
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menu = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Our Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Clients", path: "/clients" },
    { label: "Plugins", path: "/plugins" },
    { label: "Blog", path: "/blog" },
  ];
  return (
    <header className="w-full">
      {/* ---------- TOP BAR ---------- */}
      <div className="">
        {/* Left Social Icons */}
        <div className="bg-[#4C3F3C] text-white hidden lg:block">
          <div className="container mx-auto flex justify-between items-center py-2 text-base px-9!">
            <div className="flex gap-4 ">
              <AnimatedSocialIcon href="https://www.facebook.com/zinavopvtltd/">
                <Facebook
                  size={20}
                  className="cursor-pointer hover:text-red-500"
                />
              </AnimatedSocialIcon>
              <AnimatedSocialIcon href="https://www.instagram.com/zinavopvtltd/">
                <Instagram
                  size={20}
                  className="cursor-pointer hover:text-red-500"
                />
              </AnimatedSocialIcon>
              <AnimatedSocialIcon href="https://x.com/Zinavogroup">
                <Twitter
                  size={20}
                  className="cursor-pointer hover:text-red-500"
                />
              </AnimatedSocialIcon>
              <AnimatedSocialIcon href="https://www.linkedin.com/company/zinavo/mycompany/">
                <Linkedin
                  size={20}
                  className="cursor-pointer hover:text-red-500"
                />
              </AnimatedSocialIcon>
            </div>
            {/* Right Side Info */}
            <div className="flex gap-6 items-center">
              <div className=" cursor-pointer">
                <AnimatedSocialIcon href="mailto:info@zinavo.com">
                  <Link
                    href="mailto:info@zinavo.com"
                    className="flex items-center gap-1"
                  >
                    <Mail size={18} /> info@zinavo.com
                  </Link>
                </AnimatedSocialIcon>
              </div>

              <div className="flex items-center gap-1">
                <AnimatedSocialIcon href="tel:+918035694395">
                  <Link
                    href="tel:+918035694395"
                    className="flex items-center gap-1"
                  >
                    <Phone size={18} />
                    +91 8035694395
                  </Link>
                </AnimatedSocialIcon>
              </div>

              <div className="flex items-center gap-1">
                <AnimatedSocialIcon href="https://wa.me/917760245945">
                  {" "}
                  <Link
                    href="https://wa.me/917760245945"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <HugeiconsIcon icon={WhatsappIcon} size={18} /> +91
                    7760245945
                  </Link>
                </AnimatedSocialIcon>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MAIN NAVBAR ---------- */}
      <div className="absolute md:top-10 top-3 left-0 w-full z-50 px-4">
        <div className="container mx-auto relative flex items-center justify-between py-4 rounded-2xl border-white border backdrop-blur-md">
          <div className="pl-6">
            <Image
              src={imageConfig.url("/logo.png")}
              width={200}
              height={200}
              alt="Zinavo - Web Design & Development Company Logo"
              className="w-40 md:w-50 h-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex gap-6 pr-6 items-center font-medium text-white">
            {menu.map((item) => (
              <Link
                key={item.path}
                href={item.path as Route}
                className={`
                px-4 py-1 rounded-lg transition
                hover:bg-white/20
                ${
                  pathname === item.path
                    ? "bg-white/10 text-primary border-white/30 border"
                    : ""
                }
              `}
              >
                {item.label}
              </Link>
            ))}
            <div>
              <Link href={"/contact-us" as Route} className="cursor-pointer">
                <Button className="group relative px-4 py-2 rounded-xl text-base cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                    Contact Us
                  </span>
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden pr-6">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full mt-2 xl:hidden z-50">
              <div className="bg-[#4C3F3C]/95 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl flex flex-col gap-3 text-white">
                {menu.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path as Route}
                    className={`
                      px-4 py-3 rounded-xl transition text-lg font-medium
                      ${
                        pathname === item.path
                          ? "bg-white/20 border-white/30 border"
                          : "hover:bg-white/10"
                      }
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2">
                  <Link
                    href={"/contact-us" as Route}
                    className="cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full py-6 text-lg rounded-xl group relative overflow-hidden transition-all duration-300">
                      <span className="relative z-10">Contact Us</span>
                      <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
