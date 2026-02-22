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
    { label: "About Us", path: "#" },
    { label: "Our Services", path: "#" },
    { label: "Portfolio", path: "#" },
    { label: "Clients", path: "#" },
    { label: "Plugins", path: "#" },
    { label: "Blog", path: "#" },
  ];
  return (
    <header className="w-full">
      {/* ---------- TOP BAR ---------- */}
      <div className="">
        {/* Left Social Icons */}
        <div className="bg-[#4C3F3C] text-white hidden lg:block">
          <div className="container mx-auto flex justify-between items-center py-2 text-base px-9!">
            <div className="flex gap-4 ">
              <AnimatedSocialIcon href="#">
                <Facebook
                  size={20}
                  className="cursor-pointer hover:text-red-500"
                />
              </AnimatedSocialIcon>
              <AnimatedSocialIcon href="#">
                <Instagram
                  size={20}
                  className="cursor-pointer hover:text-red-500"
                />
              </AnimatedSocialIcon>
              <AnimatedSocialIcon href="#">
                <Twitter
                  size={20}
                  className="cursor-pointer hover:text-red-500"
                />
              </AnimatedSocialIcon>
              <AnimatedSocialIcon href="#">
                <Linkedin
                  size={20}
                  className="cursor-pointer hover:text-red-500"
                />
              </AnimatedSocialIcon>
            </div>
            {/* Right Side Info */}
            <div className="flex gap-6 items-center">
              <div className=" cursor-pointer">
                <AnimatedSocialIcon href="#">
                  <Link href="#" className="flex items-center gap-1">
                    <Mail size={18} /> info@gmail.com
                  </Link>
                </AnimatedSocialIcon>
              </div>

              <div className="flex items-center gap-1">
                <AnimatedSocialIcon href="#">
                  <Link href="#" className="flex items-center gap-1">
                    <Phone size={18} />
                    +1234567890
                  </Link>
                </AnimatedSocialIcon>
              </div>

              <div className="flex items-center gap-1">
                <AnimatedSocialIcon href="#">
                  {" "}
                  <Link
                    href="#"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <HugeiconsIcon icon={WhatsappIcon} size={18} /> 1234567890
                  </Link>
                </AnimatedSocialIcon>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MAIN NAVBAR ---------- */}
      <div className="absolute md:top-10 top-3 left-0 w-full z-50 px-4">
        <div className="container mx-auto relative flex items-center justify-between rounded-2xl border-white border backdrop-blur-md">
          <div className="pl-6">
            <Image
              src={imageConfig.url("/dummy-logo-4b.png")}
              width={150}
              height={150}
              alt="AJS Aura - Web Design & Development Company Logo"
              className="w-30 md:w-40 h-auto"
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
              <Link href={"#" as Route} className="cursor-pointer">
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
                    href={"#" as Route}
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
