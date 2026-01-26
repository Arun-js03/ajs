"use client";

import { WhatsappIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedSocialIcon from "@/components/ui/animated-social-icon";
import { Button } from "@/components/ui/button";
import { imageConfig } from "@/lib/imageConfig";
export default function Header() {
  const pathname = usePathname();

  const menu = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Our Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
  ];
  return (
    <header className="w-full">
      {/* ---------- TOP BAR ---------- */}
      <div className="">
        {/* Left Social Icons */}
        <div className="bg-[#4C3F3C] text-white ">
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
      <div className="absolute top-10 left-0 w-full z-50 ">
        <div className="container flex items-center justify-between py-4 rounded-2xl border-white border">
          <div className="pl-6">
            <Image
              src={imageConfig.url("/logo.png")}
              width={200}
              height={200}
              alt="Zinavo - Web Design & Development Company Logo"
            />
          </div>
          <div className="flex gap-6 pr-6 items-center font-medium">
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
        </div>
      </div>
    </header>
  );
}
