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
import { Button } from "@/components/ui/button";
import { imageConfig } from "@/lib/imageConfig";
export default function Header() {
  const pathname = usePathname();

  const menu = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Clients", path: "/clients" },
    { label: "Plugin", path: "/plugin" },
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
              <Facebook
                size={20}
                className="cursor-pointer hover:text-red-500"
              />
              <Instagram
                size={20}
                className="cursor-pointer hover:text-red-500"
              />
              <Twitter
                size={20}
                className="cursor-pointer hover:text-red-500"
              />
              <Linkedin
                size={20}
                className="cursor-pointer hover:text-red-500"
              />
            </div>
            {/* Right Side Info */}
            <div className="flex gap-6 items-center">
              <div className="flex items-center gap-1">
                <Mail size={14} /> info@gmail.com
              </div>

              <div className="flex items-center gap-1">
                <Phone size={14} /> +91 9578707929
              </div>

              <div className="flex items-center gap-1">
                <HugeiconsIcon icon={WhatsappIcon} size={14} /> +91 9578707929
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
              alt="Logo"
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
                ${pathname === item.path ? "bg-white/10 text-primary border-white/30 border" : ""}
              `}
              >
                {item.label}
              </Link>
            ))}
            <div>
              <Button className="px-4 py-2 rounded-xl transition text-base!">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
